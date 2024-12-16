import { ProductLabel, type Product } from '../types/Product';

const mockProducts: Product[] = [
  {
    labels: [ProductLabel.HOT, ProductLabel.BRA],
    name: "Pão de Queijo",
    rate: 4.8,
    description: "Tradicional pão de queijo brasileiro, perfeito para qualquer momento.",
    price: "$5.00",
    id: "201",
    img: "https://static.itdg.com.br/images/1200-630/dfc5a3f918dc30f32747b44cd3a18712/pao-de-queijo-facil-e-delicioso-3-.jpg"
  },
  {
    labels: [ProductLabel.NEW, ProductLabel.JAP],
    name: "Sushi Set Deluxe",
    rate: 5.0,
    description: "Conjunto de sushi premium com peixes frescos e ingredientes de alta qualidade.",
    price: "$25.00",
    id: "202",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/4a/c7/5d/taishi-temakeria.jpg?w=600&h=-1&s=1"
  },
  {
    labels: [ProductLabel.ENG, ProductLabel.HOT],
    name: "Fish and Chips",
    rate: 4.7,
    description: "Clássico prato inglês, crocante e delicioso.",
    price: "$12.00",
    id: "203",
    img: "https://www.thespruceeats.com/thmb/sdVTq0h7xZvJjPr6bE2fhh5M3NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-best-fish-and-chips-recipe-434856-hero-01-27d8b57008414972822b866609d0af9b.jpg"
  },
  {
    labels: [ProductLabel.GER],
    name: "Bratwurst",
    rate: 4.5,
    description: "Salsicha alemã grelhada, cheia de sabor e tradição.",
    price: "$8.00",
    id: "204",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_UI8pQb2-GAuUDtdRwGugVkfouwPRS7KeQ&s"
  },
  {
    labels: [ProductLabel.HOT, ProductLabel.NEW],
    name: "Ramen Spicy",
    rate: 4.9,
    description: "Ramen picante japonês com caldo rico e ingredientes frescos.",
    price: "$15.00",
    id: "205",
    img: "https://dinnerthendessert.com/wp-content/uploads/2023/08/Spicy-Ramen-10.jpg"
  },
  {
    labels: [ProductLabel.BRA],
    name: "Feijoada",
    rate: 4.8,
    description: "Prato típico brasileiro com feijão preto e carnes suculentas.",
    price: "$18.00",
    id: "206",
    img: "https://alegrafoods.com.br/wp-content/uploads/2023/06/composicao-kit-feijoada-scaled.jpg"
  },
  {
    labels: [ProductLabel.GER],
    name: "Pretzel",
    rate: 4.6,
    description: "Pretzel alemão clássico com sal grosso e textura macia.",
    price: "$4.00",
    id: "207",
    img: "https://saborfacil.com/wp-content/uploads/2024/01/pretzel-alemao.png"
  },
  {
    labels: [ProductLabel.JAP],
    name: "Mochi",
    rate: 4.9,
    description: "Sobremesa japonesa feita com arroz glutinoso e recheios variados.",
    price: "$6.00",
    id: "208",
    img: "https://blog.atacadao.com.br/wp-content/uploads/2023/09/Doce-japones-mochi-aprenda-a-fazer-Foto-de-diferentes-sabores-de-mochi-Atacadao.jpg"
  },
  {
    labels: [ProductLabel.ENG],
    name: "Shepherd's Pie",
    rate: 4.7,
    description: "Torta inglesa recheada com carne moída e purê de batatas.",
    price: "$14.00",
    id: "209",
    img: "https://healthyschoolrecipes.com/wp-content/uploads/2019/02/Beef_Shepherds_Pie_D43_PHOTO_2-1.jpg"
  },
  {
    labels: [ProductLabel.HOT],
    name: "Pizza Margherita",
    rate: 4.8,
    description: "Pizza italiana clássica com molho de tomate, queijo e manjericão.",
    price: "$10.00",
    id: "210",
    img: "https://s2-receitas.glbimg.com/c9vjNPzOeu1WdW8jvhuuRecGni4=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/h/r/EfCbvqTbeDRAD3Lzc5xA/pizza-margherita.jpg"
  },
  {
    labels: [ProductLabel.BRA, ProductLabel.HOT],
    name: "Coxinha",
    rate: 4.9,
    description: "Salgado brasileiro recheado com frango e massa crocante.",
    price: "$3.00",
    id: "211",
    img: "https://s2-receitas.glbimg.com/Ja8NZaG1ssHrb11KAkar6W45_5Q=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/k/B/Vq9PKJTU2bEDIEhBIz9g/coxinha-pratica.jpg"
  },
  {
    labels: [ProductLabel.JAP],
    name: "Matcha Latte",
    rate: 4.8,
    description: "Bebida cremosa japonesa feita com chá verde matcha e leite.",
    price: "$5.00",
    id: "212",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGvNoM8uz6I6Pi2nqhkyzn5dVCTuZSJDkSw&s"
  }
];

export default mockProducts;
