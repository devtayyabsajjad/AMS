import psycopg2
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Fetch variables
USER = os.getenv("user")
PASSWORD = os.getenv("password")
HOST = os.getenv("host")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")

print("="*60)
print("Testing Supabase Connection (Transaction Pooler)")
print("="*60)
print(f"Host: {HOST}")
print(f"Port: {PORT}")
print(f"Database: {DBNAME}")
print(f"User: {USER}")
print("="*60)

# Connect to the database
try:
    connection = psycopg2.connect(
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT,
        dbname=DBNAME
    )
    print("✅ Connection successful!")
    
    # Create a cursor to execute SQL queries
    cursor = connection.cursor()
    
    # Example query
    cursor.execute("SELECT NOW();")
    result = cursor.fetchone()
    print(f"✅ Current Time: {result[0]}")
    
    # Check if tables exist
    cursor.execute("""
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name LIKE 'accommodation_%'
        ORDER BY table_name;
    """)
    tables = cursor.fetchall()
    
    if tables:
        print(f"\n✅ Found {len(tables)} accommodation tables:")
        for table in tables:
            print(f"   - {table[0]}")
    else:
        print("\n⚠️  No accommodation tables found yet. Run migrations first.")
    
    # Close the cursor and connection
    cursor.close()
    connection.close()
    print("\n✅ Connection closed successfully.")
    print("\n" + "="*60)
    print("🎉 DATABASE CONNECTION IS WORKING!")
    print("="*60)

except Exception as e:
    print(f"\n❌ Failed to connect: {e}")
    print("\nPlease check:")
    print("1. .env file exists with correct credentials")
    print("2. Supabase project is active (not paused)")
    print("3. Internet connection is working")
    print("4. Firewall allows connection to port 6543")

