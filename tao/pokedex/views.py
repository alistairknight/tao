from .models import PokemonType, Pokemon
from .serializers import TypeSerializer, PokemonSerializer
from rest_framework import generics

class PokemonListCreate(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
