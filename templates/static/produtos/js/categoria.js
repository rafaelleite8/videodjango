const botoesCategoria = document.querySelectorAll('.link-categoria')

botoesCategoria.forEach(botao => {
    botao.addEventListener('click', function(event) {

    const parametrosDePesquisa = window.location.search;

    if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search)

    }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    let idBotao = botao.getAttribute('id');
    let idBotaoModificado = idBotao.replace(/-/g, " ")
    params.set('categoria', idBotaoModificado)

    let urlAtual = window.location.pathname;

    urlAtual += "?" + params.toString()
    window.history.pushState({}, '', urlAtual)

    location.reload()

    })})





const bntvoltarPagina = document.querySelectorAll('.voltar-pagina-bnt')
const bntproximaPagina = document.querySelectorAll('.proxima-pagina-bnt')

bntvoltarPagina.forEach(botao => {
botao.addEventListener('click', voltarPagina) })

bntproximaPagina.forEach(botao => {
botao.addEventListener('click', proximaPagina) })


function voltarPagina() {

    const parametrosDePesquisa = window.location.search

    if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search) }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    let pagina = parseInt(params.get('pagina'))
    pagina = pagina - 1
    params.set('pagina', pagina)

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)

    location.reload()
    window.scrollTo(0, 0)
}


function proximaPagina() {

    const parametrosDePesquisa = window.location.search

    if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search) }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    let pagina = parseInt(params.get('pagina'))
    pagina = pagina + 1
    params.set('pagina', pagina)

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)

    location.reload()
    window.scrollTo(0, 0)
}


const bntEnviarpalavra = document.querySelector('.clickfiltro')
const inputPalavraChave = document.querySelector('.imput-palavra-chave')


bntEnviarpalavra.addEventListener('click', enviarPalavrachave)
document.addEventListener('keydown', enviarPalavrachaveTecla)
function enviarPalavrachave(){

    const parametrosDePesquisa = window.location.search

    if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search) }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    const inputpalavrachave = document.getElementById('palavrachave-id')
    const valorDigitado = inputpalavrachave.value

    params.set('palavrachave', valorDigitado)

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)

    location.reload()

}

function enviarPalavrachaveTecla() {
    if (event.keyCode === 13) {
        if (document.activeElement === inputPalavraChave) {
            const parametrosDePesquisa = window.location.search

            if (parametrosDePesquisa) {
                params = new URLSearchParams(window.location.search) }

            else {
                params = new URLSearchParams()
                params.append('pagina', '1')
                params.append('categoria', 'Todas as Categorias')
                params.append('ordenar', 'none')
                params.append('palavrachave', 'none') }

            const inputpalavrachave = document.getElementById('palavrachave-id')
            const valorDigitado = inputpalavrachave.value

            params.set('palavrachave', valorDigitado)

            let urlAtual = window.location.pathname
            urlAtual += "?" + params.toString()

            window.history.pushState({}, '', urlAtual)

            location.reload()
}}}


const botoesOrdenar = document.querySelectorAll('.link-ordenar')

botoesOrdenar.forEach(botao => {
    botao.addEventListener('click', function(event) {

    const parametrosDePesquisa = window.location.search;

    if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search)

    }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    let idBotao = botao.getAttribute('id')
    let idBotaoModificado = idBotao.replace(/-/g, " ")
    params.set('ordenar', idBotaoModificado)

    let urlAtual = window.location.pathname;

    urlAtual += "?" + params.toString()
    window.history.pushState({}, '', urlAtual)

    location.reload()

    })})



const bntcategoria = document.querySelector('.categorias-selecao')
const secaoCategoria = document.querySelector('.todas-categorias-div')
const imgCategoria = document.querySelector('.img-categorias')

bntcategoria.addEventListener('click', mostrarCategorias)


function mostrarCategorias() {
    if (bntcategoria.id == 'categoria-fechada') {
        secaoCategoria.style.display = 'flex'
        imgCategoria.src = "/static/produtos/img/seta-para-cima.svg"
        bntcategoria.id = 'categoria-aberta' }

    else {
        secaoCategoria.style.display = 'none'
        imgCategoria.src = "/static/produtos/img/seta-para-baixo.svg"
        bntcategoria.id = 'categoria-fechada' }
}


const bntordenar = document.querySelector('.ordenar-filtro-bnt')
const secaoOrdenar = document.querySelector('.ordenar-filtro-lista-secao')
const imgOrdenar = document.querySelector('.img-ordenar')

bntordenar.addEventListener('click', mostrarOrdenar)


function mostrarOrdenar() {
    if (bntordenar.id == 'ordenar-fechado') {
        secaoOrdenar.style.display = 'flex'
        imgOrdenar.src = "/static/produtos/img/seta-para-cima.svg"
        bntordenar.id = 'ordenar-aberto' }

    else {
        secaoOrdenar.style.display = 'none'
        imgOrdenar.src = "/static/produtos/img/seta-para-baixo.svg"
        bntordenar.id = 'ordenar-fechado' }
    }