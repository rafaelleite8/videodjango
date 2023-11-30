from django.db import models

class Produto(models.Model):
    nome = models.CharField(max_length=300, default='')
    imagem_do_produto = models.ImageField(default='', max_length=400)
    preco = models.DecimalField(max_digits=20, decimal_places=2, default=0, null=True)
    nota_do_produto = models.DecimalField(max_digits=2, decimal_places=1, default=0)
    grau_do_produto = models.IntegerField(default=0)
    numero_de_avaliacoes = models.IntegerField(default=0)
    moeda = models.CharField(max_length=5, default='', null=True)
    comissao = models.IntegerField(default=0, null=True)
    link_produto = models.TextField(max_length=500, default='', null=True)
    conquista = models.TextField(max_length=1000, default='', null=True)
    pagina_do_produto = models.CharField(max_length=100, default='', null=True)
    avaliacao_do_produto = models.IntegerField(default=0, null=True)
    afiliacao = models.CharField(max_length=100, default='', null=True)
    caracteristicas_pagina_hotmart = models.TextField(max_length=300, default='', null=True)
    caracteristica_produto = models.TextField(max_length=1000, default='', null=True)
    inscritos_youtube = models.CharField(max_length=100, default='', null=True)
    canal_do_youtube = models.CharField(max_length=100, default='', null=True)
    video_de_venda = models.CharField(max_length=100, default='', null=True)
    categoria = models.CharField(max_length=100, default='')
    formato = models.CharField(max_length=200, default='')
    regra_de_comissionamento = models.CharField(max_length=200, default='')
    url_do_site = models.CharField(max_length=400, default='', null=True)
    id_do_produto = models.CharField(max_length=100, default='', null=True)
    link_youtube = models.CharField(max_length=400, default='', null=True)
    quant_inscritos = models.IntegerField(default=0, null=True)
    porcentagem_de_comissao = models.IntegerField(default=0, null=True)
    descricao_produto = models.TextField(max_length=5000, default='', null=True)

class Dados(models.Model):
    nome = models.CharField(max_length=300, default='')
    dados = models.IntegerField(default=0, null=True)




