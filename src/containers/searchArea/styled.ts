import styled from 'styled-components'

const Search = styled.div`
  width: 98vw;
  height: 60px;
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
  }
`

const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 52px;
  input {
    width: 45vw;
    height: 21px;
    border: none;
    padding: 10px;
    font-family: 'Kelly Slab', sans-serif;
    background-color: transparent;
    color: #fff;
    border-bottom: #fff solid;
  }

  input::placeholder {
    font-family: 'Kelly Slab', sans-serif;
  }
`

const SearchButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Kelly Slab', sans-serif;
`

const SearchSelect = styled.select`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px;
  font-family: 'Kelly Slab', sans-serif;
  border-bottom: #fff solid;
  text-align: center;
  font-size: 1.2rem;

  option {
    background-color: #1f1f1f;
    color: #fff;
    font-family: 'Kelly Slab', sans-serif;
  }
`

export { Search, SearchArea, SearchButton, SearchSelect }
