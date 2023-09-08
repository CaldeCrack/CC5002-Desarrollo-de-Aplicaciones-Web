import {regions} from "./data.js";

const defaultOption = (text) => {
    let option = document.createElement("option");
    option.setAttribute("value", "default");
    option.setAttribute("selected", "selected");
    option.disabled = true;
    option.hidden = true;
    option.innerText = text;
    return option;
}

const updateCommunes = () => {
    let selectedRegion = document.getElementById("region").value;
    let communeList = document.getElementById("commune");
    communeList.innerText = "";
    communeList.append(defaultOption("Elija una comuna"));
    for (const commune of regions[selectedRegion]) {
        let listOption = document.createElement("option");
        listOption.setAttribute("name", commune);
        listOption.setAttribute("value", commune);
        listOption.setAttribute("id", commune);
        listOption.innerText = commune;

        communeList.append(listOption);
        communeList.innerHTML += "<br>";
    }
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
    const craftsAmount = crafts.length;
    if(craftsAmount < 1 || 3 < craftsAmount) return false;
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
    if(!phone) return true;
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
    let craftTypes = document.querySelectorAll('input[name=craft]:checked');
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
    let submitConfirmation = document.getElementById("submit");
    if(!isValid) {
        submitConfirmation.hidden = true;
        validationList.innerText = "";

        for (const input of invalidInputs) {
            let listElement = document.createElement("li");
            listElement.innerText = input;
            validationList.append(listElement);
        }

        validationBox.hidden = false;
    } else {
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

let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", validateForm);

// Confirmation window
let confirm_btn = document.getElementById("confirm");
let deny_btn = document.getElementById("deny");

confirm_btn.addEventListener("click", showConfirm);
deny_btn.addEventListener("click", showDeny);