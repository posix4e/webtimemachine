from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/saveHistory', methods=['POST'])
def save_history():
    data = request.json
    print(data)

    return jsonify({"message": "Data received successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
