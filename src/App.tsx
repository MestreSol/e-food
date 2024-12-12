import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './containers/Header'
import Carousel from './components/Carousel'
import SearchArea from './containers/searchArea'

function App() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <SearchArea></SearchArea>
    </>
  )
}

export default App
