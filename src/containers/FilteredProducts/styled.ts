import styled from "styled-components";

const ProductsArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #1f1f1f;
  box-shadow: 0 0 10px #000;
`;

const Header = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  ::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: inherit;
  background-size: inherit;
  background-position: inherit;
  background-repeat: inherit;
  filter: blur(5px);
  z-index: 1;
}
`

const HeaderContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 2;
  color: #ff6200;
  font-family: "Kelly Slab", sans-serif;
  padding:10px;
  background-color: argb(255,255,255, 0.5);
  h2 {
    margin: 25px;
    margin-bottom: 0px;
  }
  p {
    margin: 25px;
    margin-top: 0px;
  }
`

export { ProductsArea, Header, HeaderContainer };
