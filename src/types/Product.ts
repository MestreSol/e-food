enum ProductLabel {
  HOT = "Hot",
  NEW = "New",
}
export type Product ={
  labels: ProductLabel[];
  name: string;
  rate: number;
  description: string;
  price: string;
  id: string;
  img: string;
}
