const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let donaFilo = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      donaFilo.push(stockProducts[index].productName);
    }
  }
  return donaFilo;
};

module.exports = { getOutOfStockProducts };
