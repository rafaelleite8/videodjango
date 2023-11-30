function verificarTemperaturaMinima() {
    const inputMinTemperatura = document.getElementById('temperaturaminima')
    const valor = inputMinTemperatura.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
        }

        if (numero > 150) {
            numero = 150
        }

        inputMinTemperatura.value = numero
    }

}

function verificarTemperaturaMaxima() {
    const inputMaxTemperatura = document.getElementById('temperaturamaxima')
    const valor = inputMaxTemperatura.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
        }

        if (numero > 150) {
            numero = 150
        }

        inputMaxTemperatura.value = numero
    }}

function verificarComissaoMinima() {
    const inputMinComissao = document.getElementById('comissaominima')
    const valor = inputMinComissao.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 10000) {
            numero = 10000
            }

        inputMinComissao.value = numero
        }
    }

function verificarComissaoMaxima() {
    const inputMaxComissao = document.getElementById('comissaomaxima')
    const valor = inputMaxComissao.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 10000) {
            numero = 10000
            }

        inputMaxComissao.value = numero
        }
    }

function verificarPrecoMinimo() {
    const inputMinPreco = document.getElementById('precominimo')
    const valor = inputMinPreco.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 20000) {
            numero = 20000
            }

        inputMinPreco.value = numero
        }
    }

function verificarPrecoMaximo() {
    const inputMaxPreco = document.getElementById('precomaximo')
    const valor = inputMaxPreco.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 20000) {
            numero = 20000
            }

        inputMaxPreco.value = numero
        }
    }

function verificarPorcComissaoMinima() {
    const inputMinPorcComissao = document.getElementById('porc-comissaominima')
    const valor = inputMinPorcComissao.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 100) {
            numero = 100
            }

        inputMinPorcComissao.value = numero
        }
    }

function verificarPorcComissaoMaxima() {
    const inputMaxPorcComissao = document.getElementById('porc-comissaomaxima')
    const valor = inputMaxPorcComissao.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 100) {
            numero = 100
            }

        inputMaxPorcComissao.value = numero
        }
    }

function verificarNotaProduto() {
    const inputNotaProduto = document.getElementById('notadoproduto')
    const valor = inputNotaProduto.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 5) {
            numero = 5
            }

        inputNotaProduto.value = numero
        }
    }

function verificarNumeroAvaliacoes() {
    const inputNumeroAvaliacoes = document.getElementById('numero-avaliacoes')
    const valor = inputNumeroAvaliacoes.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 5000) {
            numero = 5000
            }

        inputNumeroAvaliacoes.value = numero
        }
    }

function verificarTamanhoCanalMinimo() {
    const inputMinTamanhoCanal = document.getElementById('tamanhodocanalminimo')
    const valor = inputMinTamanhoCanal.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 5000000) {
            numero = 5000000
            }

        inputMinTamanhoCanal.value = numero
        }
    }

function verificarTamanhoCanalMaximo() {
    const inputMaxTamanhoCanal = document.getElementById('tamanhodocanalmaximo')
    const valor = inputMaxTamanhoCanal.value

    if (typeof valor === 'string' && valor.trim().length === 0) {

    }

    else {
        numero = parseInt(valor)
        if (numero < 0) {
            numero = 0
            }

        if (numero > 5000000) {
            numero = 5000000
            }

        inputMaxTamanhoCanal.value = numero
        }
    }


const bntpaginaproduto = document.querySelector('.bnt-selecao-pagina')
bntpaginaproduto.addEventListener('click', selecionarPaginadevendas)
function selecionarPaginadevendas() {
    const blocodeitens = document.getElementById('op1')
    const botoespaginadevendas = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoespaginadevendas.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanPagina = document.getElementById("selecao-pagina")
            spanPagina.innerText = botaotexto.textContent

            const bntpaginadoproduto = document.querySelector('.bnt-selecao-pagina')
            const secaoListapaginas = document.querySelector('.lista-pagina-produto')
            const imgPaginadoproduto = document.querySelector('.img-lista-paginas')

            secaoListapaginas.style.display = 'none'
            imgPaginadoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntpaginadoproduto.id = 'lista-pagina-fechado'
        })
    })
}

const bntvideo = document.querySelector('.bnt-selecao-video')
bntvideo.addEventListener('click', selecionarVideo)
function selecionarVideo() {
    const blocodeitens = document.getElementById('op2')
    const botoevideo = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoevideo.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanVideo = document.getElementById("selecao-video")
            spanVideo.innerText = botaotexto.textContent

            const bntvideodoproduto = document.querySelector('.bnt-selecao-video')
            const secaoListavideo = document.querySelector('.lista-video-produto')
            const imgvideoproduto = document.querySelector('.img-video-produto')

            secaoListavideo.style.display = 'none'
            imgvideoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntvideodoproduto.id = 'lista-video-fechado'
        })
    })
}

const bntComissionamento = document.querySelector('.bnt-selecao-comissionamento')
bntComissionamento.addEventListener('click', selecionarComissionamento)
function selecionarComissionamento() {
    const blocodeitens = document.getElementById('op3')
    const botoesComissionamento = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoesComissionamento.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanComissionamento = document.getElementById("selecao-comissionamento")
            spanComissionamento.innerText = botaotexto.textContent

            const bntcomissionamentoproduto = document.querySelector('.bnt-selecao-comissionamento')
            const secaoListacomissionamento = document.querySelector('.lista-comissionamento-produto')
            const imgcomissionamentoproduto = document.querySelector('.img-comissionamento-produto')

            secaoListacomissionamento.style.display = 'none'
            imgcomissionamentoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntcomissionamentoproduto.id = 'lista-comissionamento-fechado'
        })
    })
}

const bntMoeda = document.querySelector('.bnt-selecao-moeda')
bntMoeda.addEventListener('click', selecionarMoeda)
function selecionarMoeda() {
    const blocodeitens = document.getElementById('op4')
    const botoesMoeda = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoesMoeda.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanMoeda = document.getElementById("selecao-moeda")
            spanMoeda.innerText = botaotexto.textContent

            const bntmoedadoproduto = document.querySelector('.bnt-selecao-moeda')
            const secaoListamoeda = document.querySelector('.lista-moeda-produto')
            const imgmoedaproduto = document.querySelector('.img-moeda-produto')

            secaoListamoeda.style.display = 'none'
            imgmoedaproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntmoedadoproduto.id = 'lista-moeda-fechado'
        })
    })
}

const bntUltimaavaliacao = document.querySelector('.bnt-selecao-ultimaavaliacao')
bntUltimaavaliacao.addEventListener('click', selecionarUltimaavaliacao)
function selecionarUltimaavaliacao() {
    const blocodeitens = document.getElementById('op5')
    const botoesUltimaavaliacao = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoesUltimaavaliacao.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanUltimaavaliacao = document.getElementById("selecao-ultimaavaliacao")
            spanUltimaavaliacao.innerText = botaotexto.textContent

            const bntultimaavaliacaodoproduto = document.querySelector('.bnt-selecao-ultimaavaliacao')
            const secaoListaultimaavaliacao = document.querySelector('.lista-ultimaavaliacao-produto')
            const imgultimaavaliacaodoproduto = document.querySelector('.img-ultimaavaliacao-produto')

            secaoListaultimaavaliacao.style.display = 'none'
            imgultimaavaliacaodoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntultimaavaliacaodoproduto.id = 'lista-ultimaavaliacao-fechado'
        })
    })
}

const bntTipodeafiliacao = document.querySelector('.bnt-selecao-tipoafiliacao')
bntTipodeafiliacao.addEventListener('click', selecionarTipodeafiliacao)
function selecionarTipodeafiliacao() {
    const blocodeitens = document.getElementById('op6')
    const botoesTipodeafiliacao = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoesTipodeafiliacao.forEach(botao => {

        botao.addEventListener('click', function(event) {
            const botaotexto = botao.querySelector("span")
            const spanTipodeafiliacao = document.getElementById("selecao-tipoafiliacao")
            spanTipodeafiliacao.innerText = botaotexto.textContent

            const bnttipodeafiliacaodoproduto = document.querySelector('.bnt-selecao-tipoafiliacao')
            const secaoListatipodeafiliacao = document.querySelector('.lista-tipoafiliacao-produto')
            const imgtipodeafiliacao = document.querySelector('.img-tipodeafiliacao-produto')

            secaoListatipodeafiliacao.style.display = 'none'
            imgtipodeafiliacao.src = "/static/produtos/img/seta-para-baixo.svg"
            bnttipodeafiliacaodoproduto.id = 'lista-tipodeafiliacao-fechado'
        })
    })
}

const bntCanalyoutube = document.querySelector('.bnt-selecao-canalyoutube')
bntCanalyoutube.addEventListener('click', selecionarCanalyoutube)
function selecionarCanalyoutube() {
    const blocodeitens = document.getElementById('op7')
    const botoesCanalyoutube = blocodeitens.querySelectorAll('.itens-filtros-link')
    botoesCanalyoutube.forEach(botao => {

        botao.addEventListener('click', function(event) {
            let botaotexto = botao.querySelector("span")
            const spanCanalyoutube = document.getElementById("selecao-canalyoutube")
            spanCanalyoutube.innerText = botaotexto.textContent

            if (botaotexto.textContent == "Com Canal") {
            divtamanhodoCanal = document.querySelector('.tamanho-canal-filtro')
            divtamanhodoCanal.style.display = "flex"

            }

            else {
                divtamanhodoCanal = document.querySelector('.tamanho-canal-filtro')
                divtamanhodoCanal.style.display = "none"
                tamanhodoCanalmin = document.getElementById('tamanhodocanalminimo')
                tamanhodoCanalmax = document.getElementById('tamanhodocanalmaximo')
                tamanhodoCanalmax.value = ''
                tamanhodoCanalmin.value = ''
            }

            const bntcanalyoutubedoproduto = document.querySelector('.bnt-selecao-canalyoutube')
            const secaoListacanalyoutube = document.querySelector('.lista-canalyoutube-produto')
            const imgcanalyoutubedoproduto = document.querySelector('.img-canalyoutube-produto')

            secaoListacanalyoutube.style.display = 'none'
            imgcanalyoutubedoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
            bntcanalyoutubedoproduto.id = 'lista-canalyoutube-fechado'
        })
    })
}

const bntFiltroavancado = document.querySelector('.bnt-aplicar-filtros')
bntFiltroavancado.addEventListener('click', aplicarFiltrosAvancados)
function aplicarFiltrosAvancados() {

    const parametrosDePesquisa = window.location.search
    let params = ""

     if (parametrosDePesquisa) {
        params = new URLSearchParams(window.location.search)

    }

    else {
        params = new URLSearchParams()
        params.append('pagina', '1')
        params.append('categoria', 'Todas as Categorias')
        params.append('ordenar', 'none')
        params.append('palavrachave', 'none') }

// Temperatura //
    let valorTemperaturaMinima = document.getElementById('temperaturaminima')
    valorTemperaturaMinima = valorTemperaturaMinima.value

    if (!valorTemperaturaMinima) {
        params.delete('tempmin')
    }
    else {
        if (params.has('tempmin')) {
            params.set('tempmin', valorTemperaturaMinima)
        }
        else {
            params.append('tempmin', valorTemperaturaMinima)
        }
    }

    let valorTemperaturaMaxima = document.getElementById('temperaturamaxima')
    valorTemperaturaMaxima = valorTemperaturaMaxima.value

    if (!valorTemperaturaMaxima) {
        params.delete('tempmax')
    }
    else {
        if (params.has('tempmax')) {
            params.set('tempmax', valorTemperaturaMaxima)
        }
        else {
            params.append('tempmax', valorTemperaturaMaxima)
        }

    }

// Comissao //
    let valorComissaoMinima = document.getElementById('comissaominima')
    valorComissaoMinima = valorComissaoMinima.value

    if (!valorComissaoMinima) {
        params.delete('compmin')
    }
    else {
        if (params.has('compmin')) {
            params.set('compmin', valorComissaoMinima)
        }
        else {
            params.append('compmin', valorComissaoMinima)
        }
    }


    let valorComissaoMaxima = document.getElementById('comissaomaxima')
    valorComissaoMaxima = valorComissaoMaxima.value

    if (!valorComissaoMaxima) {
        params.delete('compmax')
    }
    else {
        if (params.has("compmax")) {
            params.set('compmax', valorComissaoMaxima)
        }
        else {
            params.append('compmax', valorComissaoMaxima)
        }

    }

// Preço do Produto //
    let valorprecoMinimo = document.getElementById('precominimo')
    valorprecoMinimo = valorprecoMinimo.value

    if (!valorprecoMinimo) {
        params.delete('precpmin')
    }
    else {
        if (params.has("precpmin")) {
            params.set('precpmin', valorprecoMinimo)
        }
        else {
            params.append('precpmin', valorprecoMinimo)
        }

    }

    let valorprecoMaximo = document.getElementById('precomaximo')
    valorprecoMaximo = valorprecoMaximo.value

    if (!valorprecoMaximo) {
        params.delete('precpmax')
    }
    else {
        if (params.has("precpmax")) {
            params.set('precpmax', valorprecoMaximo)
        }
        else {
            params.append('precpmax', valorprecoMaximo)
        }
    }

// % de Comissão //
    let valorPorcComissaoMinima = document.getElementById('porc-comissaominima')
    valorPorcComissaoMinima = valorPorcComissaoMinima.value

    if (!valorPorcComissaoMinima) {
        params.delete('porcpmin')
    }
    else {
        if (params.has("porcpmin")) {
            params.set('porcpmin', valorPorcComissaoMinima)
        }

        else {
            params.append('porcpmin', valorPorcComissaoMinima)
        }
    }

    let valorPorcComissaoMaxima = document.getElementById('porc-comissaomaxima')
    valorPorcComissaoMaxima = valorPorcComissaoMaxima.value

    if (!valorPorcComissaoMaxima) {
        params.delete('porcpmax')
    }
    else {
        if (params.has("porcpmax")) {
            params.set('porcpmax', valorPorcComissaoMaxima)
        }
        else {
            params.append('porcpmax', valorPorcComissaoMaxima)
        }

    }

// Nota do Produto //
    valorNotadoProduto = document.getElementById('notadoproduto')
    valorNotadoProduto = valorNotadoProduto.value

    if (!valorNotadoProduto) {
        params.delete('notamin')
    }
    else {
        if (params.has("notamin")) {
            params.set('notamin', valorNotadoProduto)
        }
        else {
            params.append('notamin', valorNotadoProduto)
        }
    }


// Numero de Avaliações //
    valorNumeroAvaliacoes = document.getElementById('numero-avaliacoes')
    valorNumeroAvaliacoes = valorNumeroAvaliacoes.value

    if (!valorNumeroAvaliacoes) {
        params.delete('avalmin')
    }
    else {
        if (params.has("avalmin")) {
            params.set('avalmin', valorNumeroAvaliacoes)
        }
        else {
            params.append('avalmin', valorNumeroAvaliacoes)
        }

    }

// Página do Produto //
    valorPaginaProduto = document.getElementById('selecao-pagina')
    valorPaginaProduto = valorPaginaProduto.textContent

    if (valorPaginaProduto == "Escolha Uma Opção") {
        params.delete('papr')
    }

    if (valorPaginaProduto == "Página Própria") {
        valorPaginaProduto = '1'

        if (params.has("papr")) {
            params.set('papr', valorPaginaProduto)
        }
        else {
            params.append('papr', valorPaginaProduto)
        }

    }


    if (valorPaginaProduto == "Página da Hotmart") {
        valorPaginaProduto = '2'

        if (params.has("papr")) {
            params.set('papr', valorPaginaProduto)
        }
        else {
            params.append('papr', valorPaginaProduto)
        }
    }

// Produto Com Video //
    valorVideo = document.getElementById('selecao-video')
    valorVideo = valorVideo.textContent

    if (valorVideo == "Escolha Uma Opção") {
        params.delete('vipr')
    }

    if (valorVideo == "Com Video") {
        valorVideo = '1'

        if (params.has("vipr")) {
            params.set('vipr', valorVideo)
        }
        else {
            params.append('vipr', valorVideo)
        }
    }

    if (valorVideo == "Sem Video") {
        valorVideo = '2'
        if (params.has('vipr')) {
            params.set('vipr', valorVideo)
        }
        else {
            params.append('vipr', valorVideo)
        }
    }


// Comissionamento //
    valorComissionamento = document.getElementById('selecao-comissionamento')
    valorComissionamento = valorComissionamento.textContent

    if (valorComissionamento == "Escolha Uma Opção") {
        params.delete('cmpr')
    }

    if (valorComissionamento == "Último Clique") {
        valorComissionamento = '1'
        if (params.has('cmpr')) {
            params.set('cmpr', valorComissionamento)
        }
        else {
            params.append('cmpr', valorComissionamento)
        }
    }

    if (valorComissionamento == "Primeiro Clique") {
        valorComissionamento = '2'
        if (params.has('cmpr')) {
            params.set('cmpr', valorComissionamento)
        }
        else {
            params.append('cmpr', valorComissionamento)
        }
    }



// Moeda //
    valorMoeda = document.getElementById('selecao-moeda')
    valorMoeda = valorMoeda.textContent

    if (valorMoeda == "Escolha Uma Opção") {
        params.delete('mopr')
    }

    if (valorMoeda == "Real") {
        valorMoeda = '1'
        if (params.has('mopr')) {
            params.set('mopr', valorMoeda)
        }
        else {
            params.append('mopr', valorMoeda)
        }

    }

    if (valorMoeda == "Dolar") {
        valorMoeda = '2'
        if (params.has('mopr')) {
            params.set('mopr', valorMoeda)
        }
        else {
            params.append('mopr', valorMoeda)
        }
    }

    if (valorMoeda == "Euro") {
        valorMoeda = '3'
        if (params.has('mopr')) {
            params.set('mopr', valorMoeda)
        }
        else {
            params.append('mopr', valorMoeda)
        }
    }


// Ultimas avaliações //
    valorUltimasAvaliacoes = document.getElementById('selecao-ultimaavaliacao')
    valorUltimasAvaliacoes = valorUltimasAvaliacoes.textContent

    if (valorUltimasAvaliacoes == "Escolha Uma Opção") {
        params.delete('uapr')
    }

    if (valorUltimasAvaliacoes == "Avaliado Esse Mês") {
        valorUltimasAvaliacoes = '1'

        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }

    }

    if (valorUltimasAvaliacoes == "Até 3 Mêses") {
        valorUltimasAvaliacoes = '2'
        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }
    }

    if (valorUltimasAvaliacoes == "Até 6 Mêses") {
        valorUltimasAvaliacoes = '3'
        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }
    }

    if (valorUltimasAvaliacoes == "Até 12 Mêses") {
        valorUltimasAvaliacoes = '4'
        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }
    }

    if (valorUltimasAvaliacoes == "Até 24 Mêses") {
        valorUltimasAvaliacoes = '5'
        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }
    }

    if (valorUltimasAvaliacoes == "Avaliações Ocultas") {
        valorUltimasAvaliacoes = '6'
        if (params.has('uapr')) {
            params.set('uapr', valorUltimasAvaliacoes)
        }
        else {
            params.append('uapr', valorUltimasAvaliacoes)
        }
    }


// Tipo de Afiliação //
    valorTipoAfiliacao = document.getElementById('selecao-tipoafiliacao')
    valorTipoAfiliacao = valorTipoAfiliacao.textContent

    if (valorTipoAfiliacao == "Escolha Uma Opção") {
        params.delete('tapr')
    }

    if (valorTipoAfiliacao == "Com um Clique") {
        valorTipoAfiliacao = '1'
        if (params.has('tapr')) {
            params.set('tapr', valorTipoAfiliacao)
        }
        else {
            params.append('tapr', valorTipoAfiliacao)
        }

    }

    if (valorTipoAfiliacao == "Por Aprovação") {
        valorTipoAfiliacao = '2'
        if (params.has('tapr')) {
            params.set('tapr', valorTipoAfiliacao)
        }
        else {
            params.append('tapr', valorTipoAfiliacao)
        }
    }

// Conquistas do Produto //
    todasConquistas = document.querySelectorAll('.button-checkbox')
    let valorConquista = ""
    todasConquistas.forEach(conquista => {
        conquistaId = conquista.id

        if (conquistaId.includes("aberta")) {

            valorConquista = valorConquista + conquistaId[5] + "-"
        }

    })

    if (!valorConquista) {
        params.delete('conquistas')
    }

    else {
        if (params.has('conquistas')) {
            params.set('conquistas', valorConquista)
        }
        else {
            params.append('conquistas', valorConquista)
        }
    }


// Canal no Youtube //
    valorCanalYoutube = document.getElementById('selecao-canalyoutube')
    valorCanalYoutube = valorCanalYoutube.textContent

    if (valorCanalYoutube == "Escolha Uma Opção") {
        params.delete('cypr')
    }

    if (valorCanalYoutube == "Com Canal") {
        valorCanalYoutube = '1'
        if (params.has('cypr')) {
            params.set('cypr', valorCanalYoutube)
        }
        else {
            params.append('cypr', valorCanalYoutube)
        }
    }

    if (valorCanalYoutube == "Sem Canal") {
        valorCanalYoutube = '2'
        if (params.has('cypr')) {
            params.set('cypr', valorCanalYoutube)
        }
        else {
            params.append('cypr', valorCanalYoutube)
        }
    }

    valorTamanhoCanalminimo = document.getElementById('tamanhodocanalminimo')
    valorTamanhoCanalminimo = valorTamanhoCanalminimo.value

    if (!valorTamanhoCanalminimo) {
        params.delete('Tacamin')
    }
    else {
        if (params.has('Tacamin')) {
            params.set('Tacamin', valorTamanhoCanalminimo)
        }
        else {
            params.append('Tacamin', valorTamanhoCanalminimo)
        }
    }

    valorTamanhoCanalmaximo = document.getElementById('tamanhodocanalmaximo')
    valorTamanhoCanalmaximo = valorTamanhoCanalmaximo.value

    if (!valorTamanhoCanalmaximo) {
        params.delete('Tacamax')
    }
    else {
        if (params.has('Tacamax')) {
            params.set('Tacamax', valorTamanhoCanalmaximo)
        }
        else {
            params.append('Tacamax', valorTamanhoCanalmaximo)
        }
    }

    let urlAtual = window.location.pathname
    urlAtual += "?" + params.toString()

    window.history.pushState({}, '', urlAtual)
    location.reload()
}


const bntlimparFiltroavancado = document.querySelector('.bnt-limpar-filtros')
bntlimparFiltroavancado.addEventListener('click', limparFiltrosAvancados)
function limparFiltrosAvancados() {
// Temperatura //
    valorTemperaturaMinima = document.getElementById('temperaturaminima')
    valorTemperaturaMinima.value = ""

    valorTemperaturaMaxima = document.getElementById('temperaturamaxima')
    valorTemperaturaMaxima.value = ""

// Comissao //
    valorComissaoMinima = document.getElementById('comissaominima')
    valorComissaoMinima.value = ""

    valorComissaoMaxima = document.getElementById('comissaomaxima')
    valorComissaoMaxima.value = ""

// Preço do Produto //
    valorprecoMinimo = document.getElementById('precominimo')
    valorprecoMinimo.value = ""

    valorprecoMaximo = document.getElementById('precomaximo')
    valorprecoMaximo.value = ""

// % de Comissão //
    valorPorcComissaoMinima = document.getElementById('porc-comissaominima')
    valorPorcComissaoMinima.value = ""

    valorPorcComissaoMaxima = document.getElementById('porc-comissaomaxima')
    valorPorcComissaoMaxima.value = ""

// Nota do Produto //
    valorNotadoProduto = document.getElementById('notadoproduto')
    valorNotadoProduto.value = ""

// Numero de Avaliações //
    valorNumeroAvaliacoes = document.getElementById('numero-avaliacoes')
    valorNumeroAvaliacoes.value = ""

// Página do Produto //
    valorPaginaProduto = document.getElementById('selecao-pagina')
    valorPaginaProduto.textContent = "Escolha Uma Opção"

// Produto Com Video //
    valorVideo = document.getElementById('selecao-video')
    valorVideo.textContent = "Escolha Uma Opção"

// Comissionamento //
    valorComissionamento = document.getElementById('selecao-comissionamento')
    valorComissionamento.textContent = "Escolha Uma Opção"

// Moeda //
    valorMoeda = document.getElementById('selecao-moeda')
    valorMoeda.textContent = "Escolha Uma Opção"

// Ultimas avaliações //
    valorUltimasAvaliacoes = document.getElementById('selecao-ultimaavaliacao')
    valorUltimasAvaliacoes.textContent = "Escolha Uma Opção"

// Tipo de Afiliação //
    valorTipoAfiliacao = document.getElementById('selecao-tipoafiliacao')
    valorTipoAfiliacao.textContent = "Escolha Uma Opção"

// Conquistas do Produto //
    todasConquistas = document.querySelectorAll('.button-checkbox')
    let valorConquista = ""
    todasConquistas.forEach(conquista => {
        conquistaId = conquista.id

        if (conquistaId.includes("aberta")) {
            imagemcheck = conquista.querySelector('.imagem-check')
            imagemcheck.style.display = "none"

            valorConquista = conquistaId.replace('aberta', "fechada")
            conquista.id = valorConquista
        }
    })

// Canal no Youtube //
    valorCanalYoutube = document.getElementById('selecao-canalyoutube')
    valorCanalYoutube.textContent = "Escolha Uma Opção"

    secaoTamanhoCanal = document.querySelector('.tamanho-canal-filtro')
    secaoTamanhoCanal.style.display = "none"

    valorTamanhoCanalminimo = document.getElementById('tamanhodocanalminimo')
    valorTamanhoCanalminimo.value = ""

    valorTamanhoCanalmaximo = document.getElementById('tamanhodocanalmaximo')
    valorTamanhoCanalmaximo.value = ""

}


const bntpaginadoproduto = document.querySelector('.bnt-selecao-pagina')
const secaoListapaginas = document.querySelector('.lista-pagina-produto')
const imgPaginadoproduto = document.querySelector('.img-lista-paginas')
bntpaginadoproduto.addEventListener('click', mostrarListadepaginas)
function mostrarListadepaginas() {
    if (bntpaginadoproduto.id == 'lista-pagina-fechado') {
        secaoListapaginas.style.display = 'flex'
        imgPaginadoproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntpaginadoproduto.id = 'lista-pagina-aberta' }

    else {
        secaoListapaginas.style.display = 'none'
        imgPaginadoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntpaginadoproduto.id = 'lista-pagina-fechado' }
}


const bntvideodoproduto = document.querySelector('.bnt-selecao-video')
const secaoListavideo = document.querySelector('.lista-video-produto')
const imgvideoproduto = document.querySelector('.img-video-produto')
bntvideodoproduto.addEventListener('click', mostrarListavideo)
function mostrarListavideo() {
    if (bntvideodoproduto.id == 'lista-video-fechado') {
        secaoListavideo.style.display = 'flex'
        imgvideoproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntvideodoproduto.id = 'lista-video-aberto' }

    else {
        secaoListavideo.style.display = 'none'
        imgvideoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntvideodoproduto.id = 'lista-video-fechado' }
}


const bntcomissionamentoproduto = document.querySelector('.bnt-selecao-comissionamento')
const secaoListacomissionamento = document.querySelector('.lista-comissionamento-produto')
const imgcomissionamentoproduto = document.querySelector('.img-comissionamento-produto')
bntcomissionamentoproduto.addEventListener('click', mostrarListacomissionamento)
function mostrarListacomissionamento() {
    if (bntcomissionamentoproduto.id == 'lista-comissionamento-fechado') {
        secaoListacomissionamento.style.display = 'flex'
        imgcomissionamentoproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntcomissionamentoproduto.id = 'lista-comissionamento-aberto' }

    else {
        secaoListacomissionamento.style.display = 'none'
        imgcomissionamentoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntcomissionamentoproduto.id = 'lista-comissionamento-fechado' }
}


const bntmoedadoproduto = document.querySelector('.bnt-selecao-moeda')
const secaoListamoeda = document.querySelector('.lista-moeda-produto')
const imgmoedaproduto = document.querySelector('.img-moeda-produto')
bntmoedadoproduto.addEventListener('click', mostrarListamoeda)
function mostrarListamoeda() {
    if (bntmoedadoproduto.id == 'lista-moeda-fechado') {
        secaoListamoeda.style.display = 'flex'
        imgmoedaproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntmoedadoproduto.id = 'lista-moeda-aberto' }

    else {
        secaoListamoeda.style.display = 'none'
        imgmoedaproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntmoedadoproduto.id = 'lista-moeda-fechado' }
}


const bntultimaavaliacaodoproduto = document.querySelector('.bnt-selecao-ultimaavaliacao')
const secaoListaultimaavaliacao = document.querySelector('.lista-ultimaavaliacao-produto')
const imgultimaavaliacaodoproduto = document.querySelector('.img-ultimaavaliacao-produto')
bntultimaavaliacaodoproduto.addEventListener('click', mostrarListaultimaavaliacao)
function mostrarListaultimaavaliacao() {
    if (bntultimaavaliacaodoproduto.id == 'lista-ultimaavaliacao-fechado') {
        secaoListaultimaavaliacao.style.display = 'flex'
        imgultimaavaliacaodoproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntultimaavaliacaodoproduto.id = 'lista-ultimaavaliacao-aberto' }

    else {
        secaoListaultimaavaliacao.style.display = 'none'
        imgultimaavaliacaodoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntultimaavaliacaodoproduto.id = 'lista-ultimaavaliacao-fechado' }
}


const bnttipodeafiliacaodoproduto = document.querySelector('.bnt-selecao-tipoafiliacao')
const secaoListatipodeafiliacao = document.querySelector('.lista-tipoafiliacao-produto')
const imgtipodeafiliacao = document.querySelector('.img-tipodeafiliacao-produto')
bnttipodeafiliacaodoproduto.addEventListener('click', mostrarListatipoafliacao)
function mostrarListatipoafliacao() {
    if (bnttipodeafiliacaodoproduto.id == 'lista-tipodeafiliacao-fechado') {
        secaoListatipodeafiliacao.style.display = 'flex'
        imgtipodeafiliacao.src = "/static/produtos/img/seta-para-cima.svg"
        bnttipodeafiliacaodoproduto.id = 'lista-tipodeafiliacao-aberto' }

    else {
        secaoListatipodeafiliacao.style.display = 'none'
        imgtipodeafiliacao.src = "/static/produtos/img/seta-para-baixo.svg"
        bnttipodeafiliacaodoproduto.id = 'lista-tipodeafiliacao-fechado' }
}


const bntcanalyoutubedoproduto = document.querySelector('.bnt-selecao-canalyoutube')
const secaoListacanalyoutube = document.querySelector('.lista-canalyoutube-produto')
const imgcanalyoutubedoproduto = document.querySelector('.img-canalyoutube-produto')
bntcanalyoutubedoproduto.addEventListener('click', mostrarListacanalyoutube)
function mostrarListacanalyoutube() {
    if (bntcanalyoutubedoproduto.id == 'lista-canalyoutube-fechado') {
        secaoListacanalyoutube.style.display = 'flex'
        imgcanalyoutubedoproduto.src = "/static/produtos/img/seta-para-cima.svg"
        bntcanalyoutubedoproduto.id = 'lista-canalyoutube-aberto' }

    else {
        secaoListacanalyoutube.style.display = 'none'
        imgcanalyoutubedoproduto.src = "/static/produtos/img/seta-para-baixo.svg"
        bntcanalyoutubedoproduto.id = 'lista-canalyoutube-fechado' }
}


const bntfecharfiltrosavancados = document.querySelector('.x-filtro-avançado')
const secaofiltrosavancados = document.querySelector('.filtro-avançado')
bntfecharfiltrosavancados.addEventListener('click', fecharFiltros)
function fecharFiltros() {
    secaofiltrosavancados.style.display = "none"
}


const bntabrirfiltrosavancados = document.querySelector('.botao-filtro-avançado')
bntabrirfiltrosavancados.addEventListener('click', abrirFiltros)
function abrirFiltros() {
    secaofiltrosavancados.style.display = "flex"
}


const bntconquistas = document.querySelectorAll('.button-checkbox')
bntconquistas.forEach(botao => {
    botao.addEventListener('click', function(event) {
        if (botao.id.includes("fechada")) {
            botao.id = botao.id.replace("fechada", "aberta")
            let imagem = botao.querySelector("img")
            imagem.style.display = "flex"
        }
        else {
            botao.id = botao.id.replace("aberta", "fechada")
            let imagem = botao.querySelector("img")
            imagem.style.display = "none"
        }
    })
})



