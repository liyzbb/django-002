from django.shortcuts import render
from django.http import HttpRequest
# Create your views here.
def hell(request):
    return HttpRequest('hello')