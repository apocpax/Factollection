from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import CreateUserForm
from .models import Fact
import json



@login_required(login_url='loginPage')
def home(request):
    fact = Fact.Date_Fact('12','15')
    numFact = Fact.Random_Num_Fact()
    print(f'num_fact from views {numFact}')
    context = {'dateFact' :fact, 'numFact' :numFact}
    return render(request, 'home.html', context)

def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm
        if request.method == "POST":
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'User ' + user + ' Created Successfully!!')
                return redirect('/loginPage/')
            else: print(form.errors)

    context = {'form' :form}
    return render(request, 'auth/register.html', context)

def loginPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/home/')
            else: 
                messages.info(request, 'Username or Password is Inncorrect')
        context = {}
        return render(request, 'auth/login.html')

def logoutUser(request):
    logout(request)
    return redirect('/loginPage/')

