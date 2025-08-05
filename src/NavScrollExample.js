import React from 'react';

const NavScrollExample = ({
  searchText,
  setSearchText,
  handleSearch,
  isSearchActive,
  handleClearSearch
}) => {
  return (
    <nav
      className="navbar navbar-light bg-light my-3"
      style={{ height: '80px', padding: '20px 10px' }}
    >
      <div className="container-fluid" style={{ paddingLeft: '20px', paddingRight: '50px' }}>
        <span className="navbar-brand mb-0 h1">Todo List App</span>
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search todos"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {!isSearchActive ? (
            <button className="btn btn-outline-success" onClick={handleSearch}>
              Search
            </button>
          ) : (
            <button className="btn btn-outline-secondary" onClick={handleClearSearch}>
              Back
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavScrollExample;
