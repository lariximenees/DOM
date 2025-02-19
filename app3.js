// criar uma função que recebe o valor em reais e a moeda desejada
// retornar o valor convertido para a moeda desejada
// criar um array com varias moedas, com os seus nomes e preços frente ao real brasileiro

const moedas = [
  {
    nome: "Real",
    simbolo: "R$",
    preco: 1,
  },
  {
    nome: "Dolar",
    simbolo: "$",
    preco: 5.2,
  },
  {
    nome: "Euro",
    simbolo: "€",
    preco: 6.9,
  },
  {
    nome: "Libra",
    simbolo: "£",
    preco: 8.9,
  },
  {
    nome: "Bitcoin",
    simbolo: "BTC",
    preco: 50000,
  },
];

function converterMoeda(moeda, valor) {

  let moeda = document.querySelector("#moeda").value;
  let valor = document.querySelector("#valor").value;

  for (let i = 0; i < moedas.length; i++) {
    if (moedas[i].nome === moeda) {
      let valorConvertido = valor * moedas[i].preco;
      alert(`O valor convertido é ${valorConvertido} ${moedas[i].simbolo}`);
    }
  }
}











