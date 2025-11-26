class Filme {
    //chama e organiza o parenteses
    constructor(nome, logo, categoria, desc) {
        this.nome = nome
        this.logo = logo
        this.categoria = categoria
        this.desc = desc
    }

}

var todosFilmes = []

todosFilmes.push(new Filme("Piada Mortal", "https://m.media-amazon.com/images/S/pv-target-images/2783c0d2b45423502bf5e07524fd317d1a19c47a7133d104460371646b686945.jpg", "Investigação, Super Heroi, Drama", "O Coringa escapa e ataca o Comissário Gordon e sua família para tentar enlouquecê-lo. Batman precisará salvá-los."))

todosFilmes.push(new Filme("Vingadores", "https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg", "Ação", "Avengers se refere a um grupo de super-heróis da Marvel Comics, tanto em quadrinhos quanto no popular universo cinematográfico e de jogos. O grupo, que inclui membros icônicos como Homem de Ferro, Capitão América e Thor, é conhecido por se reunir para combater ameaças que nenhum herói consegue sozinho. Há filmes, séries, jogos e outras mídias dedicadas à equipe."))

todosFilmes.push(new Filme("O Impossível", "https://s2-globo-play.glbimg.com/MtK8zkhhF8QETvuowLw9lj2gV5c=/362x536/https://s2-globo-play.glbimg.com/IDD_WdHNj5SONrRPYox9KzOSHqg=/https://s2.glbimg.com/ER8yh47tu7moNPEpzcSiA4HIxDc=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/o/A/H5p06gRaW2xBwvIW7RTg/1563708-poster.jpg", "Drama", "Baseado em fatos reais, este drama retrata as experiências terríveis de uma família durante o caos gerado pelo tsunami que atingiu o sudoeste da Ásia em 2004."))

function listarFilmes(){
for (var i = 0; i < todosFilmes.length; i++) {
    document.querySelector("#resultados").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${todosFilmes[i].logo}" class="card-img-top" alt="...">
  <div class="card-body">
        <h5 class="card-title">${todosFilmes[i].nome}</h5>
        <p class="card-text">${todosFilmes[i].desc}</p>
  </div>
</div>`
}
}

//formulario funções 
document.querySelector("#bntCadastro").addEventListener("click", () => {
    var nome = document.querySelector("#nome").value
    var logo = document.querySelector("#logo").value
    var categoria = document.querySelector("#categoria").value
    var desc = document.querySelector("#desc").value

    todosFilmes.push(new Filme(nome,logo,categoria,desc))

    document.querySelector("#resultados").innerHTML += ""
    listarFilmes()
})
