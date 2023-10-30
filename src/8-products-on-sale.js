const stockProducts = require('./data.json');

const getProductsOnSale = (off) => {
  let promocao = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const produto = stockProducts[index];
    if (stockProducts[index].onSale === true) {
      promocao.push({
        description: produto.description,
        formattedPrice: `R$ ${produto.price}`,
        onSale: true,
      });
      }
    }
    return promocao;
};

module.exports = { getProductsOnSale };
