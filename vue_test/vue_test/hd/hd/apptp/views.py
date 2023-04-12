from django.shortcuts import render
from django.http import HttpRequest
# Create your views here.
def hell(request):
    html = '<h1>hello<h1/>'
    return HttpRequest(html)