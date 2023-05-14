import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    value: ''
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm} role='search'>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputSearch"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>
              Search
            </span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;