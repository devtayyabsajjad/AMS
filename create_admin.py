#!/usr/bin/env python
"""
Script to create an admin user for AMS
"""
import os
import sys
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'harmony_housing.settings')
django.setup()

from accommodation.models import User

def create_admin():
    print("="*60)
    print("Creating Admin User for AMS")
    print("="*60)
    
    # Check if admin already exists
    if User.objects.filter(email='admin@ams.com').exists():
        print("⚠️  Admin user already exists!")
        admin = User.objects.get(email='admin@ams.com')
        print(f"   Email: {admin.email}")
        print(f"   Role: {admin.role}")
        print("\nTo login:")
        print("   URL: http://localhost:8000/auth/login/")
        print("   Email: admin@ams.com")
        print("   Password: (your existing password)")
        return
    
    # Create admin user
    try:
        admin = User(
            username='admin',
            email='admin@ams.com',
            first_name='AMS',
            last_name='Administrator',
            phone='1234567890',
            role='admin',
            religious_preference='Any',
        )
        admin.set_password('admin123')  # Default password
        admin.is_staff = True
        admin.is_superuser = True
        admin.save()
        
        print("✅ Admin user created successfully!")
        print("\n" + "="*60)
        print("LOGIN CREDENTIALS")
        print("="*60)
        print("URL: http://localhost:8000/auth/login/")
        print("Email: admin@ams.com")
        print("Password: admin123")
        print("="*60)
        print("\n⚠️  IMPORTANT: Change the password after first login!")
        print("\n📝 Next steps:")
        print("1. Start server: python manage.py runserver")
        print("2. Go to: http://localhost:8000")
        print("3. Login with the credentials above")
        print("4. Go to Admin Dashboard")
        
    except Exception as e:
        print(f"❌ Error creating admin user: {e}")
        sys.exit(1)

if __name__ == '__main__':
    create_admin()

