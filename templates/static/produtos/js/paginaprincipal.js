let secaoLinksConteudo = document.querySelectorAll('.secao-links-caracteristicas')
secaoLinksConteudo.forEach(secao => {
    let bntMaisLinks = secao.querySelector('.ver-links-bnt')
    bntMaisLinks.addEventListener('click', verLinks)
    function verLinks() {
        let spanLink = secao.querySelector('.ver-links-texto')
        let imgLink = secao.querySelector('.icone-links')
        let secaolinks = secao.querySelector('.div-links-produtos')

        if (secaolinks.style.display === 'none' || secaolinks.style.display === ''){
            imgLink.src = '/static/produtos/img/seta-para-cima.svg'
            secaolinks.style.display = 'flex'

        }
        else {
            imgLink.src = '/static/produtos/img/seta-para-baixo.svg'
            secaolinks.style.display = 'none'
        }

}

})

let secaoConteudo = document.querySelectorAll('.secao-links-caracteristicas')
secaoConteudo.forEach(secao => {
    let bntMaisInformacoes = secao.querySelector('.mais-informacoes-bnt')
    bntMaisInformacoes.addEventListener('click', verMaisInformacoes)
    function verMaisInformacoes() {
        let imgMaisinformacoes = secao.querySelector('.icone-mais-informacoes')
        let secaoMaisinformacoes = secao.querySelector('.mais-informacoes-div')
        console.log(secaoMaisinformacoes.style.display)

        if (secaoMaisinformacoes.style.display === 'none' || secaoMaisinformacoes.style.display === '') {
            imgMaisinformacoes.src = '/static/produtos/img/seta-para-cima.svg'
            secaoMaisinformacoes.style.display = 'grid'

        }
        else {
            imgMaisinformacoes.src = '/static/produtos/img/seta-para-baixo.svg'
            secaoMaisinformacoes.style.display = 'none'
        }

}

})


bntLimparFiltrosUsados = document.querySelector('.limpar-filtros-usados')
bntLimparFiltrosUsados.addEventListener('click', limparFiltrosUsados)
function limparFiltrosUsados() {

    const parametrosDePesquisa = window.location.search

    if (parametrosDePesquisa) {
            params = new URLSearchParams(window.location.search)

        }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

    params.set('categoria', 'Todas as Categorias')
    params.set('palavrachave', 'none')


    let urlAtual = window.location.pathname;
    urlAtual += "?" + params.toString()
    window.history.pushState({}, '', urlAtual)


    limparFiltrosAvancados()
    aplicarFiltrosAvancados()
}


function limparconquistasdoproduto() {
    params = new URLSearchParams(window.location.search)
    params.delete('conquistas')

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)
    location.reload()

    }

function limpartamanhocanmaximo() {
    params = new URLSearchParams(window.location.search)
    params.delete('Tacamax')

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)
    location.reload()

    }

function limpartamanhocanminimo() {
params = new URLSearchParams(window.location.search)
params.delete('Tacamin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparporccomissaominima() {
params = new URLSearchParams(window.location.search)
params.delete('porcpmin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparporccomissaomaxima() {
params = new URLSearchParams(window.location.search)
params.delete('porcpmax')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparnotaprodutominima() {
params = new URLSearchParams(window.location.search)
params.delete('notamin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparavaliacaominima() {
params = new URLSearchParams(window.location.search)
params.delete('avalmin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparprecomaximo() {
params = new URLSearchParams(window.location.search)
params.delete('precpmax')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparprecominimo() {
params = new URLSearchParams(window.location.search)
params.delete('precpmin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparcomissaomaxima() {
params = new URLSearchParams(window.location.search)
params.delete('compmax')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparcomissaominima() {
params = new URLSearchParams(window.location.search)
params.delete('compmin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limpartempmaxima() {
params = new URLSearchParams(window.location.search)
params.delete('tempmax')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limpartempminima() {
params = new URLSearchParams(window.location.search)
params.delete('tempmin')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparcanalyoutube() {
params = new URLSearchParams(window.location.search)
params.delete('cypr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limpartipodeafiliacao() {
params = new URLSearchParams(window.location.search)
params.delete('tapr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparavaliacoesproduto() {
params = new URLSearchParams(window.location.search)
params.delete('uapr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparmoedadoproduto() {
params = new URLSearchParams(window.location.search)
params.delete('mopr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparfiltrocomissionamentoproduto() {
params = new URLSearchParams(window.location.search)
params.delete('cmpr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparpaginadoproduto() {
params = new URLSearchParams(window.location.search)
params.delete('papr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparprodutocomvideo() {
params = new URLSearchParams(window.location.search)
params.delete('vipr')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparpalavrachaveproduto() {
params = new URLSearchParams(window.location.search)
params.set('palavrachave', 'none')

let urlAtual = window.location.pathname
urlAtual += "?" + params.toString()

window.history.pushState({}, '', urlAtual)
location.reload()
}

function limparcategoriaproduto() {
    params = new URLSearchParams(window.location.search)
    params.set('categoria', 'Todas as Categorias')

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)
    location.reload()

}
