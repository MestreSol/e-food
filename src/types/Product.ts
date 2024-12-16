export enum ProductLabel {
  HOT = "Hot",
  NEW = "New",
  ENG = "English",
  GER = "Germanic",
  BRA = "Brazilian",
  JAP = "Japanize"
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
