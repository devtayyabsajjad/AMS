"""
URL configuration for harmony_housing project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Custom admin site branding
admin.site.site_header = "Harmony Housing System Admin"
admin.site.site_title = "System Admin"
admin.site.index_title = "System Administration"

urlpatterns = [
    path('system-admin/', admin.site.urls),  # Django default admin (for superuser/developer use)
    path('', include('accommodation.urls')),  # Custom admin dashboard at /admin/
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

