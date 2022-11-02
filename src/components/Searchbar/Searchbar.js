import { useState } from 'react';
import PropTypes from 'prop-types';
import searchbar from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeSearchQuery = searchQuery.trim().toLowerCase();
    if (!normalizeSearchQuery) {
      return;
    }
    onSubmit(normalizeSearchQuery);
    setSearchQuery('');
  };

  return (
    <header className={searchbar.Searchbar}>
      <form className={searchbar.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={searchbar.SearchFormButton}>
          <span className={searchbar.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={searchbar.SearchFormInput}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
