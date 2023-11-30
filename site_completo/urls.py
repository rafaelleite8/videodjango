
from django.contrib import admin
from django.urls import path, include
from produtos.views import produto
from produtos.views import ferramentas
from produtos.views import minhaconta
from produtos.views import suporte
from produtos.views import tutoriais
from produtos.views import sugestoes
from autenticacao.views import PaginaLogin
from autenticacao.views import PaginaCadastro
from autenticacao.views import PaginaRecuperacao



urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', PaginaLogin, name='login'),
    path('cadastro/', PaginaCadastro, name='cadastro'),
    path('produtos/', produto, name='produtos'),
    path('', ferramentas, name='ferramenta'),
    path('conta/', minhaconta, name='conta'),
    path('sugestoes/', sugestoes, name='sugestoes'),
    path('suporte/', suporte, name='suporte'),
    path('tutoriais/', tutoriais, name='tutoriais'),
    path('recuperacao-senha/', PaginaRecuperacao, name='recuperacaosenha')
]
