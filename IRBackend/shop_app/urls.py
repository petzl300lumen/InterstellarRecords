
from django.contrib import admin
from django.urls import path, re_path
from . import views
from .views import *

urlpatterns = [
    re_path('products', views.products, name='products'),
    re_path('artists', views.artists, name='artists'),
    re_path('genres', views.genres, name='genres'),
    re_path('category', views.category, name='category'),
    path('product_detail/<slug:slug>', views.product_detail, name="product_detail"),
]
