from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('menu.urls')),  # This makes the root URL go directly to menu app
]