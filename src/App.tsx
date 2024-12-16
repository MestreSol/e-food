import './App.css'
import Header from './containers/Header'
import Carousel from './components/Carousel'
import SearchArea from './containers/searchArea'
import ProductsAreaComponent from './containers/ProductsArea'
import Footer from './containers/Footer/indext'
import GlobalStyle from './GlobalStyle'
import mockProducts from './mocks/mockProducts'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FilteredProducts from './containers/FilteredProducts'

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<ProductsAreaComponent Products={mockProducts} />}
        ></Route>
        <Route path="/filtered-products" Component={FilteredProducts}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
