class Carro {
    //chama e organiza o parenteses
    constructor(imagem, marca, modelo, ano, cor, velocidadeMaxima) {
        this.imagem = imagem
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.velocidadeMaxima = velocidadeMaxima
    }

}

var todosCarros = []

todosCarros.push(new Carro("https://cdn.motor1.com/images/mgl/J049Q/s1/honda-civic-2019.jpg", "Honda", "Civic G10", "2019", "Prata", "208 km/h"))

todosCarros.push(new Carro("http://s2-autoesporte.glbimg.com/y5gqBGiPm4m9lv5masi0kIhFCcU=/0x0:1920x1280/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/4/s/DcjNAlSNejoqt7MFPS9A/fiat-pulse.jpg", "Fiat", "Pulse", "2025", "Azul", "215 km/h"))

todosCarros.push(new Carro("https://upload.wikimedia.org/wikipedia/commons/a/a9/Volkswagen_Santana_GLS_2000_1992_2E.jpg", "Volkswagen", "Santana", "1984", "Verde", "190 km/h"))

function listarCarros(){
for (var i = 0; i < todosCarros.length; i++) {
    document.querySelector("#resultados").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${todosCarros[i].imagem}" class="card-img-top" alt="...">
  <div class="card-body">
        <h5 class="card-title">${todosCarros[i].modelo}</h5>
        <p class="card-text">${todosCarros[i].ano}</p>
  </div>
</div>`
}
}

//formulario funções 
document.querySelector("#bntCadastro").addEventListener("click", () => {
    var imagem = document.querySelector("#imagem").value
    var marca = document.querySelector("#marca").value
    var modelo = document.querySelector("#modelo").value
    var ano = document.querySelector("#ano").value
    var cor = document.querySelector("#cor").value
    var velocidadeMaxima = document.querySelector("#velocidadeMaxima").value


    todosCarros.push(new Carro(imagem,marca,modelo,ano, cor, velocidadeMaxima))

    document.querySelector("#resultados").innerHTML += ""
    listarCarros()
})
