from app import app, db
from models import Customer, Employee, Equipment, Invoice, Project, Feedback, Portfolio, Booking, License, Contract

app.app_context().push()

# Checks if the table is empty
def is_table_empty(model):
    return not model.query.first()

def seed_customers():
    if is_table_empty(Customer):
        customers = [
            Customer(name="John Doe", phone_number="123-456-7890"),
            Customer(name="Jane Smith", phone_number="987-654-3210"),
            Customer(name="Mike Johnson", phone_number="555-444-3333"),
            Customer(name="Lucy Gray", phone_number="666-777-8888"),
            Customer(name="Sam Brown", phone_number="999-111-2222")
        ]
        db.session.add_all(customers)
        db.session.commit()
        print("Customers seeded!")

def seed_employees():
    if is_table_empty(Employee):
        employees = [
            Employee(name="Alice", email="alice@example.com", phone_number="555-123-4567"),
            Employee(name="Bob", email="bob@example.com", phone_number="555-987-6543"),
            Employee(name="Charlie", email="charlie@example.com", phone_number="555-222-1111"),
            Employee(name="Denise", email="denise@example.com", phone_number="555-333-4444"),
            Employee(name="Eddie", email="eddie@example.com", phone_number="555-555-5555")
        ]
        db.session.add_all(employees)
        db.session.commit()
        print("Employees seeded!")

def seed_equipment():
    if is_table_empty(Equipment):
        equipments = [
            Equipment(camera_model="Canon EOS R5", extra_equipment="Tripod, Lens Kit"),
            Equipment(camera_model="Sony A7 III", extra_equipment="Gimbal, Wide-angle lens"),
            Equipment(camera_model="Nikon Z6", extra_equipment="Microphone, 50mm lens"),
            Equipment(camera_model="Fujifilm X-T4", extra_equipment="Drone, Battery Pack"),
            Equipment(camera_model="Panasonic Lumix S5", extra_equipment="LED Light, Bag")
        ]
        db.session.add_all(equipments)
        db.session.commit()
        print("Equipment seeded!")

def seed_invoices():
    if is_table_empty(Invoice):
        invoices = [
            Invoice(total_cost=500.00, deposit=100.00),
            Invoice(total_cost=1000.00, deposit=200.00),
            Invoice(total_cost=1500.00, deposit=300.00),
            Invoice(total_cost=2000.00, deposit=400.00),
            Invoice(total_cost=2500.00, deposit=500.00)
        ]
        db.session.add_all(invoices)
        db.session.commit()
        print("Invoices seeded!")

def seed_projects():
    if is_table_empty(Project):
        projects = [
            Project(name="Wedding Shoot"),
            Project(name="Documentary Shoot"),
            Project(name="Birthday Party"),
            Project(name="Corporate Event"),
            Project(name="Product Shoot")
        ]
        db.session.add_all(projects)
        db.session.commit()
        print("Projects seeded!")

def seed_feedbacks():
    if is_table_empty(Feedback):
        feedbacks = [
            Feedback(customer_id=1, project_id=1),
            Feedback(customer_id=2, project_id=2),
            Feedback(customer_id=3, project_id=3),
            Feedback(customer_id=4, project_id=4),
            Feedback(customer_id=5, project_id=5)
        ]
        db.session.add_all(feedbacks)
        db.session.commit()
        print("Feedbacks seeded!")

def seed_portfolios():
    if is_table_empty(Portfolio):
        portfolios = [
            Portfolio(project_id=1),
            Portfolio(project_id=2),
            Portfolio(project_id=3),
            Portfolio(project_id=4),
            Portfolio(project_id=5)
        ]
        db.session.add_all(portfolios)
        db.session.commit()
        print("Portfolios seeded!")

def seed_bookings():
    if is_table_empty(Booking):
        bookings = [
            Booking(customer_id=1),
            Booking(customer_id=2),
            Booking(customer_id=3),
            Booking(customer_id=4),
            Booking(customer_id=5)
        ]
        db.session.add_all(bookings)
        db.session.commit()
        print("Bookings seeded!")

def seed_licenses():
    if is_table_empty(License):
        licenses = [
            License(project_id=1),
            License(project_id=2),
            License(project_id=3),
            License(project_id=4),
            License(project_id=5)
        ]
        db.session.add_all(licenses)
        db.session.commit()
        print("Licenses seeded!")

def seed_contracts():
    if is_table_empty(Contract):
        contracts = [
            Contract(project_id=1),
            Contract(project_id=2),
            Contract(project_id=3),
            Contract(project_id=4),
            Contract(project_id=5)
        ]
        db.session.add_all(contracts)
        db.session.commit()
        print("Contracts seeded!")



def seed_equipment_projects():
    equipment1 = Equipment.query.filter_by(camera_model="Canon EOS R5").first()
    project1 = Project.query.filter_by(name="Wedding Shoot").first()

    if equipment1 and project1:
        equipment1.associated_projects.append(project1)
        db.session.commit()
        print("Equipment-Project relationship seeded!")

def seed_equipment_projects():
    equipment1 = Equipment.query.filter_by(camera_model="Canon EOS R5").first()
    project1 = Project.query.filter_by(name="Wedding Shoot").first()

    if equipment1 and project1:
        equipment1.associated_projects.append(project1)
        db.session.commit()
        print("Equipment-Project relationship seeded!")

def seed_employee_projects():
    employee1 = Employee.query.filter_by(name="Alice").first()
    project1 = Project.query.filter_by(name="Wedding Shoot").first()

    if employee1 and project1:
        employee1.associated_projects.append(project1)
        db.session.commit()
        print("Employee-Project relationship seeded!")


if __name__ == "__main__":
    seed_customers()
    seed_employees()
    seed_equipment()
    seed_invoices()
    seed_projects()
    seed_feedbacks()
    seed_portfolios()
    seed_bookings()
    seed_licenses()
    seed_contracts()
    seed_equipment_projects()
    seed_employee_projects()
    print("Database seeding complete!")

