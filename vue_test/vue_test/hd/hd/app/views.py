from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers
from django.http import JsonResponse
import json

from .models import Wx

@require_http_methods(["GET"])
def add_wx(request):
    response = {}
    try:
        wx = Wx(wx_name=request.GET.get('wx_name'))
        wx.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)

@require_http_methods(["GET"])
def show_wx(request):
    response = {}
    try:
        wenx = Wx.objects.filter()
        response['list'] = json.loads(serializers.serialize("json", wenx))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)