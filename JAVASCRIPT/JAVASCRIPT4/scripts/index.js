var teste = "oi"
var ligado = true
var idade = 22

if(ligado){
    console.log("ligado")
}
else{
    console.log("Desligado")
}

var i = 1

while(true){
    console.log("*")
    i++

    if(i == 5){
    break
}
}
// --------------------------------------------------
//getelement -Busca o elemento e no próprio seletor é dito o tipo
var titulo = document.getElementById("titulo").innerText
//queryselector - Busca o elemento e é necessário para dizer o tipo *Seletores do Css
document.querySelector("#caixa").innerText="Propaganda"

document.querySelector("#testes").addEventListener("focusout", () => {
    alert("Front é top")
    
    var caixaAparecer=document.querySelector("#testes").value
    if(caixaAparecer == "aparecer") {
        document.querySelector("#caixa").style.display="flex"
    }
})

document.querySelector("#caixa").addEventListener("click", fechaCaixa);

function fechaCaixa(){
   document.querySelector("#caixa").style.display="none" 
}