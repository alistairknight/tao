from rest_framework import serializers
from .models import PokemonType, Pokemon

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonType
        fields = ('id', 'Name')


class PokemonSerializer(serializers.ModelSerializer):
    Types = TypeSerializer(many=True, read_only=True)

    class Meta:
        model = Pokemon
        fields = ('id', 'Number', 'Generation', 'Name', 'Image', 'Types', 'Created', 'Active')
