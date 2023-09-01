let artesanos = {
    "artesano1": {
        "region": "RM - Región Metropolitana",
        "commune": "Lo Espejo",
        "craft-type": ["Otro tipo"],
        "craft-desc": "bomnito",
        "craft-images": ["/img/bocchi120.jpg"],
        "name": "Andrés Calderón",
        "email": "andres.calderon@ug.uchile.cl",
        "phone": ""
    },
    "artesano2": {
        "region": "II - Antofagasta",
        "commune": "Antofagasta",
        "craft-type": ["Metal"],
        "craft-desc": "bot",
        "craft-images": [""],
        "name": "Raimundo Alarcón",
        "email": "raimundo.alarcon@gmail.com",
        "phone": "+56902749103"
    },
    "artesano3": {
        "region": "XVI - Ñuble",
        "commune": "Pinto",
        "craft-type": ["Otro tipo"],
        "craft-desc": "",
        "craft-images": [],
        "name": "Alicia Quinteros",
        "email": "alicia.quinteros@gmail.com",
        "phone": ""
    },
    "artesano4": {
        "region": "IV - Coquimbo",
        "commune": "La Serena",
        "craft-type": ["Telas"],
        "craft-desc": "pandita rojo dcc",
        "craft-images": [],
        "name": "Eduardo Ramírez",
        "email": "eduardo@ramirez@gmail.com",
        "phone": "+56903728405"
    },
    "artesano5": {
        "region": "RM - Región Metropolitana",
        "commune": "Estación Central",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "Felipe González",
        "email": "felipe.gonzalez@gmail.com",
        "phone": "+56951648923"
    }
}
let data = ["name", "phone", "commune", "craft-type", "craft-images"];

const artesanoInfo = (input, attribute) => {
    let td = document.createElement("td");
    if (input == "")
        td.innerText = "---";
    else if (attribute == "craft-images") {
        let image = document.createElement("img");
        image.src = input[0].substr(1);
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