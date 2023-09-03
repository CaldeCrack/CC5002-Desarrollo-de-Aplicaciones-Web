let artesanos = {
    "artesano1": {
        "region": "RM - Región Metropolitana",
        "commune": "Lo Espejo",
        "craft-type": ["Otro tipo"],
        "craft-desc": "bomnito",
        "craft-image": "/img/buho.jpg",
        "name": "Andrés Calderón",
        "email": "andres.calderon@ug.uchile.cl",
        "phone": ""
    },
    "artesano2": {
        "region": "II - Antofagasta",
        "commune": "Antofagasta",
        "craft-type": ["Metal"],
        "craft-desc": "bot",
        "craft-image": "/img/bot.png",
        "name": "Benjamín Lorca",
        "email": "benjamin.lorca@gmail.com",
        "phone": "+56902749103"
    },
    "artesano3": {
        "region": "XVI - Ñuble",
        "commune": "Pinto",
        "craft-type": ["Otro tipo"],
        "craft-desc": "Travelception el mejor videojuego creado disponible en itch.io",
        "craft-image": "/img/videojuego.png",
        "name": "Elías Quinteros",
        "email": "elias.quinteros@gmail.com",
        "phone": ""
    },
    "artesano4": {
        "region": "IV - Coquimbo",
        "commune": "La Serena",
        "craft-type": ["Telas", "Cerámica"],
        "craft-desc": "pandita rojo dcc",
        "craft-image": "/img/panda_rojo.jpg",
        "name": "Eduardo Ramírez",
        "email": "eduardo@ramirez@gmail.com",
        "phone": "+56903728405"
    },
    "artesano5": {
        "region": "X - Los Lagos",
        "commune": "Puerto Montt",
        "craft-type": ["Telas", "Mimbre"],
        "craft-desc": "",
        "craft-image": "/img/calcetas.jpg",
        "name": "Valentina Alarcón",
        "email": "valentina.alarcon@gmail.com",
        "phone": "+56951648923"
    }
}
let data = ["name", "phone", "commune", "craft-type", "craft-image"];

const artesanoInfo = (input, attribute) => {
    let td = document.createElement("td");
    if (input == "")
        td.innerText = "---";
    else if (attribute == "craft-image") {
        let image = document.createElement("img");
        image.src = input.substr(1);
        image.alt = input.substr(5);
        td.append(image);
    }
    else
        td.innerText = input;
    return td;
};

const goTo = () => {
    window.location = "informacion-artesano.html";
}

// Create table
let table = document.getElementById("artesanos");
const keys = Object.keys(artesanos);
keys.forEach((key, index) => {
    let tr = document.createElement("tr");
    for (const attribute of data)
        tr.append(artesanoInfo(artesanos[key][attribute], attribute));
    table.append(tr);
});

table.onclick = () => window.location = "informacion-artesano.html";