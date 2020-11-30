from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from resources.todo import Todo

app = Flask(__name__)
api = Api(app)

CORS(app, origins="*", allow_headers="*", supports_credentials=True)

api.add_resource(Todo, '/')

if __name__ == '__main__':
    app.run(debug=True, port=5002)