from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    category_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.category_name
        
class Genres(models.Model):
    genre_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.genre_name

class Products(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, null=True)
    image = models.ImageField(upload_to="img")
    descr = models.TextField(max_length=999)
    price = models.CharField()
    date = models.DateField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genres, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        
        if not self.slug:
            self.slug = slugify(self.title)
            unique_slug = self.slug
            counter = 1 
            if Products.objects.filter(slug=unique_slug).exists():
                unique_slug = f'{self.slug} - {counter}'
                counter += 1 
            self.slug = unique_slug
            
        super().save(*args, **kwargs)
    
class Artists(models.Model):
    artist_name = models.CharField(max_length=50)
    image =  models.ImageField(upload_to="img")
    destination = models.CharField(max_length=50)
    
    def __str__(self):
        return self.artist_name 