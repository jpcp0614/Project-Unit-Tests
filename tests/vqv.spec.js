const assert = require('assert');
const vqv = require('../src/vqv.js');

/*
  Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho muito com programação!
      #VQV!'

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('3 - Implemente a função `vqv`', () => {
  it('Verifica se a função `vqv` retorna a frase esperada com nome e idade', () => {
    assert.strictEqual(typeof vqv, 'function');
    assert.strictEqual(typeof vqv('Tunico', 30), 'string');
    assert.strictEqual(
      vqv('Tunico', 29),
      'Oi, meu nome é Tunico!\n' +
        'Tenho 29 anos,\n' +
        'trabalho muito com programação!\n' +
        '#VQV!',
    );
    assert.strictEqual(
			vqv('Alberto', 30),
			'Oi, meu nome é Alberto!\n' +
				'Tenho 30 anos,\n' +
				'trabalho muito com programação!\n' +
				'#VQV!'
		);
    assert.strictEqual(
			vqv('Hamaji', 29),
			'Oi, meu nome é Hamaji!\n' +
				'Tenho 29 anos,\n' +
				'trabalho muito com programação!\n' +
				'#VQV!'
		);
    assert.strictEqual(vqv(), undefined);
  });
});
