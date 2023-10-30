const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const arrAlergia = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
      const objProduto = stockProducts[index];
    if (stockProducts[index].allergyOrIntolerance) {
      const strAlergia = stockProducts[index].allergyOrIntolerance.join(' ')
      arrAlergia.push({
        description: objProduto.description,
        allergyOrIntoleranceMessage: `Pode conter: ${strAlergia}`,
        formattedPrice: `R$ ${objProduto.price}`,
      });
      }
    }
    return arrAlergia;
  }
 
  
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
