from django.urls import include, path, re_path
from rest_framework import routers

from . import views as api_views
from product import views as product_views

router = routers.DefaultRouter()
router.register(r'product', product_views.ProductViewSet)
router.register(r'product_category', product_views.ProductCategoryViewSet)
router.register(r'discount', product_views.DiscountViewSet)

urlpatterns = [
  re_path('signup', api_views.signup),
  re_path('login', api_views.login),
  path('', include(router.urls)),
  path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
