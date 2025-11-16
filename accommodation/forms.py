from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Accommodation, Application, User


class UserSignupForm(UserCreationForm):
    """User signup form"""
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)
    phone = forms.CharField(max_length=20, required=True)
    religious_preference = forms.ChoiceField(
        choices=[
            ('', 'Select...'),
            ('Muslim', 'Muslim'),
            ('Hindu', 'Hindu'),
            ('Christian', 'Christian'),
            ('Other', 'Other'),
            ('Any', 'Any')
        ],
        required=False
    )
    
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'phone', 'password1', 'password2', 'religious_preference')
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({'class': 'form-control'})
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user


class AccommodationForm(forms.ModelForm):
    """Accommodation form"""
    amenities = forms.CharField(
        required=False,
        help_text='Enter amenities separated by commas (e.g., Parking, WiFi, Gym)'
    )
    
    class Meta:
        model = Accommodation
        fields = [
            'title', 'description', 'type', 'location', 'address', 'price',
            'religious_preference', 'status', 'bedrooms', 'bathrooms',
            'amenities', 'contact_email', 'contact_phone'
        ]
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'type': forms.Select(attrs={'class': 'form-control'}),
            'location': forms.TextInput(attrs={'class': 'form-control'}),
            'address': forms.TextInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control', 'step': '0.01'}),
            'religious_preference': forms.Select(attrs={'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'bedrooms': forms.NumberInput(attrs={'class': 'form-control', 'min': '0'}),
            'bathrooms': forms.NumberInput(attrs={'class': 'form-control', 'min': '0', 'step': '0.5'}),
            'amenities': forms.TextInput(attrs={'class': 'form-control'}),
            'contact_email': forms.EmailInput(attrs={'class': 'form-control'}),
            'contact_phone': forms.TextInput(attrs={'class': 'form-control'}),
        }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance and self.instance.pk:
            # Convert amenities list to comma-separated string for editing
            self.initial['amenities'] = ', '.join(self.instance.amenities or [])
    
    def clean_amenities(self):
        amenities_str = self.cleaned_data.get('amenities', '')
        if amenities_str:
            return [a.strip() for a in amenities_str.split(',') if a.strip()]
        return []
    
    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.amenities = self.cleaned_data['amenities']
        if commit:
            instance.save()
        return instance


class ApplicationForm(forms.ModelForm):
    """Application form"""
    class Meta:
        model = Application
        fields = ['user_name', 'user_email', 'user_phone', 'message']
        widgets = {
            'user_name': forms.TextInput(attrs={'class': 'form-control'}),
            'user_email': forms.EmailInput(attrs={'class': 'form-control'}),
            'user_phone': forms.TextInput(attrs={'class': 'form-control'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
        }

