from product.models import Product, Discount, ProductCategory
from rest_framework import permissions, viewsets

from product.serializers import ProductSerializer, DiscountSerializer, ProductCategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  permission_classes = [permissions.IsAuthenticated]

class DiscountViewSet(viewsets.ModelViewSet):
  queryset = Discount.objects.all()
  serializer_class = DiscountSerializer
  permission_classes = [permissions.IsAuthenticated]

class ProductCategoryViewSet(viewsets.ModelViewSet):
  queryset = ProductCategory.objects.all()
  serializer_class = ProductCategorySerializer
  permission_classes = [permissions.IsAuthenticated]
