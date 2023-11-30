const botaoAbrir = document.querySelector('.icone-interacao-abrir');
const botaoFechar = document.querySelector('.icone-interacao-fechar');
const barraMenu = document.querySelector('.menu-lateral')
const menuFechado = document.querySelector('.menu-fechado')
const menuAberto = document.querySelector('.menu-1')
const conteudoPrincipal = document.querySelector('.areadoprincipal')

botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    barraMenu.style.width = '310px';
    menuFechado.style.display = 'none';
    menuAberto.style.display = 'grid';
    conteudoPrincipal.style.marginLeft = '310px';
}

function fecharMenu() {
    barraMenu.style.width = '130px';
    menuFechado.style.display = 'grid';
    menuAberto.style.display = 'none';
    conteudoPrincipal.style.marginLeft = '130px';
}