from django.db import models

# Create your models here.
class PokemonType(models.Model):
    Name = models.CharField(max_length=50)


class Pokemon(models.Model):
    Number = models.CharField(max_length=10)
    Generation = models.IntegerField()
    Name = models.CharField(max_length=100)
    Image = models.CharField(max_length=200)
    Types = models.ManyToManyField(PokemonType)
    Created = models.DateTimeField(auto_now_add=True)
    Active = models.BooleanField()
