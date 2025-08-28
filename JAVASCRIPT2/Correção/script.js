//ctrl :, alt shift f 
function ex1(){
    /*var contador = 1 
    while (contador <= 10){
    contador++ }*/ 
    let tabuada = Number(prompt("Qual a tabuada?")); 
    for(i=1; i <= 10; i++){
        alert(`${tabuada} x ${i} = ${i*tabuada}`)
    }  
}

function ex2(){
    for(i = 100; i <=110; i++){
        alert(i)
    }
}

function ex3(){
    var soma = 0
    for(i = 1; i <= 10; i++){
        let numero = Number(prompt(`Digite o seu ${i}º número:`));
        soma += numero 
    }
    alert(`A soma dos numeros é de ${soma}`)
}