const stockProducts = require('./data.json');

const searchProductByName = (nomeProcurado) => {
  let prodEstoque;
  let preco = {};
  for (let index = 0; index < stockProducts.length; index += 1) {
    const stockProduct = stockProducts[index];
    if (stockProducts[index].productName === nomeProcurado) {
      preco = {
        description: stockProduct.description,
        formattedPrice: `R$ ${stockProduct.price}`,
      };
      return preco;
    }
  }
    prodEstoque = null;
 return prodEstoque;
};
module.exports = { searchProductByName };
