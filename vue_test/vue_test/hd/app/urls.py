from django.urls import include, re_path
from .views import *

urlpatterns = [
    re_path(r'add_wx$', add_wx, ),
    re_path(r'show_wx$', show_wx, ),
]