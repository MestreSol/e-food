import { ProductsArea } from './styled'
import type { Product as ProductType } from '../../types/Product'
import Product from '../../components/Product'
import Carousel from '../../components/Carousel'
import SearchAreaComponent from '../searchArea'
type Props = {
  Products: ProductType[]
}
const ProductsAreaComponent = (prop: Props) => {
  return (
    <>
      <Carousel></Carousel>
      <SearchAreaComponent></SearchAreaComponent>
      <ProductsArea>
        {prop.Products.map((product) => (
          <Product Product={product}></Product>
        ))}
      </ProductsArea>
    </>
  )
}

export default ProductsAreaComponent
