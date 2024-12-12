import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './containers/Header'
import Carousel from './components/Carousel'
import SearchArea from './containers/searchArea'
import ProductsArea from './containers/ProductsArea'
import Footer from './containers/Footer/indext'

function App() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <SearchArea></SearchArea>
      <ProductsArea></ProductsArea>
      <Footer></Footer>
    </>
  )
}

export default App
