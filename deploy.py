#!/usr/bin/env python
"""
Quick deployment setup script for AMS
"""
import os
import sys
import subprocess

def run_command(command, description):
    """Run a command and display status"""
    print(f"\n{'='*60}")
    print(f"⚙️  {description}")
    print(f"{'='*60}")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(result.stdout)
        print(f"✅ {description} - SUCCESS")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} - FAILED")
        print(f"Error: {e.stderr}")
        return False

def main():
    print("""
    ╔═══════════════════════════════════════════════════════════╗
    ║          AMS - Deployment Setup Script                   ║
    ║     Accommodation Management System                       ║
    ╚═══════════════════════════════════════════════════════════╝
    """)
    
    steps = [
        ("pip install -r requirements.txt", "Installing Dependencies"),
        ("python manage.py collectstatic --noinput", "Collecting Static Files"),
        ("python manage.py migrate", "Running Database Migrations"),
    ]
    
    success_count = 0
    for command, description in steps:
        if run_command(command, description):
            success_count += 1
    
    print(f"\n{'='*60}")
    print(f"📊 Results: {success_count}/{len(steps)} steps completed successfully")
    print(f"{'='*60}")
    
    if success_count == len(steps):
        print("\n✨ Deployment setup completed successfully!")
        print("\n📝 Next Steps:")
        print("   1. Create a superuser: python manage.py createsuperuser")
        print("   2. Start the server: python manage.py runserver")
        print("   3. Or deploy to production using the DEPLOYMENT_GUIDE.md")
    else:
        print("\n⚠️  Some steps failed. Please check the errors above.")
        sys.exit(1)

if __name__ == '__main__':
    main()

