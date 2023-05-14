import css from './Searchbar.module.css';
import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => (
  <header className={css.Searchbar}>
    <form onSubmit={onSubmit} className={css.SearchForm} role='search'>
      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="inputSearch" />
      <button className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search </span>
      </button>
    </form>
  </header>
);



Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

export default Searchbar;