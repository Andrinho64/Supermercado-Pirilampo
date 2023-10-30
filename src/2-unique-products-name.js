const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let estoque = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    estoque.push(stockProducts[index].productName);
  }

  return estoque;
};
module.exports = { getUniqueProductsName };
