from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Accommodation, Application


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'role', 'is_staff')
    list_filter = ('role', 'is_staff', 'is_superuser')
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {'fields': ('phone', 'role', 'religious_preference')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Additional Info', {'fields': ('phone', 'role', 'religious_preference')}),
    )


@admin.register(Accommodation)
class AccommodationAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'location', 'price', 'status', 'religious_preference', 'created_at')
    list_filter = ('type', 'status', 'religious_preference', 'created_at')
    search_fields = ('title', 'location', 'address', 'description')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'accommodation', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('user_name', 'user_email', 'accommodation__title')
    readonly_fields = ('created_at',)

