from __future__ import unicode_literals
import django
django.setup()

from django.db import models


# Create your models here.

class app(models.Model):
    app_name = models.CharField(max_length=100)

    add_time = models.CharField(auto_created=True, max_length=100)

    def __unicode__(self):
        return self.app_name


# -*- coding: utf-8 -*-


class Wx(models.Model):
    wx_name = models.CharField(max_length=128)
    add_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.wx_name
