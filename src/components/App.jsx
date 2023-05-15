import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { getImage } from './Services/PixabayApi';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    page: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
    totalHits: 0
  };

  handleSubmit = async e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    this.setState({ isLoading: true });

    const inputSearch = e.target && e.target.elements && e.target.elements.inputSearch;
    if (!inputSearch || inputSearch.value.trim() === '') {
      this.setState({ isLoading: false });
      return;
    }

    try {
      const response = await getImage(inputSearch.value, 1);
      this.setState({
        images: response.images,
        isLoading: false,
        currentSearch: inputSearch.value,
        page: 1,
        totalHits: response.totalHits
      });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  handleClickMore = async () => {
    const response = await getImage(
      this.state.currentSearch,
      this.state.page + 1
    );
    this.setState({
      images: [...this.state.images, ...response.images],
      page: this.state.page + 1,
    });
  };
  handleImageClick = e => {
    this.setState({
      modalOpen: true,
      modalImg: e.target.name,
      modalAlt: e.target.alt,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.handleModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery
              onImageClick={this.handleImageClick}
              images={this.state.images}
            />
            {this.state.images.length > 0 && this.state.images.length < this.state.totalHits ? (
              <Button onClick={this.handleClickMore} />
            ) : null}
          </React.Fragment>
        )}
        {this.state.modalOpen ? (
          <Modal
            src={this.state.modalImg}
            alt={this.state.modalAlt}
            handleClose={this.handleModalClose}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
