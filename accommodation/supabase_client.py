"""
Supabase client configuration and helper functions
"""
from supabase import create_client, Client
from django.conf import settings
import os


def get_supabase_client() -> Client:
    """Get Supabase client instance"""
    url = settings.SUPABASE_URL
    key = settings.SUPABASE_KEY
    
    if not url or not key:
        raise ValueError("Supabase URL and KEY must be set in environment variables")
    
    return create_client(url, key)


def get_supabase_service_client() -> Client:
    """Get Supabase service client with elevated permissions"""
    url = settings.SUPABASE_URL
    key = settings.SUPABASE_SERVICE_KEY or settings.SUPABASE_KEY
    
    if not url or not key:
        raise ValueError("Supabase URL and SERVICE_KEY must be set in environment variables")
    
    return create_client(url, key)

