import { useLocation } from 'react-router-dom'
import SearchAreaComponent from '../searchArea'
import { useEffect, useState } from 'react'
import mockProducts from '../../mocks/mockProducts'
import { Product as ProductType, ProductLabel } from '../../types/Product'
import Product from '../../components/Product'
import { Header, HeaderContainer, ProductsArea } from './styled'
const FilteredProducts: React.FC = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const label = params.get('label')
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([])
  const [firstProduct, setFirstProduct] = useState<ProductType>()
  useEffect(() => {
    if (label) {
      const filtered = mockProducts.filter((product) =>
        product.labels.includes(label as ProductLabel)
      )
      setFilteredProducts(filtered)

      const first = filtered[0]
      setFirstProduct(first)
    }
  }, [label])

  return (
    <>
      <Header style={{ backgroundImage: `url('${firstProduct?.img}')` }}>
        <HeaderContainer>
          <h2 className="SectionName">Filtered Products</h2>
          <p className="SectionFilter">Filter applied: {label}</p>
        </HeaderContainer>
      </Header>
      <SearchAreaComponent></SearchAreaComponent>
      <ProductsArea>
        {filteredProducts.map((product) => (
          <Product Product={product}></Product>
        ))}
      </ProductsArea>
    </>
  )
}

export default FilteredProducts
