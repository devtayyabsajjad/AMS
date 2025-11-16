from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('auth/login/', views.auth_login, name='auth_login'),
    path('auth/signup/', views.auth_signup, name='auth_signup'),
    path('auth/logout/', views.auth_logout, name='auth_logout'),
    path('accommodations/', views.accommodations, name='accommodations'),
    path('my-applications/', views.my_applications, name='my_applications'),
    path('apply/<int:accommodation_id>/', views.apply_accommodation, name='apply_accommodation'),
    path('admin/', views.admin_dashboard, name='admin_dashboard'),
    path('admin/accommodations/create/', views.create_accommodation, name='create_accommodation'),
    path('admin/accommodations/<int:accommodation_id>/edit/', views.edit_accommodation, name='edit_accommodation'),
    path('admin/accommodations/<int:accommodation_id>/delete/', views.delete_accommodation, name='delete_accommodation'),
    path('admin/applications/<int:application_id>/', views.view_application, name='view_application'),
    path('admin/applications/<int:application_id>/update-status/', views.update_application_status, name='update_application_status'),
    path('admin/users/', views.manage_users, name='manage_users'),
    path('admin/users/create/', views.create_user, name='create_user'),
    path('admin/users/<int:user_id>/', views.view_user, name='view_user'),
    path('admin/users/<int:user_id>/edit/', views.edit_user, name='edit_user'),
    path('admin/users/<int:user_id>/delete/', views.delete_user, name='delete_user'),
]

