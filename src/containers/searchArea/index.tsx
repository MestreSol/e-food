const SearchArea = () => {
  return (
    <div className="search">
      <div className="search-area">
        <input type="text" placeholder="Pesquisar" />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </div>
      <div className="search-select">
        <select>
          <option value="0">Tipo</option>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
      </div>
      <div className="search-select">
        <select>
          <option value="0">Região</option>
          <option value="1">Cidade 1</option>
          <option value="2">Cidade 2</option>
          <option value="3">Cidade 3</option>
          </select>
      </div>
    </div>
  );
}

export default SearchArea;
