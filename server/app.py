from flask import Flask
import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 


load_dotenv()


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////root/phase-5-project/Joy-Production-web-site/server/db/mydatabase.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
print(app.config['SQLALCHEMY_DATABASE_URI'])


db = SQLAlchemy(app)  


migrate = Migrate(app, db)


from routes import *


@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
