from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Customer Model
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # ... other fields ...
    # Add other model fields here

# Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # ... other fields ...
    # Add other model fields here

# Invoice Model
class Invoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Invoice model here
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    # Add other model fields here

# Feedback/Review Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Feedback model here
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    # Add other model fields here

# Portfolio Model
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Portfolio model here
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    # Add other model fields here

# Booking Model
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Booking model here
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    # Add other model fields here

# License Model
class License(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the License model here
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    # Add other model fields here

# Contract Model
class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Contract model here
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    # Add other model fields here

# Define association tables...
equipment_projects = db.Table('equipment_projects',
    db.Column('equipment_id', db.Integer, db.ForeignKey('equipment.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

class Equipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Equipment model here
    # Add other model fields here

employee_projects = db.Table('employee_projects',
    db.Column('employee_id', db.Integer, db.ForeignKey('employee.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add other fields for the Employee model here
    # Add other model fields here
