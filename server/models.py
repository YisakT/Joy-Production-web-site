from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Integer, Column,Float



from app import db



# Many-to-Many association tables
equipment_projects = db.Table('equipment_projects',
    db.Column('equipment_id', db.Integer, db.ForeignKey('equipment.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

employee_projects = db.Table('employee_projects',
    db.Column('employee_id', db.Integer, db.ForeignKey('employee.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'))
)

# Customer Model
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=True)
    phone_number = Column(String(20))
    
    # Add other fields as needed
    feedbacks = db.relationship('Feedback', backref='customer', lazy=True)
    bookings = db.relationship('Booking', backref='customer', lazy=True)

# Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # Add other fields as needed
    invoice = db.relationship('Invoice', backref='project', uselist=False)
    feedbacks = db.relationship('Feedback', backref='project', lazy=True)
    portfolios = db.relationship('Portfolio', backref='project', uselist=False)
    licenses = db.relationship('License', backref='project', uselist=False)
    contracts = db.relationship('Contract', backref='project', uselist=False)
    equipments = db.relationship('Equipment', secondary=equipment_projects, backref=db.backref('projects', lazy='dynamic'))
    employees = db.relationship('Employee', secondary=employee_projects, backref=db.backref('projects', lazy='dynamic'))

# Invoice Model
class Invoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))  
    total_cost = db.Column(Float)
    deposit = db.Column(Float)
    ...

    # Add invoice fields

# Feedback Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add feedback fields
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Portfolio Model
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add portfolio fields
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Booking Model
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add booking fields
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))

# License Model
class License(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add license fields
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Contract Model
class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add contract fields
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))

# Equipment Model
class Equipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    camera_model = Column(String(100))  
    extra_equipment = Column(String(255))
    
    # Rename the projects attribute
    associated_projects = db.relationship('Project', secondary=equipment_projects, backref=db.backref('associated_equipments', lazy='dynamic'))

# Employee Model
# Employee Model
class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(100))
    phone_number = Column(String(20))
    # Rename the projects attribute
    associated_projects = db.relationship('Project', secondary=employee_projects, backref=db.backref('associated_employees', lazy='dynamic'))
