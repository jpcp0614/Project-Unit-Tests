const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Álcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Álcool gel'
      details: {
        productId: 'Álcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
	it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
		assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails('Álcool', 'Máscara').length, 2);
		assert.strictEqual(typeof productDetails('Álcool', 'Máscara')[0], 'object');
    assert.strictEqual(typeof productDetails('Álcool', 'Máscara')[1], 'object');
		assert.strictEqual(
			productDetails('Álcool', 'Máscara')[0] !==
				productDetails('Álcool', 'Máscara')[1],
			true
		);
		assert.strictEqual(
			productDetails('Álcool', 'Máscara')[0].details.productId.endsWith(
				'123'
			) ===
				productDetails('Álcool', 'Máscara')[1].details.productId.endsWith(
					'123'
				),
			true
		);
	});
});
