const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let ricosVitaminas = [];

  const arrVitaminados = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const objVitaminados = stockProducts[index].nutritionalInfo.vitamins;

    if (stockProducts[index].nutritionalInfo.vitamins) {
      for (const [chave, valor] of Object.entries(objVitaminados)) {
        arrVitaminados.push(`${chave} - ${valor}`);
      }

      ricosVitaminas.push({
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: arrVitaminados,
      });
    }
  }
  return ricosVitaminas
};

module.exports = { getProductsRichInVitamin };
