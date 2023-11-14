import re, filetype, database.db as db

def validate_name(value):
    return 3 <= len(value) <= 80 and value.strip()

def validate_email(value):
    return bool(re.search("([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+", value)) and (5 <= len(value) <= 30)

def validate_phone(value):
    return (bool(re.search("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$", value))
            and (4 <= len(value) <= 15)) or value == ""

def validate_desc(value):
    return 0 <= len(value) <= 300

def validate_types(value):
    return 1 <= len(value) <= 3

def validate_region(value):
    regions = db.get_regions()
    for region in regions:
        if region[1] == value:
            return True
    return False

def validate_commune(reg, value):
    regions = db.get_regions()
    region_id = 0
    for region in regions:
        if region[1] == reg:
            region_id = region[0]
    communes = db.get_communes_per_region(region_id)
    for commune in communes:
        if commune[0] == value:
            return True
    return False

def validate_comment(value):
    return len(value) <= 80

def validate_transport(value):
    return value == 'particular' or value == 'locomoción pública'

def validate_sports(value):
    return 1 <= len(value) <= 3

def validate_imgs(imgs):
    valid_imgs = True

    for img in imgs:
        ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
        ALLOWED_MIMETYPES = {"image/png", "image/jpeg", "image/gif"}

        if img is None:
            return False

        if img.filename == "":
            return False

        ftype_guess = filetype.guess(img)
        valid_imgs = valid_imgs and (ftype_guess.extension in ALLOWED_EXTENSIONS and ftype_guess.mime in ALLOWED_MIMETYPES)
    return valid_imgs

def validate_crafter_form(form, imgs):
    errors = []
    if not validate_name(form.get("name")):
        errors.append("Nombre")
    if not validate_email(form.get("email")):
        errors.append("Email")
    if not validate_phone(form.get("phone")):
        errors.append("Número de teléfono")
    if not validate_desc(form.get("desc")):
        errors.append("Descripción de las artesanías")
    if not validate_types(form.getlist("craft")):
        errors.append("Tipos de artesanías")
    if not validate_region(form.get("region")):
        errors.append("Región")
    if not validate_commune(form.get("region"), form.get("commune")):
        errors.append("Comuna")
    if not validate_imgs(imgs):
        errors.append("Imágenes de las artesanías")
    return errors

def validate_fan_form(form):
    errors = []
    if not validate_name(form.get("name")):
        errors.append("Nombre")
    if not validate_email(form.get("email")):
        errors.append("Email")
    if not validate_phone(form.get("phone")):
        errors.append("Número de teléfono")
    if not validate_comment(form.get("comments")):
        errors.apend("Comentarios adicionales")
    if not validate_transport(form.get("transport")):
        errors.append("Modo de transporte")
    if not validate_sports(form.getlist("sport")):
        errors.append("Deportes")
    if not validate_region(form.get("region")):
        errors.append("Región")
    if not validate_commune(form.get("region"), form.get("commune")):
        errors.append("Comuna")
    return errors