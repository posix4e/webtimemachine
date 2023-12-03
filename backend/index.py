from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return 'Server is running'

@app.route('/saveHistory', methods=['POST'])
def save_history():
    data = request.json
    print(data)
    return jsonify({"message": "Data received successfully"}), 200
