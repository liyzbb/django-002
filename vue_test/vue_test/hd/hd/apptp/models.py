from django.db import models

# Create your models here.
class post(models.Model):
    tp = models.ImageField(upload_to='img',default='usr.jpg')
    user = models.CharField(max_length=100)