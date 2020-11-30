from flask import request
from flask_restful import Resource

import json

FILE = '<insert file name with full path here>'

class Todo(Resource):
    def __init__(self):
        self.data = None

    def read_from_file(self):
        read_file = open(FILE, 'r')
        contents = read_file.read()
        read_file.close()
        return json.loads(contents) if len(contents) > 0 else []

    def write_to_file(self, json_data):
        write_file = open(FILE, 'w')
        write_file.write(json.dumps(json_data))
        write_file.close()

    def add_or_update(self, id, title, status):
        todos = self.read_from_file()
        updated = 0
        for todo in todos:
            if todo.get('id') == id:
                todo['completed'] = not todo['completed']
                updated = 1
                break
        if not updated:
            todos.append({'id': id, 'title': title, 'completed': status})
            self.write_to_file(todos)
        else:
            self.write_to_file(todos)
        return todos
    
    def remove_todo(self, id):
        todos = self.read_from_file()
        updated_todo = []
        for todo in todos:
            print(todo)
            if todo.get('id') != id:
                updated_todo.append(todo)
        self.write_to_file(updated_todo)
        return updated_todo

    def post(self):
        self.data = json.loads((request.data).decode("utf-8"))
        self.title = self.data.get('title')
        self.id = self.data.get('id')
        self.status = self.data.get('completed')
        self.remove = self.data.get('remove')
        if self.remove:
            todos = self.remove_todo(self.id)
        else:
            todos = self.add_or_update(self.id, self.title, self.status)
        print(todos)
        return todos

    def get(self):
        return self.read_from_file()