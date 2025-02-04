from django.db import models

class ProductCategory(models.Model):
    name = models.CharField(max_length=100, blank=False, default='unnamed_category')
    desc = models.CharField(max_length=1000, blank=False, default='no_category_desc')
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

class Discount(models.Model):
    name = models.CharField(max_length=100, blank=False, default='unnamed_discount')
    desc = models.CharField(max_length=1000, blank=False, default='no_discount_desc')
    discount_percent = models.DecimalField(max_digits=5, decimal_places=2)
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    expiration = models.DateTimeField(null=True, blank=True)

class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, default='unnamed_product')
    desc = models.CharField(max_length=150, blank=True, default='no_product_desc')

    unit_price_cents = models.IntegerField("unit_price")
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    category_id = models.ForeignKey(
        ProductCategory, 
        on_delete=models.CASCADE,
        verbose_name="product category",
        null=True,
        blank=True
    ) 

    discount_id = models.ForeignKey(
        Discount,
        on_delete=models.CASCADE,
        verbose_name="product discount",
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name
