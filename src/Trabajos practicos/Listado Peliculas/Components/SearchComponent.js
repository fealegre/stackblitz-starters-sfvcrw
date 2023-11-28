import React, { useState } from 'react';
import { useState } from 'react'

function SearchComponent() {
  const [search, setSearch] = useState('')
  return (
      <form action="" className="search-bar">
          <input
              type="search"
              value={search}
              name="search"
              pattern=".*\S.*"
              required
              onChange={(e) => setSearch(e.target.value)} />
          <button className="search-btn" type="submit">
              <span>Search</span>
          </button>
      </form>
  )
}

export default SearchComponent;