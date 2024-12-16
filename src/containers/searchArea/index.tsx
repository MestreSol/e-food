import { Search, SearchArea, SearchButton, SearchSelect } from './styled'

const SearchAreaComponent = () => {
  return (
    <Search>
      <SearchArea>
        <input type="text" placeholder="Pesquisar" />
        <SearchButton>
          <img src="/search.png" alt="search" />
        </SearchButton>
      </SearchArea>
      <SearchSelect>
        <option value="0">Tipo</option>
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
        <option value="3">Categoria 3</option>
      </SearchSelect>
      <SearchSelect>
        <option value="0">Região</option>
        <option value="1">Cidade 1</option>
        <option value="2">Cidade 2</option>
        <option value="3">Cidade 3</option>
      </SearchSelect>
    </Search>
  )
}

export default SearchAreaComponent
