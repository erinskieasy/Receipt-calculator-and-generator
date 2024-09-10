from flask import Flask, render_template
from datetime import date

app = Flask(__name__)

@app.route("/")
def index():
    today = date.today().strftime("%m/%d/%Y")
    return render_template("index.html", today=today)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
