import './App.css'
import Header from './containers/Header'
import Carousel from './components/Carousel'
import SearchArea from './containers/searchArea'
import ProductsAreaComponent from './containers/ProductsArea'
import Footer from './containers/Footer/indext'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Carousel></Carousel>
      <SearchArea></SearchArea>
      <ProductsAreaComponent></ProductsAreaComponent>
      <Footer></Footer>
    </>
  )
}

export default App
