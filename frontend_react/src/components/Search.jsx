import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const onClear = () => {
    setQuery('')
    onSearch('');
  }

  return (
    <div className="search">
      <label htmlFor="query">Procurar:</label>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onClear}>Limpar</button>
      <button onClick={() => onSearch(query)}>Procurar</button>
    </div>
  );
};

export default Search;
