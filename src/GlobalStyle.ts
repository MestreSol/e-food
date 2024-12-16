import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
  }
  body {
    background-color: #181818;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  object-fit: cover;
  align-items: center;
}

.swiper-slide img{
  width: 100vw;
  height: 385px;
  filter: blur(5px);
  object-fit: cover;
  position: relative;
}

.swiper-slide h2, .swiper-slide p{
  position: absolute;
  z-index: 1;
  color: #fff;
  font-family: "Kelly Slab", sans-serif;
}

.swiper-slide h2{
  font-size: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.swiper-slide p{
  font-size: 20px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

`

export default GlobalStyle
