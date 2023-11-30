from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render, redirect
import re
from django.urls import reverse_lazy
from django.shortcuts import reverse


def PaginaLogin(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return redirect(reverse('produtos'))
        else:
            return render(request, 'pagina_de_login.html')

    else:
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        usuarios = User.objects.filter(email=email)

        if not usuarios:
            erro = "O email não está cadastrado."
            return render(request, 'pagina_de_login.html', {'erro': erro})

        else:
            user = authenticate(username=email, password=senha)
            if user is not None:
                login(request, user)
                return redirect(reverse('produtos'))

            else:
                erro = "Senha inválida. Tente novamente"
                return render(request, 'pagina_de_login.html', {'erro': erro})


def PaginaRecuperacao(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return redirect(reverse('produtos'))
        else:
            return render(request, 'pagina_de_recuperacao_conta.html')

    else:
        email = request.POST.get('email')
        usuarios = User.objects.filter(email=email)

        if not usuarios:
            erro = "O email não está cadastrado."
            return render(request, 'pagina_de_recuperacao_conta.html', {'erro': erro})

        else:
            erro = "Email enviado. Verifique sua caixa de mensagem"
            return render(request, 'pagina_de_recuperacao_conta.html', {'erro': erro})


@user_passes_test(lambda u: u.is_superuser)
def PaginaCadastro(request):
    if request.method == 'GET':
        return render(request, 'pagina_de_cadastro.html')

    else:
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        usuarios = User.objects.filter(email=email)

        if not usuarios:
            User.objects.create_user(username=email, email=email, password=senha)
            mensagem = 'Usuário cadastrado com sucesso'
            return render(request, 'pagina_de_cadastro.html', {'mensagemsucesso': mensagem})

        else:
            erro = "O email está cadastrado."
            return render(request, 'pagina_de_cadastro.html', {'erro': erro})



