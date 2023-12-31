import pymysql

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset=DB_CHARSET
	)
	return conn

def get_artesanos_count():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT COUNT(*) FROM artesano")
	count = cursor.fetchall()
	return count

def get_artesanos(page, page_size):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT * FROM artesano ORDER BY id DESC LIMIT %s, %s;", ((int(page) - 1) * 5, page_size,))
	artesanos = cursor.fetchall()
	return artesanos

def get_artesano_by_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT artesano.id, comuna.nombre, descripcion_artesania, artesano.nombre, email, celular FROM artesano, comuna WHERE artesano.comuna_id=comuna.id AND artesano.id=%s;", (_id, ))
	artesano = cursor.fetchone()
	return artesano

def get_region_by_artesano_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT RE.nombre FROM artesano AT, comuna CO, region RE WHERE AT.id=%s AND AT.comuna_id=CO.id AND CO.region_id=RE.id;", (_id, ))
	region = cursor.fetchone()
	return region

def get_max_page():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT (COUNT(*)+4) DIV 5 FROM artesano;")
	amount = cursor.fetchone()
	return amount

def get_regions():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT * FROM region;")
	regions = cursor.fetchall()
	return regions

def get_communes_per_region(region_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT nombre FROM comuna WHERE region_id=%s;", (region_id,))
	communes = cursor.fetchall()
	return communes

def get_commune_id_by_name(name):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT id FROM comuna WHERE nombre=%s;", (name,))
	commune_id = cursor.fetchone()
	return commune_id

def get_commune_by_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT nombre FROM comuna WHERE id=%s;", (_id,))
	commune = cursor.fetchone()
	return commune

def get_types(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT TA.nombre FROM tipo_artesania TA, artesano_tipo AT WHERE AT.tipo_artesania_id=TA.id AND AT.artesano_id=%s;", (_id,))
	types = cursor.fetchall()
	return types

def get_imgs(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT ruta_archivo, nombre_archivo FROM foto WHERE artesano_id=%s;", (_id,))
	imgs = cursor.fetchall()
	return imgs

def get_imgs_path(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT ruta_archivo FROM foto WHERE artesano_id=%s;", (_id,))
	paths = cursor.fetchall()
	return paths

def create_artesano(commune_name, desc, name, email, phone):
	conn = get_conn()
	cursor = conn.cursor()
	commune_id = get_commune_id_by_name(commune_name)
	cursor.execute("INSERT INTO artesano (comuna_id, descripcion_artesania, nombre, email, celular) VALUES (%s, %s, %s, %s, %s);", (commune_id, desc, name, email, phone))
	conn.commit()
	cursor.execute("SELECT LAST_INSERT_ID();")
	return cursor.fetchone()

def create_artesano_tipo(id, types):
	conn = get_conn()
	cursor = conn.cursor()
	types_ids = []
	for type in types:
		cursor.execute("SELECT id FROM tipo_artesania WHERE nombre=%s;", (type))
		types_ids += cursor.fetchone()
	for type_id in types_ids:
		cursor.execute("INSERT INTO artesano_tipo (artesano_id, tipo_artesania_id) VALUES (%s, %s);", (id, type_id))
	conn.commit()

def create_imgs(imgs, id):
	conn = get_conn()
	cursor = conn.cursor()
	for img in imgs:
		cursor.execute("INSERT INTO foto (ruta_archivo, nombre_archivo, artesano_id) VALUES (%s, %s, %s);", (img[0], img[1], id))
	conn.commit()

def register_crafter(form, imgs):
	name = form.get("name")
	email = form.get("email")
	phone = form.get("phone")
	crafts = form.getlist("craft")
	commune = form.get("commune")
	desc = form.get("desc")
	artesano_id = create_artesano(commune, desc, name, email, phone)
	create_artesano_tipo(artesano_id, crafts)
	create_imgs(imgs, artesano_id)