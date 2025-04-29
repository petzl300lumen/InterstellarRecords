from rest_framework import serializers
from .models import *


class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    genre = serializers.StringRelatedField()
    class Meta:
        model = Products
        fields = ["id", "title", "slug", "image", "descr", "price", "date", "category", "genre"] 

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = "__all__"
        
class GenresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genres
        fields = "__all__"
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"