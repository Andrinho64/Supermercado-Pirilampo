const stockProducts = require('./data.json');

const searchProductsByBrand = (marca) => {
  let encontrarProduto = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const produto = stockProducts[index];
    if (stockProducts[index].brand === marca) {
      encontrarProduto.push({
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
      });
      }
    }
    return encontrarProduto;
  };
module.exports = { searchProductsByBrand };
