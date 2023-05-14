import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onClick={onImageClick}
        image={image}
        key={index} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;