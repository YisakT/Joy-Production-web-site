from flask import Flask
import os
from dotenv import load_dotenv
from routes import db, Customer, Project, Invoice, Feedback, Portfolio, Booking, License, Contract, Equipment, Employee

# Load environment variables from .env file
load_dotenv()

# Create a Flask app
app = Flask(__name__)

# Configure the Flask app with your database URL from .env
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

# Initialize the SQLAlchemy database
db.init_app(app)

# Define your Flask routes here

# Define a simple route for testing
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
