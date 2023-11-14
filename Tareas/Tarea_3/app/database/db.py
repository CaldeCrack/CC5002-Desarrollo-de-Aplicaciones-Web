import pymysql

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

# --- GENERICS ---
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

# --- ARTESANOS ---
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
	cursor.execute("SELECT R.nombre FROM artesano A, comuna C, region R WHERE A.id=%s AND A.comuna_id=C.id AND C.region_id=R.id;", (_id, ))
	region = cursor.fetchone()
	return region

def get_crafter_max_page():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT (COUNT(*)+4) DIV 5 FROM artesano;")
	amount = cursor.fetchone()
	return amount

def get_types_by_artesan_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT T.nombre FROM tipo_artesania T, artesano_tipo A WHERE A.tipo_artesania_id=T.id AND A.artesano_id=%s;", (_id,))
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
	for type in types:
		cursor.execute("SELECT id FROM tipo_artesania WHERE nombre=%s;", (type))
		type_id = cursor.fetchone()
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

# --- HINCHAS ---
def get_hinchas_count():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT COUNT(*) FROM hincha")
	count = cursor.fetchall()
	return count

def get_hinchas(page, page_size):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT * FROM hincha ORDER BY id DESC LIMIT %s, %s;", ((int(page) - 1) * 5, page_size,))
	hinchas = cursor.fetchall()
	return hinchas

def get_hincha_by_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT comuna.nombre, modo_transporte, hincha.nombre, email, celular, comentarios FROM hincha, comuna WHERE hincha.comuna_id=comuna.id AND hincha.id=%s;", (_id, ))
	hincha = cursor.fetchone()
	return hincha

def get_region_by_hincha_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT R.nombre FROM hincha H, comuna C, region R WHERE H.id=%s AND H.comuna_id=C.id AND C.region_id=R.id;", (_id, ))
	region = cursor.fetchone()
	return region

def get_hincha_max_page():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT (COUNT(*)+4) DIV 5 FROM hincha;")
	amount = cursor.fetchone()
	return amount

def get_sports():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT nombre FROM deporte;")
	sports = cursor.fetchall()
	return sports

def get_sports_by_hincha_id(_id):
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT D.nombre FROM deporte D, hincha_deporte HD WHERE HD.deporte_id=D.id AND HD.hincha_id=%s;", (_id,))
	sports = cursor.fetchall()
	return sports

def create_hincha(commune_name, transport, name, email, phone, comments):
	conn = get_conn()
	cursor = conn.cursor()
	commune_id = get_commune_id_by_name(commune_name)
	cursor.execute("INSERT INTO hincha (comuna_id, modo_transporte, nombre, email, celular, comentarios) VALUES (%s, %s, %s, %s, %s, %s);", (commune_id, transport, name, email, phone, comments))
	conn.commit()
	cursor.execute("SELECT LAST_INSERT_ID();")
	return cursor.fetchone()

def create_hincha_sports(id, sports):
	conn = get_conn()
	cursor = conn.cursor()
	for sport in sports:
		cursor.execute("SELECT id FROM deporte WHERE nombre=%s;", (sport))
		sport_id = cursor.fetchone()
		cursor.execute("INSERT INTO hincha_deporte (hincha_id, deporte_id) VALUES (%s, %s);", (id, sport_id))
	conn.commit()

def register_fan(form):
	name = form.get("name")
	email = form.get("email")
	phone = form.get("phone")
	comments = form.get("comments")
	transport = form.get("transport")
	sports = form.getlist("sport")
	commune = form.get("commune")
	hincha_id = create_hincha(commune, transport, name, email, phone, comments)
	create_hincha_sports(hincha_id, sports)

# --- STATS ---
def get_crafters_stats():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT T.nombre, COUNT(*) AS cantidad FROM artesano_tipo A, tipo_artesania T WHERE A.tipo_artesania_id = T.id GROUP BY tipo_artesania_id;")
	stats = cursor.fetchall()
	return stats

def get_fans_stats():
	conn = get_conn()
	cursor = conn.cursor()
	cursor.execute("SELECT D.nombre, COUNT(*) AS cantidad FROM hincha_deporte H, deporte D WHERE H.deporte_id = D.id GROUP BY D.id;")
	stats = cursor.fetchall()
	return stats