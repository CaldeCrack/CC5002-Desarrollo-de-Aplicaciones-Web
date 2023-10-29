let hinchas = {
    "hincha1": {
        "sports": ["Fútbol", "Vóleibol"],
        "region": "RM - Región Metropolitana",
        "commune": "Colina",
        "transport": "Locomoción pública",
        "name": "Luciano Marquez",
        "email": "luciano.marquez@gmail.com",
        "phone": "+56958390102",
        "comments": ""
    },
    "hincha2": {
        "sports": ["Esgrima", "Tiro"],
        "region": "RM - Región Metropolitana",
        "commune": "Ñuñoa",
        "transport": "Locomoción pública",
        "name": "Antonia Gutierrez",
        "email": "antonia.gutierrez@gmail.com",
        "phone": "+56973839402",
        "comments": ""
    },
    "hincha3": {
        "sports": ["BMX Racing", "Tenis de mesa"],
        "region": "RM - Región Metropolitana",
        "commune": "Maipú",
        "transport": "Locomoción pública",
        "name": "Juan Valdivia",
        "email": "juan.valdivia@gmail.com",
        "phone": "---",
        "comments": "chunchometalero"
    },
    "hincha4": {
        "sports": ["Tenis", "Vóleibol"],
        "region": "RM - Región Metropolitana",
        "commune": "Peñalolen",
        "transport": "Particular",
        "name": "Martín Bahamonde",
        "email": "martin.bahamonde@gmail.com",
        "phone": "+56983018302",
        "comments": ""
    },
    "hincha5": {
        "sports": ["Básquetbol", "Vóleibol"],
        "region": "RM - Región Metropolitana",
        "commune": "Las Condes",
        "transport": "Locomoción pública",
        "name": "Nicolás Inostroza",
        "email": "nicolas.inostroza@gmail.com",
        "phone": "",
        "comments": ""
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

table.onclick = () => window.location = "informacion-hincha";