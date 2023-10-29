from flask import Flask, request, render_template, redirect, url_for
from utils.validations import validate_form
from werkzeug.utils import secure_filename
from database.db import register_crafter
import hashlib, filetype, os, uuid, database.db as db

UPLOAD_FOLDER = "static/uploads"

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

# Default route
@app.route("/")
def index():
    show = request.args.get("show")
    return render_template("index.html", show=show)

# Transitions
@app.route("/agregar-hincha")
def agregar_hincha():
    return render_template("agregar-hincha.html")

@app.route("/agregar-artesanos")
def agregar_artesano():
    return render_template("agregar-artesano.html")

@app.route("/ver-hinchas")
def ver_hinchas():
    return render_template("ver-hinchas.html")

# Artesanos
@app.route("/registrar-artesano", methods=["GET"])
def registrar_artesano():
    errors = request.args.getlist("errors")
    return render_template("agregar-artesano.html", errors=errors)

@app.route("/informacion-hincha")
def informacion_hincha():
    return render_template("informacion-hincha.html")

@app.route("/registrar-artesano/errors", methods=["POST"])
def show_errors():
    # Request form
    artesano_form = request.form
    artesano_imgs = request.files.getlist("images")

    # Validations
    errors = validate_form(artesano_form, artesano_imgs)
    if errors == []:
        imgs = []
        # Encrypt imgs filename
        for img in artesano_imgs:
            _filename = hashlib.sha256(
                secure_filename(img.filename).encode("UTF-8")
            ).hexdigest()
            _extension = filetype.guess(img).extension
            img_filename = f"{_filename}_{str(uuid.uuid4())}.{_extension}"
            img_path = os.path.join(app.config["UPLOAD_FOLDER"], img_filename).replace("\\", "/")
            img.save(img_path)
            imgs.append((app.config["UPLOAD_FOLDER"], img_filename))
        register_crafter(artesano_form, imgs)
        return redirect(url_for("index", show=True))
    return redirect(url_for("registrar_artesano", errors=errors))

@app.route("/ver-artesanos", methods=["GET", "POST"])
def ver_artesanos():
    if request.method == "GET":
        page = request.args.get("page")
        pagina = request.args.get("pagina")
        # Special cases
        if (int(db.get_artesanos_count()[0][0])) == 0:
            return render_template("ver-artesanos.html", page=1, max_page=1)
        if not page:
            page = 1
        if pagina:
            page = pagina
        page = int(page)

        # Cycle through data
        if page > db.get_max_page()[0]:
            return redirect(url_for("ver_artesanos", page=1))
        elif page <= 0:
            return redirect(url_for("ver_artesanos", page=db.get_max_page()))

        # Format data
        data = []
        for artesano in db.get_artesanos(page, page_size=5):
            _id, commune_id, _, name, _, phone = artesano
            commune = db.get_commune_by_id(commune_id)
            types = db.get_types(_id)
            img_path = db.get_imgs(_id)

            data.append({
                "id": _id,
                "name": name,
                "phone": phone,
                "commune": commune[0],
                "crafts": types,
                "photo": img_path[0][0] + "/" + img_path[0][1]
            })
        return render_template("ver-artesanos.html", data=data, page=page, max_page=db.get_max_page()[0])

    # Update current page
    elif request.method == "POST":
        show_page = request.form
        page = show_page.get("page")
        if not page:
            page = 1
        page = int(page)
        if show_page.get("next"):
            page += 1
        elif show_page.get("prev"):
            page -= 1
        return redirect(url_for("ver_artesanos", page=page))

@app.route("/informacion-artesano", methods=["GET", "POST"])
def informacion_artesano():
    if request.method == "GET":
        # Format data
        artesano_id = request.args.get("artesano_id")
        pagina = request.args.get("pagina")
        artesano = db.get_artesano_by_id(artesano_id)
        region = db.get_region_by_artesano_id(artesano_id)
        types = db.get_types(artesano_id)
        imgs = db.get_imgs(artesano_id)
        data = {
            "region": region[0],
            "commune": artesano[1],
            "types": types,
            "desc": artesano[2],
            "imgs": imgs,
            "name": artesano[3],
            "email": artesano[4],
            "phone": artesano[5]
        }
        return render_template("informacion-artesano.html", data=data, pagina=pagina)

    elif request.method == "POST":
        artesano_id = request.form.get("artesano-info")
        pagina = request.form.get("pagina")
        return redirect(url_for("informacion_artesano", artesano_id=artesano_id, pagina=pagina))

if __name__ == "__main__":
    app.run(debug=True)