function atv1()
{
var filmes = [];
console.log(filmes)

filmes[0]="Batman: A Piada Mortal"
filmes[1]="Titanic"
filmes[2]="Creed"
console.log(filmes)
}

function atv2()
{
var numeros = [] 
console.log(numeros)

for(i = 0; i <= 2; i++){
        var numero = Number(prompt(`Digite o seu ${i + 1}º número:`));
         numeros.push(numero)
}

for(i = 2; i >= 0; i-- ){

console.log(numeros[i])

}

}