#!/usr/bin/env python
"""
Test script to verify data is saving to Supabase
"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'harmony_housing.settings')
django.setup()

from accommodation.models import User, Accommodation, Application

def test_data_saving():
    print("="*60)
    print("Testing Data Saving to Supabase")
    print("="*60)
    
    try:
        # Test 1: Create a test user
        print("\n1️⃣  Creating test user...")
        # Delete existing test user if exists
        User.objects.filter(username='testuser').delete()
        
        test_user = User(
            username='testuser',
            email='testuser@ams.com',
            first_name='Test',
            last_name='User',
            phone='9876543210',
            role='user',
            religious_preference='Muslim',
        )
        test_user.set_password('test123')
        test_user.save()
        print(f"   ✅ User created: {test_user.email} (ID: {test_user.id})")
        
        # Test 2: Create a test accommodation
        print("\n2️⃣  Creating test accommodation...")
        test_accommodation = Accommodation.objects.create(
            title='Test Accommodation',
            description='This is a test accommodation to verify Supabase',
            location='Test City',
            address='123 Test Street',
            type='Apartment',
            price=1000,
            religious_preference='Any',
            status='Available',
            bedrooms=2,
            bathrooms=1.5,
            contact_email='test@ams.com',
            contact_phone='1234567890',
        )
        print(f"   ✅ Accommodation created: {test_accommodation.title} (ID: {test_accommodation.id})")
        
        # Test 3: Create a test application
        print("\n3️⃣  Creating test application...")
        test_application = Application.objects.create(
            accommodation=test_accommodation,
            user=test_user,
            user_name=f"{test_user.first_name} {test_user.last_name}",
            user_email=test_user.email,
            user_phone=test_user.phone,
            message='This is a test application',
            status='Pending',
        )
        print(f"   ✅ Application created: {test_application.id}")
        
        # Test 4: Verify data by reading it back
        print("\n4️⃣  Verifying data from database...")
        users_count = User.objects.count()
        accommodations_count = Accommodation.objects.count()
        applications_count = Application.objects.count()
        
        print(f"   ✅ Total Users: {users_count}")
        print(f"   ✅ Total Accommodations: {accommodations_count}")
        print(f"   ✅ Total Applications: {applications_count}")
        
        # Test 5: Clean up test data
        print("\n5️⃣  Cleaning up test data...")
        test_application.delete()
        test_accommodation.delete()
        test_user.delete()
        print("   ✅ Test data cleaned up")
        
        print("\n" + "="*60)
        print("🎉 ALL TESTS PASSED!")
        print("✅ Data is saving to Supabase successfully!")
        print("="*60)
        
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == '__main__':
    success = test_data_saving()
    sys.exit(0 if success else 1)

