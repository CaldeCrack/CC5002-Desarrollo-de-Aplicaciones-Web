let hinchas = {
    "hincha1": {
        "sports": ["Fútbol", "Boxeo"],
        "region": "XV - Arica y Parinacota",
        "commune": "Arica",
        "transport": "Particular",
        "name": "Antonia Gómez",
        "email": "antonia.gomez@gmail.com",
        "phone": "+56958390102",
        "comments": ""
    },
    "hincha2": {
        "sports": ["BMX Racing"],
        "region": "RM - Región Metropolitana",
        "commune": "La Pintana",
        "transport": "Locomoción pública",
        "name": "Alexander Perez",
        "email": "alexander.perez@gmail.com",
        "phone": "+56973839402",
        "comments": ""
    },
    "hincha3": {
        "sports": ["Clavados", "Natación", "Natación en aguas abiertas"],
        "region": "X - Los Lagos",
        "commune": "Puerto Montt",
        "transport": "Particular",
        "name": "Víctor García",
        "email": "victor.garcia@gmail.com",
        "phone": "+56983018302",
        "comments": "awa"
    },
    "hincha4": {
        "sports": ["Vela"],
        "region": "IX - La Araucanía",
        "commune": "Curacautín",
        "transport": "Particular",
        "name": "Pedro Pascal",
        "email": "pedro.pascal@gmail.com",
        "phone": "",
        "comments": ""
    },
    "hincha5": {
        "sports": ["Judo", "Karate", "Taekwondo"],
        "region": "V - Valparaíso",
        "commune": "El Quisco",
        "transport": "Locomoción pública",
        "name": "Delaney Cielo",
        "email": "delaney.cielo@gmail.com",
        "phone": "",
        "comments": "Baki"
    }
}
let data = ["name", "commune", "sports", "transport", "phone"];

const hinchaInfo = (input) => {
    let td = document.createElement("td");
    if (input == "")
        td.innerText = "---";
    else
        td.innerText = input;
    return td;
};

// Create table
let table = document.getElementById("hinchas");
const keys = Object.keys(hinchas);
keys.forEach((key, index) => {
    let tr = document.createElement("tr");
    for (const attribute of data) {
        tr.append(hinchaInfo(hinchas[key][attribute]));
    }
    table.append(tr);
});

table.onclick = () => window.location = "informacion-hincha.html";