# Import necessary modules
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
import bcrypt


# Create a Flask app
app = Flask(__name__)

# Configure the Flask app with your database URL from .env
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')

# Initialize the SQLAlchemy database
db = SQLAlchemy(app)

# Define your database models here (e.g., Customer, Project, etc.)

# Customer Model
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # ... other fields ...
    bookings = db.relationship('Booking', backref='customer', lazy=True)
    feedbacks = db.relationship('Feedback', backref='customer', lazy=True)

# Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... other fields ...
    invoice = db.relationship('Invoice', backref='project', uselist=False)
    feedbacks = db.relationship('Feedback', backref='project', lazy=True)
    portfolios = db.relationship('Portfolio', backref='project', uselist=False)
    licenses = db.relationship('License', backref='project', uselist=False)
    contracts = db.relationship('Contract', backref='project', uselist=False)

# Invoice Model
class Invoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Feedback/Review Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Portfolio Model
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Booking Model
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))

# License Model
class License(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Contract Model
class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Define association tables...
equipment_projects = db.Table('equipment_projects',
    db.Column('equipment_id', db.Integer, db.ForeignKey('equipment.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

class Equipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    projects = db.relationship('Project', secondary=equipment_projects, backref=db.backref('equipments', lazy='dynamic'))

employee_projects = db.Table('employee_projects',
    db.Column('employee_id', db.Integer, db.ForeignKey('employee.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... fields ...
    projects = db.relationship('Project', secondary=employee_projects, backref=db.backref('employees', lazy='dynamic'))

# Create a route to create a new customer
@app.route('/api/customers', methods=['POST'])
def create_customer():
    data = request.json
    if 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400

    new_customer = Customer(name=data['name'])
    db.session.add(new_customer)
    db.session.commit()
    return jsonify({'message': 'Customer created successfully'}), 201

# Create a route to get all customers
@app.route('/api/customers', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    customer_list = [{'id': customer.id, 'name': customer.name} for customer in customers]
    return jsonify(customer_list), 200

@app.route('/api/customers/<int:id>', methods=['GET'])
def get_customer_details(id):
    customer = Customer.query.get(id)
    if not customer:
        return jsonify({'error': 'Customer not found'}), 404

    # include other customer-related data as needed
    customer_data = {
        'id': customer.id,
        'name': customer.name,
        'bookings': [booking.serialize() for booking in customer.bookings],
        'feedbacks': [feedback.serialize() for feedback in customer.feedbacks]
        # Add other fields and relationships here
    }

    return jsonify(customer_data), 200



@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Username and password are required'}), 400

    username = data['username']
    entered_password = data['password']

    # Retrieve the hashed password for the user from the database
    stored_hashed_password = get_stored_hashed_password(username)  # Implement this function to fetch the hashed password

    if stored_hashed_password and bcrypt.checkpw(entered_password.encode("utf-8"), stored_hashed_password.encode("utf-8")):
        # Password is valid, allow the user to log in
        # Generate and return a JWT or set a session to manage user authentication
        return jsonify({'message': 'Login successful'}), 200
    else:
        # Password is invalid, deny access
        return jsonify({'error': 'Invalid username or password'}), 401



@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    if 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Username and password are required'}), 400

    username = data['username']
    plain_password = data['password']
    hashed_password = bcrypt.hashpw(plain_password.encode("utf-8"), bcrypt.gensalt())

    # Store `username` and `hashed_password` in the database

    return jsonify({'message': 'Registration successful'}), 201

# Import bcrypt at the top of your routes.py file
import bcrypt

# ...

# Function to simulate fetching the hashed password for a user from the database
def get_stored_hashed_password(username):
    # Replace this with actual database code to fetch the hashed password
    # For the purpose of this example, we use a dictionary to store user data
    user_data = {
        'user1': {
            'hashed_password': bcrypt.hashpw('password123'.encode("utf-8"), bcrypt.gensalt())
        }
    }
    
    # Check if the user exists in the database (replace with your actual database query)
    if username in user_data:
        return user_data[username]['hashed_password']
    else:
        return None  # User not found in the database





if __name__ == '__main__':
    app.run(debug=True)
