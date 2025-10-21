from django.urls import path
from . import views

app_name = 'menu'

urlpatterns = [
    path('', views.menu_view, name='menu'),
    path('checkout/', views.checkout_view, name='checkout'),
    path('api/process-order/', views.process_order, name='process_order'),
    path('api/menu/', views.api_menu, name='api_menu'),
]
