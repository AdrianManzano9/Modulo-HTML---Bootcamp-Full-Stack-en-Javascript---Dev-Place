const { Product } = require("./models/prod.model")
const { Category } = require('./models/category.model')
const database = require("./config/mysql")

const productos = [
  {
    linkImg: "https://images.fravega.com/f300/fd1ed2f39ba48cbe93c3d8299d76ee96.jpg.webp",
    CategoryId: 2,
    descrip: "'Notebook Lenovo 14' Intel Pentium 4GB 256GB IP1-81VU006Q",
    precio: 84999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/a7a64fe0c101384de5abfe6143bc1eb0.jpg.webp",
    CategoryId: 1,
    descrip: "Celular Samsung Galaxy S20 FE 5G 128GB Azul",
    precio: 129999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/560713a6415e62862d5fb8b51db32490.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV 55' QLED 4K Samsung QN55Q65BAGCF",
    precio: 159999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/7fe2bb17393e1459f495bc39d8c7bc10.jpg.webp",
    CategoryId: 2,
    descrip: "'Notebook Dell Inspiron I3 511 15.6' 256GB 4GB",
    precio: 199999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/13890bd15f4f552457d38251e9ac7fab.jpg.webp",
    CategoryId: 1,
    descrip: "Celular Motorola E20 32GB Azul",
    precio: 33999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/b02f3e46c89fe14a5c4689ba6ac9bc08.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV 32' HD Samsung UN32T4300A",
    precio: 49999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/2b8bec7b27b84ce65b44c684e77dcd84.jpg.webp",
    CategoryId: 2,
    descrip: "Cloudbook eNova 14 Celeron N4020 RAM 4GB SSD 120GB Windows 10",
    precio: 75999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/f741c5dc03f09eebef57e56dcc86c8f9.jpg.webp",
    CategoryId: 1,
    descrip: "Celular Samsung Galaxy A23 128GB Negro",
    precio: 81999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/0ec3af99701dbf0665ec61ea3816b028.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV Full HD Samsung 43' UN43T5300A",
    precio: 84999,
    cantD: 20,
    cant: 0,
  },
  {
    linkImg: "https://images.fravega.com/f300/ae40dd821ce32f7dac145b2b7324ac57.jpg.webp",
    CategoryId: 2,
    descrip: "Notebook Dell 15,6” Ryzen 5 8GB 256GB SSD Inspiron 15 3515 24DV0",
    precio: 239999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/e788ab6fe5608762f6b01e10945c871e.jpg.webp",
    CategoryId: 1,
    descrip: "Celular Samsung Galaxy M23 5G 128GB Green",
    precio: 99999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/754b33ca1a9ce2b9145a793aaf316c3e.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV QLED 4K 98' TCL L98C735",
    precio: 1299999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/f0ef28b9dea1d9f1e07ce69215c29bdf.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV 4K 55' LG 55UP7750PSB",
    precio: 129999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/6611aa8b7c381eab447bd6dbe722b7c0.jpg.webp",
    CategoryId: 2,
    descrip: "Notebook HP 13,3” Intel Core i7 8GB 512GB SSD Envy 13-BA1124LA",
    precio: 259999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/3718e2f904770c5a92c1d8578a4bd588.jpg.webp",
    CategoryId: 1,
    descrip: "Celular Motorola Moto G52 128GB Negro",
    precio: 69999,
    cantD: 20,
    cant: 0,
  },
  {

    linkImg: "https://images.fravega.com/f300/b96d94fb4da04a80ccb944e316a93343.jpg.webp",
    CategoryId: 3,
    descrip: "'Smart TV 4K 65' LG 65UP7750PSB",
    precio: 199999,
    cantD: 20,
    cant: 0,
  }
];

const categories = [
  {
    name: "Celular"
  }, {
    name: 'Notebook'
  }, {
    name: "TV"
  }
]
database.sync({ force: false }).then(() => {
  console.log("Conexion establecida")
}).then(() => {

  // categories.map(c =>
  //   Category.create(c)
  // )

  
  productos.map(p =>
    Product.create(p)
  )

 

})
