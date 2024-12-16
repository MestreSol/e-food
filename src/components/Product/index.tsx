import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
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
} from './styled'
import type { Product as ProductType } from '../../types/Product'

type Props = {
  Product: ProductType
}

const Product: React.FC<Props> = ({ Product }) => {
  const navigate = useNavigate()
  const handleFilter = (label: string) => {
    navigate(`/filtered-products?label=${label}`)
  }
  return (
    <ProductCard>
      <ProductImage>
        <img src={Product.img} alt={Product.name} />
        <ProductLabels>
          {Product.labels.map((label, index) => (
            <span key={index} onClick={() => handleFilter(label)}>
              {label}
            </span>
          ))}
        </ProductLabels>
      </ProductImage>
      <ProductDetails>
        <ProductHeader>
          <ProductName>{Product.name}</ProductName>
          <ProductRate>
            <img src="/star.png" alt="star" />
            <span>{Product.rate}</span>
          </ProductRate>
        </ProductHeader>
        <ProductDescription>{Product.description}</ProductDescription>
        <ProductPrice>{Product.price}</ProductPrice>
        <ProductButton>Add to Cart</ProductButton>
      </ProductDetails>
    </ProductCard>
  )
}

export default Product
