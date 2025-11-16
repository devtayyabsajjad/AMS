"""
Script to update .env file with Supabase Transaction Pooler settings
"""
from pathlib import Path

def update_env_file():
    env_path = Path('.env')
    
    # New pooler configuration
    new_config = """# Supabase Transaction Pooler Configuration
# Use this for better connection stability and performance

# Pooler Connection Settings
user=postgres.ofytgjjxhnmluqhpejws
password=Tayyab@102
host=aws-1-ap-south-1.pooler.supabase.com
port=6543
dbname=postgres

# Django Settings
SECRET_KEY=django-insecure-change-this-in-production-use-strong-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Enable Supabase with Pooler
USE_SUPABASE=True

# Django Database Configuration (using transaction pooler)
DB_NAME=postgres
DB_USER=postgres.ofytgjjxhnmluqhpejws
DB_PASSWORD=Tayyab@102
DB_HOST=aws-1-ap-south-1.pooler.supabase.com
DB_PORT=6543

# Supabase API (Optional)
SUPABASE_URL=https://ofytgjjxhnmluqhpejws.supabase.co
SUPABASE_KEY=your-supabase-anon-key-here
SUPABASE_SERVICE_KEY=your-supabase-service-key-here
"""
    
    # Write to .env file
    try:
        with open(env_path, 'w', encoding='utf-8') as f:
            f.write(new_config)
        print("✅ .env file updated successfully!")
        print("\n" + "="*60)
        print("NEW CONFIGURATION:")
        print("="*60)
        print("Host: aws-1-ap-south-1.pooler.supabase.com")
        print("Port: 6543 (Transaction Pooler)")
        print("User: postgres.ofytgjjxhnmluqhpejws")
        print("Database: postgres")
        print("="*60)
        print("\n✨ Using Supabase Transaction Pooler for better connection!")
        return True
    except Exception as e:
        print(f"❌ Error updating .env file: {e}")
        return False

if __name__ == '__main__':
    if update_env_file():
        print("\n📝 Next steps:")
        print("1. Test connection: python main.py")
        print("2. Run migrations: python manage.py migrate")
        print("3. Start server: python manage.py runserver")

