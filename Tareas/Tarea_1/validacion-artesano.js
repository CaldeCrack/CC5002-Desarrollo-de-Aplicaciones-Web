let sports = ["Clavados", "Natación", "Natación artística", "Polo acuático", "Natación en aguas abiertas", "Maratón", "Marcha", "Atletismo", "Bádminton", "Balonmano", "Básquetbol", "Básquetbol 3x3", "Béisbol", "Boxeo", "Bowling", "Breaking", "Canotaje Slalom", "Canotaje de velocidad", "BMX Freestyle", "BMX Racing", "Mountain Bike", "Ciclismo pista", "Ciclismo ruta", "Adiestramientro ecuestre", "Evento completo ecuestre", "Salto ecuestre", "Escalada deportiva", "Esgrima", "Esquí acuático y Wakeboard", "Fútbol", "Gimnasia artística Masculina", "Gimnasia artística Femenina", "Gimnasia rítmica", "Gimnasia trampolín", "Golf", "Hockey césped", "Judo", "Karate", "Levantamiento de pesas", "Lucha", "Patinaje artístico", "Skateboarding", "Patinaje velocidad", "Pelota vasca", "Pentatlón moderno", "Racquetball", "Remo", "Rugby 7", "Sóftbol", "Squash", "Surf", "Taekwondo", "Tenis", "Tenis de mesa", "Tiro", "Tiro con arco", "Triatlón", "Vela", "Vóleibol", "Vóleibol playa"];
let regions = {
    "XV - Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
    "I - Tarapacá": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
    "II - Antofagasta": ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
    "III - Atacama": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
    "IV - Coquimbo": ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"],
    "V - Valparaíso": ["Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíspo", "Villa Alemana", "Viña del Mar", "Zapallar"],
    "RM - Metropolitana": ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "Lampa", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macúl", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Tiltil", "Vitacura"],
    "VI - Libertador General Bernardo O'Higgins": ["Chépica", "Chimbarongo", "Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchihue", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "Santa Cruz", "San Vicente"],
    "VII - Maule": ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"],
    "XVI - Ñuble": ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "VIII - Biobío": ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Alamos", "Los Angeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"],
    "IX - La Araucanía": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"],
    "XIV - Los Ríos": ["Corral", "Futrono", "Lago Ranco", "Lanco", "La Unión", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"],
    "X - Los Lagos": ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"],
    "XI - Aysen del General Carlos Ibáñez del Campo": ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"],
    "XII - Magallanes y de la Antártica Chilena": ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
};

const defaultOption = (text) => {
    let option = document.createElement("option");
    option.setAttribute("value", "default");
    option.setAttribute("selected", "selected");
    option.setAttribute("disabled", "disabled");
    option.setAttribute("hidden", "hidden");
    option.innerText = text;
    return option;
}

const updateCommunes = () => {
    let selectedRegion = document.getElementById("region").value;
    let communeList = document.getElementById("commune");
    communeList.innerText = "";
    communeList.append(defaultOption("Elija una comuna"));
    for (commune of regions[selectedRegion]) {
        let listOption = document.createElement("option");
        listOption.setAttribute("name", commune);
        listOption.setAttribute("value", commune);
        listOption.setAttribute("id", commune);
        listOption.innerText = commune;

        communeList.append(listOption);
        communeList.innerHTML += "<br>";
    };
}

const validateRegion = (region) => {
    if(region == "default") return false;
    return true;
}

const validateCommune = (region, commune) => {
    if(commune == "default") return false;
    if(!regions[region].includes(commune)) return false;
    return true;
}

const validateCraftTypes = (crafts) => {
    if(crafts == "default") return false;
    return true;
}

const validateCraftImages = (files) => {
    if(!files) return false;

    let lengthValid = 1 <= files.length && files.length <= 3;

    let typeValid = true;
    for (const file of files) {
        let fileFamily = file.type.split("/")[0];
        typeValid &&= fileFamily == "image" || file.type == "application/pdf"
    }

    return lengthValid && typeValid;
}

const validateName = (name) => {
    const nameLength = name.length;
    if(nameLength < 3 || 80 < nameLength) return false;
    return true;
}

const validateEmail = (email) => {
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

const validatePhone = (phone) => {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}

const showConfirm = () => {
    let submitConfirmation = document.getElementById("submit");
    let confirmationMessage = document.getElementById("submitted");
    submitConfirmation.hidden = true;
    confirmationMessage.hidden = false;
}

const showDeny = () => {
    let submitConfirmation = document.getElementById("submit");
    submitConfirmation.hidden = true;
}

const validateForm = () => {
    // Elements from the form
    let myForm = document.forms["myForm"];
    let region = myForm["region"].value;
    let commune = myForm["commune"].value;
    let craftTypes = myForm["craft-type"].value;
    let craftImages = myForm["images"].files;
    let name = myForm["name"].value;
    let email = myForm["email"].value;
    let phone = myForm["phone"].value;

    // Validate form
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
        invalidInputs.push(inputName);
        isValid = false;
    }

    // Validate each component of the form
    if(!validateRegion(region)) setInvalidInput("Región");
    if(!validateCommune(region, commune)) setInvalidInput("Comuna");
    if(!validateCraftTypes(craftTypes)) setInvalidInput("Tipos de artesanías");
    if(!validateCraftImages(craftImages)) setInvalidInput("Imágenes de las artesanías");
    if(!validateName(name)) setInvalidInput("Nombre");
    if(!validateEmail(email)) setInvalidInput("Email");
    if(!validatePhone(phone)) setInvalidInput("Número de celular");

    // Validation display
    let validationBox = document.getElementById("val-box");
    let validationList = document.getElementById("val-list");
    if(!isValid) {
        validationList.innerText = "";

        for (input of invalidInputs) {
            let listElement = document.createElement("li");
            listElement.innerText = input;
            validationList.append(listElement);
        }

        validationBox.hidden = false;
    } else {
        let submitConfirmation = document.getElementById("submit");
        submitConfirmation.hidden = false;
        validationBox.hidden = true;
    }
}

// Regions selection list
let regionList = document.getElementById("region");
const keys = Object.keys(regions);
keys.forEach((key, index) => {
    let listOption = document.createElement("option");
    listOption.setAttribute("name", key);
    listOption.setAttribute("value", key);
    listOption.setAttribute("id", key);
    listOption.innerText = key;

    regionList.append(listOption);
    regionList.innerHTML += "<br>";
});

regionList.onchange = updateCommunes;

submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", validateForm);

// Confirmation window
let confirm_btn = document.getElementById("confirm");
let deny_btn = document.getElementById("deny");

confirm_btn.addEventListener("click", showConfirm);
deny_btn.addEventListener("click", showDeny);