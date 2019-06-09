from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return jsonify({
        'a':"b",
        'c':"d"
    })