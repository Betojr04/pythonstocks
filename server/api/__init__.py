from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object('api.config.Config')
    
    app.config['JWT_SECRET_KEY'] = 'your_secret_key'
    
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)
    jwt.init_app(app)
    
    from . import routes
    app.register_blueprint(routes.api)
    
    
    return app