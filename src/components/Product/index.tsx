import type { Product } from "../../types/Product";
type Props = {
  Product: Product;
}  

const Product = (prop: Props) => {
  return (
    <div className="product">
    <div className="product-image">
      <img src="https://via.placeholder.com/150" alt="product" />
      <div className="product-labels">
        {
          prop.Product.labels.map((label) => (
            <span>{label}</span>
          ))
        }
      </div>
    </div>
    <div className="product-detail"> 
    <div className="product-header">
      <div className="product-name">{prop.Product.name}</div>
      <div className="product-rate">
        <span>{prop.Product.rate}</span>
        <img src="${prop.img}"></img>
      </div>
    </div>
    <div className="product-description">
      {prop.Product.description}
    </div>
    <div className="product-price">{prop.Product.price}</div>
    <button className="product-button">
      Add to Cart
    </button>
    </div>
  </div>
  );
}
