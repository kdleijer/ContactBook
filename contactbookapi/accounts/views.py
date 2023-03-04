from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms import CreateUserForm


def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method != 'POST':
        form = CreateUserForm()
        context = {'form': form}
        return render(request, 'register.html', context)

    form = CreateUserForm(request.POST)
    if form.is_valid():
        form.save()
        user = form.cleaned_data.get('username')
        messages.success(request, 'Account was created for ' + user)
        return redirect('login')

    context = {'form': form}
    return render(request, 'register.html', context)


def login_user(request, username, password):
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return True
    return False


def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method != 'POST':
        return render(request, 'login.html', {})

    form = request.POST
    username = form.get('username')
    password = form.get('password')

    if login_user(request, username, password):
        return redirect('home')
    else:
        messages.info(request, 'Username OR password is incorrect')

    return render(request, 'login.html', {})


def logoutUser(request):
    logout(request)
    return redirect('login')


@login_required(login_url='login')
def home(request):
    return redirect('http://localhost:3000/home/')


@api_view(['GET'])
def check_authentication(request):
    authenticated = request.user.is_authenticated
    return Response({'authenticated': authenticated})
