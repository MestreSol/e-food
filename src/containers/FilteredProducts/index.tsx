import { useLocation } from "react-router-dom";
import SearchAreaComponent from "../searchArea";
import { useEffect, useState } from "react";
import mockProducts from "../../mocks/mockProducts";
import { Product as ProductType, ProductLabel } from "../../types/Product";
import Product from "../../components/Product";
import { ProductsArea } from "./styled";
const FilteredProducts: React.FC = () =>{
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const label = params.get('label');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(()=> {
    if(label){
      const filtered = mockProducts.filter(product => product.labels.includes(label as ProductLabel));
      setFilteredProducts(filtered);
    }
  },[label])
  return (
    <>
      <div className="Header">
        <h2 className="SectionName">Filtered Products</h2>
        <p className="SectionFilter">Filter applied: {label}</p>
      </div>
      <SearchAreaComponent></SearchAreaComponent>
       <ProductsArea>
        {
          filteredProducts.map((product) => (
            <Product Product={product}></Product>
          ))
        }
      </ProductsArea>
    </>
  );
}

export default FilteredProducts;
