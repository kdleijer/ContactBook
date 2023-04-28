from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import redirect, render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.forms import CreateUserForm


def create_admin(request):
    # Check if admin user already exists
    if User.objects.filter(username='admin').exists():
        return HttpResponse('Admin user already exists')

    # Create new admin user
    admin = User.objects.create_user('admin', 'admin@admin.pl', 'admin123')
    admin.is_staff = True
    admin.is_superuser = True
    admin.save()

    # Return success message
    return HttpResponse('Admin user created successfully')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_username(request):
    username = request.user.username
    return Response({'username': username})


def register_page(request):
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


def login_page(request):
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


def logout_user(request):
    logout(request)
    return redirect('login')


@login_required(login_url='login')
def home(request):
    return redirect('http://localhost:3000/list/') #TODO: HOME PAGE NEEDS UI UPDATE...


@api_view(['GET'])
def check_authentication(request):
    authenticated = request.user.is_authenticated
    return Response({'authenticated': authenticated})
