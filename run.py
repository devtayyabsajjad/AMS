#!/usr/bin/env python
"""
Quick start script for AMS - Accommodation Management System
"""
import os
import sys
import django

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'harmony_housing.settings')
    django.setup()
    
    from django.core.management import execute_from_command_line
    
    # Check if .env file exists
    if not os.path.exists('.env'):
        print("⚠️  Warning: .env file not found!")
        print("Please create a .env file with your Supabase credentials.")
        print("You can copy .env.example to .env and fill in your values.")
        print()
    
    # Run the server
    execute_from_command_line(['manage.py', 'runserver'])

