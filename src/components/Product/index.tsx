enum ProductLabel {
  HOT = "Hot",
  NEW = "New",
}
type Props = {
  labels: ProductLabel[];
  name: string;
  rate: number;
  description: string;
  price: string;
  id: string;
  img: string;
}  

const Product = (prop: Props) => {
  return (
    <div className="product">
    <div className="product-image">
      <img src="https://via.placeholder.com/150" alt="product" />
      <div className="product-labels">
        {
          prop.labels.map((label) => (
            <span>{label}</span>
          ))
        }
      </div>
    </div>
    <div className="product-detail"> 
    <div className="product-header">
      <div className="product-name">{prop.name}</div>
      <div className="product-rate">
        <span>{prop.rate}</span>
        <img src="${prop.img}"></img>
      </div>
    </div>
    <div className="product-description">
      {prop.description}
    </div>
    <div className="product-price">{prop.price}</div>
    <button className="product-button">
      Add to Cart
    </button>
    </div>
  </div>
  );
}
