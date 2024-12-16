import styled from 'styled-components'

const ProductCard = styled.div`
  width: 30vw;
  height: 100%;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ProductImage = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }
`
const ProductLabels = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  span {
    background-color: #ff6200;
    color: #fff;
    padding: 5px;
    font-family: 'Kelly Slab', sans-serif;
    width: 130px;
    border-left: #1f1f1f solid 1px;
  }
`

const ProductName = styled.div`
  color: #fff;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 30px;
  padding-bottom: 10px;
  padding-top: 5px;
`

const ProductPrice = styled.div`
  color: #ff6200;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
`

const ProductDescription = styled.div`
  color: #fff;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 16px;
  margin-bottom: 10px;
`

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductRate = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: #fff;
    font-family: 'Kelly Slab', sans-serif;
    font-size: 20px;
  }
`

const ProductButton = styled.button`
  background-color: #ff6200;
  color: #fff;
  border: none;
  padding: 10px;
  font-family: 'Kelly Slab', sans-serif;
  font-size: 20px;
  cursor: pointer;
`
const ProductDetails = styled.div`
  margin: 10px;
`
export {
  ProductCard,
  ProductImage,
  ProductLabels,
  ProductDescription,
  ProductDetails,
  ProductHeader,
  ProductName,
  ProductRate,
  ProductPrice,
  ProductButton
}
