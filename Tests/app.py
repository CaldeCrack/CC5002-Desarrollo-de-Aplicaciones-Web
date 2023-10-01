from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("ruta.html")

@app.route("/<num>", methods=["GET"])
def index_param(num):
    return render_template("ruta.html", num=int(num))

if __name__ == "__main__":
    app.run(debug=True)