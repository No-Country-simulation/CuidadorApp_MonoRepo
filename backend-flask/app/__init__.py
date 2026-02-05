from flask import Flask
from config import Config
from app.extensions import db, migrate, cors


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Conectar extensiones a la app
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)

    # Registrar rutas (blueprints)
    # Los iremos agregando a medida que los creemos

    return app
