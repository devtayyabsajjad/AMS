#!/usr/bin/env python
"""
Script to set up Supabase database connection and run migrations
"""
import os
import sys
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'harmony_housing.settings')
django.setup()

from django.core.management import execute_from_command_line
from django.conf import settings

def main():
    print("=" * 60)
    print("AMS - Supabase Database Setup")
    print("=" * 60)
    print()
    
    # Check if Supabase is configured
    if not settings.USE_SUPABASE:
        print("⚠️  Supabase is not enabled!")
        print()
        print("To enable Supabase:")
        print("1. Open your .env file")
        print("2. Add: USE_SUPABASE=True")
        print("3. Make sure DB_HOST, DB_NAME, DB_USER, DB_PASSWORD are set")
        print()
        return
    
    print("✅ Supabase is enabled")
    print(f"   Database: {settings.DATABASES['default']['NAME']}")
    print(f"   Host: {settings.DATABASES['default']['HOST']}")
    print()
    
    # Check connection
    print("Testing database connection...")
    try:
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        print("✅ Database connection successful!")
    except Exception as e:
        print(f"❌ Database connection failed: {e}")
        print()
        print("Please check your .env file configuration:")
        print("- DB_HOST should be: db.ofytgjjxhnmluqhpejws.supabase.co")
        print("- DB_NAME should be: postgres")
        print("- DB_USER should be: postgres")
        print("- DB_PASSWORD should be: Tayyab@102")
        return
    
    print()
    print("Running migrations to create tables in Supabase...")
    print()
    
    # Run migrations
    try:
        execute_from_command_line(['manage.py', 'migrate', '--verbosity', '2'])
        print()
        print("=" * 60)
        print("✅ Migrations completed successfully!")
        print("=" * 60)
        print()
        print("Next steps:")
        print("1. Check your Supabase dashboard: https://supabase.com/dashboard/project/ofytgjjxhnmluqhpejws")
        print("2. Go to Table Editor to see your tables")
        print("3. Tables created:")
        print("   - accommodation_user")
        print("   - accommodation_accommodation")
        print("   - accommodation_application")
        print("   - django_migrations (and other Django system tables)")
        print()
    except Exception as e:
        print(f"❌ Migration failed: {e}")
        print()
        print("Please check:")
        print("- Your internet connection")
        print("- Supabase project is active")
        print("- Database credentials are correct")

if __name__ == '__main__':
    main()

