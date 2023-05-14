import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.ImageGalleryItem} id={image.id} onClick={onClick}>
    <img
      src={image.webFormatURL}
      alt={image.tag}
      name={image.largeImageURL}
      className={css.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;