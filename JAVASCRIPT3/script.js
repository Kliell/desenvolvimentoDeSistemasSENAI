/*var produto1 = "Jogo Midnight Club"
var produto2 = "Camiseta esportiva"
var produto3 = "Guitarra"*/

//var produtos = Array();
var produtos = [];
console.log(produtos)

produtos[0] = "Guitarra"
produtos[1] = "Camiseta esportiva"
produtos[2] = "Jogo Midnight Club"
console.log(produtos)

var carrinho =["Tenis da adidas"]

//comandos do array
carrinho.push("Violão")
console.log(carrinho)
//add no carrinho
carrinho.unshift("Placa de video")
console.log(carrinho)
//remove no fim 
carrinho.pop()
console.log(carrinho)
//remove no começo
carrinho.shift()
console.log(carrinho)
//mexe no meio (indice, quantos sobrescreve, dados)
carrinho.push("Kit Kat")
carrinho.push("Relogio de couro")
carrinho.push("Diamante do free fire")
console.log(carrinho)
carrinho.splice(2,0, "Robux")
carrinho.splice(4,1)
console.log(carrinho)
carrinho.splice(0,1, "Tenis da Nike")
console.log(carrinho)