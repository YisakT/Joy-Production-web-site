from app import app, db
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
from models import Customer, Project, Invoice, Feedback, Portfolio, Booking, License, Contract, Equipment, Employee





@app.route('/api/login', methods=['POST'])
def login():
    # NOTE: This is a dummy endpoint now as the login will be managed by Clerk on the frontend
    return jsonify({'message': 'Login successful'}), 200

@app.route('/api/register', methods=['POST'])
def register():
    # NOTE: This is a dummy endpoint as well since registration is managed by Clerk
    return jsonify({'message': 'Registration successful'}), 201

@app.route('/api/customers', methods=['POST'])
def create_customer():
    data = request.json
    if 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400

    new_customer = Customer(name=data['name'])
    db.session.add(new_customer)
    db.session.commit()
    return jsonify({'message': 'Customer created successfully'}), 201

@app.route('/api/customers', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    customer_list = [{'id': customer.id, 'name': customer.name} for customer in customers]
    return jsonify(customer_list), 200

@app.route('/api/projects', methods=['POST'])
def create_project():
    data = request.json
    if 'name' not in data:
        return jsonify({'error': 'Project name is required'}), 400

    new_project = Project(name=data['name'])
    # ... Here you can add other fields from the data to the project if they exist
    db.session.add(new_project)
    db.session.commit()
    return jsonify({'message': 'Project created successfully'}), 201

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    project_list = [{'id': project.id, 'name': project.name} for project in projects]
    return jsonify(project_list), 200

# More routes can be added for other models

if __name__ == '__main__':
    app.run(debug=True)
