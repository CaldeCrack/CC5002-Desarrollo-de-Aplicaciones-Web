let artesanos = {
    "artesano1": {
        "region": "",
        "commune": "",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "",
        "email": "",
        "phone": ""
    },
    "artesano2": {
        "region": "",
        "commune": "",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "",
        "email": "",
        "phone": ""
    },
    "artesano3": {
        "region": "",
        "commune": "",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "",
        "email": "",
        "phone": ""
    },
    "artesano4": {
        "region": "",
        "commune": "",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "",
        "email": "",
        "phone": ""
    },
    "artesano5": {
        "region": "",
        "commune": "",
        "craft-type": [],
        "craft-desc": "",
        "craft-images": [],
        "name": "",
        "email": "",
        "phone": ""
    }
}

let data = ["name", "phone", "commune", "craft-type", "craft-images"];

// Create table
let table = document.getElementById("artesanos");
const keys = Object.keys(artesanos);
keys.forEach((key, index) => {
    let tr = document.createElement("tr");
    for (const attribute of data) {
        let td = document.createElement("td");
        td.innerText = artesanos[key][attribute];
        tr.append(td);
    }
    table.append(tr);
});
