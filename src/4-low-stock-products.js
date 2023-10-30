const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let donaFilo = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      const nomeProduto = stockProducts[index].productName;
      const qtdEstoque = stockProducts[index].quantityInStock;
      donaFilo.push(`${nomeProduto}: ${qtdEstoque} unidades`);
    }
  }
  return donaFilo;
};
module.exports = { getLowStockProducts };
