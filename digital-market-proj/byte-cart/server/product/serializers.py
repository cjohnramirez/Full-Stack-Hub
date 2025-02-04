from product.models import Product, Discount, ProductCategory
from rest_framework import serializers

class ProductSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class DiscountSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Discount
    fields = '__all__'
    
class ProductCategorySerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = ProductCategory
    fields = '__all__'