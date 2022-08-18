const assert = require('assert');
const { create } = require('domain');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a funcao `fetchMenu` do `createMenu` devolve o objeto passado a `createMenu`', () => {
    const anyObject = { 'teste': () => anyObject };
    const objectReturn = createMenu(anyObject);

    assert(typeof objectReturn === 'object', true);
    assert(typeof objectReturn.fetchMenu === 'function', true);

    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'

    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption

    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
  it('Verifica se a função `fetchMenu` devolve um objeto com soment as chaves `keys` e `drink`', () => {
    const foodAndDrink = { food: {}, drink: {} };
    const menuItems = createMenu(foodAndDrink).fetchMenu();
    assert(Object.keys(menuItems).includes('food'), true);
    assert(Object.keys(menuItems).includes('drink'), true);
    assert(Object.values(menuItems).length === 2, true);
  });
  it('Verifica se a função `fetchMenu` recebendo um objeto com as chaves `keys` e `drinks`, o mesmo objeto identico', () => {
    const anyObject = { 'teste': () => anyObject };
    assert(createMenu(anyObject).fetchMenu() === anyObject, true);
  });
  it('Verifique que `objetoRetornado.consumption`, após a criação do menu, retorna um array vazio.', () => {
    const anyObject = { 'teste': () => anyObject };
    assert(createMenu(anyObject).fetchMenu() === anyObject, true);
  });
  it('Verifique que `objetoRetornado.consumption`, após adição de uma coxinha, ela estara dentro do array.', () => {
    const anyObject = { 'teste': () => anyObject };
    const objectReturned = createMenu(anyObject);
    objectReturned.order('coxinha');
    assert(objectReturned.consumption.includes('coxinha'), true);
  });
  it('Verifique que `objetoRetornado.consumption`, apos inserções seguidas, o array contem todas as inserções.', () => {
    const anyObject = { 'teste': () => anyObject };
    const objectReturned = createMenu(anyObject);
    objectReturned.order("coxinha");
    objectReturned.order("agua");
    objectReturned.order("sopa");
    objectReturned.order("sashimi");
    assert(objectReturned.consumption.includes('coxinha'), true);
    assert(objectReturned.consumption.includes('agua'), true);
    assert(objectReturned.consumption.includes('sopa'), true);
    assert(objectReturned.consumption.includes('sashimi'), true);
  });
  it('Verifique que `objetoRetornado.consumption`, aceita itens repetidos.', () => {
    const anyObject = { 'teste': () => anyObject };
    const objectReturned = createMenu(anyObject);
    objectReturned.order("coxinha");
    objectReturned.order("agua");
    objectReturned.order("sopa");
    objectReturned.order("sashimi");
    objectReturned.order("agua");
    const expectedArray = ['coxinha', 'agua', 'sopa', 'sashimi', 'agua'];
    assert(objectReturned.consumption === expectedArray, true);
  });
  it('Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    const foodAndDrink = { food: {}, drink: {} };
    const objectReturned = createMenu(foodAndDrink);
    objectReturned.order('coxinha');
    objectReturned.order('agua');
    objectReturned.order('coxinha');
    assert(typeof objectReturned.pay() === 'number', true);
  });
});
