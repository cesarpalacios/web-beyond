"""
Descripción modulo:

Crear una base de datos de nombre books y ejecutar los siguientes ddls:

CREATE TABLE author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author(id)
);

Una vez se hallan creado las tablas, ejecutar este script de python, en
el cual se disponbiliza una aplicacion basica de insercion y busqueda de autores y libros

"""

from flask import Flask, request, jsonify
import mysql.connector


app = Flask(__name__)
db = mysql.connector.connect(
    host="semillero.cpunrzcug1yw.us-east-2.rds.amazonaws.com",
    user="admin",
    password="Admin123",
    database="books",
    port=3308
)

cursor = db.cursor()


class Author:
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def to_dict(self):
        return {'id': self.id, 'name': self.name}


class Book:
    def __init__(self, id, title, author_id):
        self.id = id
        self.title = title
        self.author_id = author_id

    def to_dict(self):
        return {'id': self.id, 'title': self.title, 'author_id': self.author_id}


@app.route('/authors', methods=['GET', 'POST'])
def manage_authors():
    if request.method == 'GET':
        cursor.execute("SELECT * FROM author")
        authors = cursor.fetchall()
        author_list = [Author(author[0], author[1]).to_dict() for author in authors]
        return jsonify({'authors': author_list})
    elif request.method == 'POST':
        data = request.get_json()
        cursor.execute("INSERT INTO author (name) VALUES (%s)", (data['name'],))
        db.commit()
        return jsonify({'message': 'Author added successfully'})


@app.route('/get_books', methods=['GET'])
def get_books():
    cursor.execute("SELECT * FROM book")
    books = cursor.fetchall()
    book_list = [Book(book[0], book[1], book[2]).to_dict() for book in books]
    return jsonify({'books': book_list})


@app.route('/insert_books', methods=["POST"])
def insert_books():
    data = request.get_json()
    query = f"INSERT INTO book (title, author_id) VALUES ('{data['title']}', {data['author_id']})"
    cursor.execute(query)
    db.commit()
    return jsonify({'message': 'Book added successfully'})


if __name__ == '__main__':
    app.run(debug=True, port=5000)



