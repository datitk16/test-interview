// server > filldata.js
const faker = require('faker');

const database = {
  products: []
};

for (let i = 1; i <= 10; i++) {
  database.products.push({
    id: i,
    price: faker.datatype.number(),
    description: faker.commerce.productName(),
    name: faker.commerce.product(),
    imageUrl: faker.image.avatar(),
    status: faker.datatype.boolean(),
    category: faker.commerce.department()
  });
}
console.log(JSON.stringify(database));
