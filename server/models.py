from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Integer, Column, Float, Date
from datetime import datetime
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
    name = db.Column(String(100), nullable=False)
    email = db.Column(String(100), nullable=True)
    phone_number = db.Column(String(20), nullable=True)  
    
    feedbacks = db.relationship('Feedback', backref='customer', lazy=True)
    bookings = db.relationship('Booking', backref='customer', lazy=True)

# Project Model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(String(100), nullable=False)
    
    invoice = db.relationship('Invoice', backref='project', uselist=False)
    feedbacks = db.relationship('Feedback', backref='project', lazy=True)
    portfolios = db.relationship('Portfolio', backref='project', uselist=False)
    licenses = db.relationship('License', backref='project', uselist=False)
    contracts = db.relationship('Contract', backref='project', uselist=False)
    equipments = db.relationship('Equipment', secondary=equipment_projects, back_populates='associated_projects')
    employees = db.relationship('Employee', secondary=employee_projects, back_populates='associated_projects')

# Invoice Model
class Invoice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    total_cost = db.Column(Float)
    deposit = db.Column(Float)
   

# Feedback Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
   

# Portfolio Model
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    

# Booking Model
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    

# License Model
class License(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
   

# Contract Model
class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    customer_name = db.Column(String(100), nullable=False)
    date_of_contract = db.Column(Date, nullable=False)

# Equipment Model
class Equipment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    camera_model = Column(String(100))
    extra_equipment = Column(String(255))
    
    associated_projects = db.relationship('Project', secondary=equipment_projects, back_populates='equipments')

# Employee Model
class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = Column(String(50))
    email = Column(String(100))
    phone_number = Column(String(20))
    
    associated_projects = db.relationship('Project', secondary=employee_projects, back_populates='employees')




class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(1000), nullable=False) 
    reviewer_name = db.Column(db.String(150), nullable=False)  
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)  
