from django.urls import render
from . import views

urlpatterns = [
path('', views.home, name='home')
]
