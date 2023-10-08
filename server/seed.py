# seed.py

from app import app, db
from models import Customer, Employee, Equipment, Invoice


app.app_context().push()

def seed_customers():
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

if __name__ == "__main__":
    seed_customers()
    seed_employees()
    seed_equipment()
    seed_invoices()
    print("Database seeding complete!")
