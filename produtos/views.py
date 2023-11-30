from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render
from django.http import HttpResponse
from produtos.models import Produto
from produtos.models import Dados
from django.contrib.auth.decorators import login_required


@login_required(login_url='/login/')
def produto(request):
    if request.GET:

        numeropaginas = None

        numeropagina = request.GET.get('pagina')
        ordenar = request.GET.get('ordenar')

        if ordenar != None and ordenar != 'none':
            if ordenar != "escolha uma opçao":
                ordenarcap = ordenar.title()

            if ordenar == "escolha uma opçao":
                ordenarcap = "Escolha uma opção"
                produtos_list = Produto.objects.all()

            if ordenarcap == 'Mais Quentes':
                produtos_list = Produto.objects.all().order_by('-grau_do_produto')
            if ordenarcap == 'Mais Queridos':
                produtos_list = Produto.objects.all().order_by('-nota_do_produto')
            if ordenarcap == 'Avaliacoes Recentes':
                ordenarcap = "Avaliações Recentes"
                produtos_list = Produto.objects.all().order_by('avaliacao_do_produto')
            if ordenarcap == 'Mais Avaliados':
                produtos_list = Produto.objects.all().order_by('-numero_de_avaliacoes')

        if ordenar == None or ordenar == 'none':
            produtos_list = Produto.objects.all()
            ordenarcap = 'Escolha uma opção'


        categoria = request.GET.get('categoria')

        if categoria != 'Todas as Categorias' and categoria != None:
            produtos_list = produtos_list.filter(categoria=categoria)

        if categoria == None:
            categoria = "Todas as Categorias"


        palavrachave = request.GET.get('palavrachave')

        if palavrachave != 'none' and palavrachave != None:
            produtos_list = produtos_list.filter(nome__icontains=palavrachave)


        temperatraminima = request.GET.get('tempmin')

        if temperatraminima != None:
            produtos_list = produtos_list.filter(grau_do_produto__gte=temperatraminima)


        temperatramaxima = request.GET.get('tempmax')

        if temperatramaxima != None:
            produtos_list = produtos_list.filter(grau_do_produto__lte=temperatramaxima)

        comissaominima = request.GET.get('compmin')

        if comissaominima != None:
            produtos_list = produtos_list.filter(comissao__gte=comissaominima)


        comissaomaxima = request.GET.get('compmax')

        if comissaomaxima != None:
            produtos_list = produtos_list.filter(comissao__lte=comissaomaxima)

        precominimo = request.GET.get('precpmin')

        if precominimo != None:
            produtos_list = produtos_list.filter(preco__gte=precominimo)

        precomaximo = request.GET.get('precpmax')

        if precomaximo != None:
            produtos_list = produtos_list.filter(preco__lte=precomaximo)

        porccomissaominima = request.GET.get('porcpmin')

        if porccomissaominima != None:
            porccomissaominima = int(porccomissaominima)
            produtos_list = produtos_list.filter(porcentagem_de_comissao__gte=porccomissaominima)

        porccomissaomaxima = request.GET.get('porcpmax')

        if porccomissaomaxima != None:
            porccomissaomaxima = int(porccomissaomaxima)
            produtos_list = produtos_list.filter(porcentagem_de_comissao__lte=porccomissaomaxima)

        notaminima = request.GET.get('notamin')

        if notaminima != None:
            produtos_list = produtos_list.filter(nota_do_produto__gte=notaminima)

        avaliacaominima = request.GET.get('avalmin')

        if avaliacaominima != None:
            produtos_list = produtos_list.filter(numero_de_avaliacoes__gte=avaliacaominima)

        paginaproduto = request.GET.get('papr')


        if paginaproduto != None:
            if paginaproduto == '1':
                paginaproduto = 'Página Própria'
            if paginaproduto == '2':
                paginaproduto = 'Página da Hotmart'

            produtos_list = produtos_list.filter(pagina_do_produto__contains=paginaproduto)

        if paginaproduto == None:
            paginaproduto = 'Escolha Uma Opção'

        videoproduto = request.GET.get('vipr')

        if videoproduto != None:
            if videoproduto == "1":
                videoproduto = 'Com Video'
            if videoproduto == "2":
                videoproduto = 'Sem Video'

            produtos_list = produtos_list.filter(video_de_venda__contains=videoproduto)

        if videoproduto == None:
            videoproduto = 'Escolha Uma Opção'


        comissionamentoproduto  = request.GET.get('cmpr')

        if comissionamentoproduto != None:
            if comissionamentoproduto == "1":
                comissionamentoproduto = 'Último Clique'
            if comissionamentoproduto == "2":
                comissionamentoproduto = 'Primeiro Clique'

            produtos_list = produtos_list.filter(regra_de_comissionamento__contains=comissionamentoproduto)

        if comissionamentoproduto == None:
            comissionamentoproduto = 'Escolha Uma Opção'


        moedaproduto  = request.GET.get('mopr')
        cifrao = ''
        if moedaproduto != None:
            if moedaproduto == "1":
                moedaproduto = 'Real'
                cifrao = 'R$'
            if moedaproduto == "2":
                moedaproduto = 'Dólar'
                cifrao = 'US$'
            if moedaproduto == "3":
                moedaproduto = 'Euro'
                cifrao = '€'

            produtos_list = produtos_list.filter(moeda__contains=cifrao)

        if moedaproduto == None:
            moedaproduto = 'Escolha Uma Opção'


        ultimasavaliacoesproduto = request.GET.get('uapr')

        if ultimasavaliacoesproduto != None:
            if ultimasavaliacoesproduto == "1":
                ultimasavaliacoesproduto = 0
                filtroultimasavaliacoes = 'Avaliado Esse Mês'
            if ultimasavaliacoesproduto == "2":
                ultimasavaliacoesproduto = 3
                filtroultimasavaliacoes = 'Até 3 Mêses'
            if ultimasavaliacoesproduto == "3":
                ultimasavaliacoesproduto = 6
                filtroultimasavaliacoes = 'Até 6 Mêses'
            if ultimasavaliacoesproduto == "4":
                ultimasavaliacoesproduto = 12
                filtroultimasavaliacoes = 'Até 12 Mêses'
            if ultimasavaliacoesproduto == "5":
                ultimasavaliacoesproduto = 24
                filtroultimasavaliacoes = 'Até 24 Mêses'

            if ultimasavaliacoesproduto == "6":
                ultimasavaliacoesproduto = 999
                filtroultimasavaliacoes = 'Avaliações Ocultas'
                produtos_list = produtos_list.filter(avaliacao_do_produto=ultimasavaliacoesproduto)

            if ultimasavaliacoesproduto != '6':
                produtos_list = produtos_list.filter(avaliacao_do_produto__lte=ultimasavaliacoesproduto)




        if ultimasavaliacoesproduto == None:
            filtroultimasavaliacoes = 'Escolha Uma Opção'


        tipoafiliacaoproduto = request.GET.get('tapr')

        if tipoafiliacaoproduto != None:
            if tipoafiliacaoproduto == "1":
                tipoafiliacaoproduto = 'Com um Clique'
            if tipoafiliacaoproduto == "2":
                tipoafiliacaoproduto = 'Por Aprovação'

            produtos_list = produtos_list.filter(afiliacao__contains=tipoafiliacaoproduto)

        if tipoafiliacaoproduto == None:
            tipoafiliacaoproduto = 'Escolha Uma Opção'


        conquistasproduto = request.GET.get('conquistas')

        if conquistasproduto != None:
            conquistasproduto = conquistasproduto[:-1]
            if '1' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-9')
            if '2' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-11')
            if '3' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-14')
            if '4' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-16')
            if '5' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-18')
            if '6' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-22')
            if '7' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-25')
            if '8' in conquistasproduto:
                produtos_list = produtos_list.filter(conquista__contains='badge-19')

        canalyoutubeproduto = request.GET.get('cypr')
        if canalyoutubeproduto != None:
            if canalyoutubeproduto == "1":
                canalyoutubeproduto = 'Com Canal'
            if canalyoutubeproduto == "2":
                canalyoutubeproduto = 'Sem Canal'

            produtos_list = produtos_list.filter(canal_do_youtube__contains=canalyoutubeproduto)

        if canalyoutubeproduto == None:
            canalyoutubeproduto = 'Escolha Uma Opção'


        tamanhocanalminimo = request.GET.get('Tacamin')

        if tamanhocanalminimo != None:
            produtos_list = produtos_list.filter(quant_inscritos__gte=tamanhocanalminimo)


        tamanhocanalmaximo = request.GET.get('Tacamax')

        if tamanhocanalmaximo != None:
            produtos_list = produtos_list.filter(quant_inscritos__lte=tamanhocanalmaximo)

        numeroprodutos = None
        numeroprodutostotal = len(produtos_list)

    else:
        numeropagina = request.GET.get('pagina')
        ordenar = request.GET.get('ordenar')

        if ordenar == None or ordenar == 'none':
            produtos_list = Produto.objects.all()
            ordenarcap = 'Escolha uma opção'

        categoria = request.GET.get('categoria')

        if categoria == None:
            categoria = "Todas as Categorias"

        palavrachave = request.GET.get('palavrachave')

        temperatraminima = None
        temperatramaxima = None
        comissaominima = None
        comissaomaxima = None
        precominimo = None
        precomaximo = None
        porccomissaominima = None
        porccomissaomaxima = None
        notaminima = None
        avaliacaominima = None

        paginaproduto = request.GET.get('papr')
        if paginaproduto == None:
            paginaproduto = 'Escolha Uma Opção'

        videoproduto = request.GET.get('vipr')
        if videoproduto == None:
            videoproduto = 'Escolha Uma Opção'

        comissionamentoproduto = request.GET.get('cmpr')
        if comissionamentoproduto == None:
            comissionamentoproduto = 'Escolha Uma Opção'

        moedaproduto = request.GET.get('mopr')
        cifrao = ''

        if moedaproduto == None:
            moedaproduto = 'Escolha Uma Opção'

        filtroultimasavaliacoes = 'Escolha Uma Opção'

        tipoafiliacaoproduto = request.GET.get('tapr')

        tipoafiliacaoproduto = 'Escolha Uma Opção'

        conquistasproduto = request.GET.get('conquistas')

        canalyoutubeproduto = request.GET.get('cypr')
        if canalyoutubeproduto == None:
            canalyoutubeproduto = 'Escolha Uma Opção'

        tamanhocanalminimo = request.GET.get('Tacamin')
        tamanhocanalmaximo = request.GET.get('Tacamax')

        produtos_list = Produto.objects.all()
        dados_listproduto = Dados.objects.all()
        dados_listpagina = Dados.objects.all()
        numeroprodutos = dados_listproduto.filter(nome__icontains='Numero De Produtos')
        numeropaginas = dados_listpagina.filter(nome__icontains='Numero De Paginas')

        produtos_list = produtos_list.filter(id__lt=7263)
        numeroprodutostotal = None


    produtos_list = produtos_list.values("nome",
                                         "imagem_do_produto",
                                         "preco",
                                         "nota_do_produto",
                                         "grau_do_produto",
                                         "numero_de_avaliacoes",
                                         "moeda",
                                         "link_produto",
                                         "conquista",
                                         "pagina_do_produto",
                                         "caracteristicas_pagina_hotmart",
                                         "caracteristica_produto",
                                         "canal_do_youtube",
                                         "inscritos_youtube",
                                         "video_de_venda",
                                         "comissao",
                                         "avaliacao_do_produto",
                                         "url_do_site",
                                         "link_youtube",
                                         "descricao_produto")

    paginator = Paginator(produtos_list, 10)

    try:
        produtos = paginator.get_page(numeropagina)
    except PageNotAnInteger:
        produtos = paginator.get_page(1)
    except EmptyPage:
        produtos = paginator.page(paginator.num_pages)


    for produto in produtos:

        caracteristicasproduto = produto['caracteristica_produto']
        if caracteristicasproduto != None and caracteristicasproduto != "":
            caracteristicasproduto = caracteristicasproduto.split('/')
            produto['caracteristica_produto'] = caracteristicasproduto[:-1]

        caracteristicaspagina = produto['caracteristicas_pagina_hotmart']
        if caracteristicaspagina != None and caracteristicaspagina != '':
            caracteristicaspagina = caracteristicaspagina[:-1].split(',')
            produto['caracteristicas_pagina_hotmart'] = caracteristicaspagina

    return render(request, 'pagina_de_produtos.html', {'produtos': produtos,
                                                       'numerodeprodutos': numeroprodutos,
                                                       'numeroprt': numeroprodutostotal,
                                                       'numeropaginas': numeropaginas,
                                                      'palavrachaveproduto': palavrachave,
                                                      'categoriafiltrada': categoria,
                                                      'ordenarpor': ordenarcap,
                                                      'paginadoproduto': paginaproduto,
                                                      'produtocomvideo': videoproduto,
                                                      'filtrocomissionamentoproduto': comissionamentoproduto,
                                                      'moedadoproduto': moedaproduto,
                                                      'cifraomoeda': cifrao,
                                                      'avaliacoesproduto': filtroultimasavaliacoes,
                                                      'tipodeafiliacao': tipoafiliacaoproduto,
                                                      'canalyoutube': canalyoutubeproduto,
                                                      'tempminima': temperatraminima,
                                                      'tempmaxima': temperatramaxima,
                                                      'comissaominima': comissaominima,
                                                      'comissaomaxima': comissaomaxima,
                                                      'precominimo': precominimo,
                                                      'precomaximo': precomaximo,
                                                      'porccomissaominima': porccomissaominima,
                                                      'porccomissaomaxima': porccomissaomaxima,
                                                      'notaprodutominima': notaminima,
                                                      'avaliacaominima': avaliacaominima,
                                                      'tamanhocanminimo': tamanhocanalminimo,
                                                      'conquistasdoproduto': conquistasproduto,
                                                      'tamanhocanmaximo': tamanhocanalmaximo})

@login_required(login_url='/login/')
def ferramentas(request):
    return render(request, 'pagina_ferramentas.html')

@login_required(login_url='/login/')
def minhaconta(request):
    if request.method == 'GET':
        return render(request, 'minhaconta.html')

    if request.method == 'POST':
        usuario = request.POST.get('email', '')
        senha_antiga = request.POST.get('senha-antiga', '')
        senha_nova = request.POST.get('senha-nova', '')

        usuarios = User.objects.filter(email=usuario)

        if not usuarios:
            erro = "O email não está cadastrado."
            return render(request, 'minhaconta.html', {'erro': erro})

        else:
            user = authenticate(username=usuario, password=senha_antiga)

            if user is not None:
                user.set_password(senha_nova)
                user.save()
                login(request, user)

                mensagem = "Senha alterada com sucesso!"
                return render(request, 'minhaconta.html', {'mensagemsucesso': mensagem})

            else:
                erro = "Senha antiga inválida. Tente novamente"
                return render(request, 'minhaconta.html', {'erro': erro})


def sugestoes(request):
    return render(request, 'sugestoes.html')

def tutoriais(request):
    return render(request, 'tutoriais.html')

def suporte(request):
    return render(request, 'suporte.html')

