const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let total = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    total += stockProducts[index].quantityInStock;
  }
  return total;
};
module.exports = { getProductsAmount };
