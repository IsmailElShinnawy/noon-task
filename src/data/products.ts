import { Product } from "@/types";
import { faker } from "@faker-js/faker";

const products: Array<Product> = [];

for(let i = 0; i < 20; ++i) {
  products.push({
    id:  faker.string.uuid(),
    description:  faker.lorem.paragraph(),
    img: faker.image.url(),
    numberOfComments: faker.number.int({max: 200}),
    numberOfFavorites: faker.number.int({max: 200}),
    price: faker.number.float({precision: 2, min: 100, max: 1000}),
    seller: {
      img: faker.image.avatar(),
      username: faker.internet.userName()
    },
    tags: faker.lorem.words(5).split(" "),
    title: faker.commerce.productName()
  })
}

export {
  products
}