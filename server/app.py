from flask import Flask
import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate  # Import Flask-Migrate

# Load environment variables from .env file
load_dotenv()

# Create a Flask app
app = Flask(__name__)

# Configure the Flask app with your database URL.
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////root/phase-5-project/Joy-Production-web-site/server/db/mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # To suppress a warning
print(app.config['SQLALCHEMY_DATABASE_URI'])

# Initialize the SQLAlchemy database
db = SQLAlchemy(app)  # Only one instance

# Initialize Flask-Migrate after the database
migrate = Migrate(app, db)

# Import routes after initializing the app and db to avoid circular imports
from routes import *

# Define a simple route for testing
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
