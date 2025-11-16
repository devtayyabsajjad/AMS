from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator


class User(AbstractUser):
    """Custom User model extending Django's AbstractUser"""
    phone = models.CharField(max_length=20, blank=True)
    role = models.CharField(
        max_length=10,
        choices=[('admin', 'Admin'), ('user', 'User')],
        default='user'
    )
    religious_preference = models.CharField(
        max_length=20,
        choices=[
            ('Muslim', 'Muslim'),
            ('Hindu', 'Hindu'),
            ('Christian', 'Christian'),
            ('Other', 'Other'),
            ('Any', 'Any')
        ],
        blank=True,
        null=True
    )

    def __str__(self):
        return self.email


class Accommodation(models.Model):
    """Accommodation listing model"""
    ACCOMMODATION_TYPES = [
        ('Apartment', 'Apartment'),
        ('House', 'House'),
        ('Room', 'Room'),
        ('Studio', 'Studio'),
        ('Shared', 'Shared'),
    ]
    
    RELIGIOUS_PREFERENCES = [
        ('Muslim', 'Muslim'),
        ('Hindu', 'Hindu'),
        ('Christian', 'Christian'),
        ('Other', 'Other'),
        ('Any', 'Any'),
    ]
    
    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Occupied', 'Occupied'),
        ('Pending', 'Pending'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=ACCOMMODATION_TYPES)
    location = models.CharField(max_length=100)
    address = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    religious_preference = models.CharField(max_length=20, choices=RELIGIOUS_PREFERENCES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Available')
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1, validators=[MinValueValidator(0)])
    amenities = models.JSONField(default=list, blank=True)
    images = models.JSONField(default=list, blank=True)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title


class Application(models.Model):
    """Application model for accommodation applications"""
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    
    accommodation = models.ForeignKey(Accommodation, on_delete=models.CASCADE, related_name='applications')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField()
    user_phone = models.CharField(max_length=20)
    message = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user_name} - {self.accommodation.title}"

