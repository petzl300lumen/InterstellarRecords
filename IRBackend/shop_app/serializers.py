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
        
class DetailedProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    genre = serializers.StringRelatedField()
    class Meta:
        model = Products
        fields = ["id", "title", "slug", "image", "descr", "price", "date", "category", "genre"] 
        
class CartSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cart 
        fields = ["id", "cart_code", "created_at", "modified_at"]
        
class SimpleCartSerializer(serializers.ModelSerializer):
    num_of_items = serializers.SerializerMethodField()
    class Meta:
        model = Cart
        fields = ["id", "cart_code", "num_of_items"]
        
    def get_num_of_items(self, cart):
        num_of_items = sum([item.quantity for item in cart.items.all()])
        return num_of_items
        
class CartItemSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(read_only=True)
    cart = CartSerializer(read_only=True)
    class Meta:
        model = CartItem
        fields = ["id", "quantity", "product", "cart"]