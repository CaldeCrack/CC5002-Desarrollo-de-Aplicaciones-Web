import {sports, regions} from "./data.js";

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
    let regionSelect = document.getElementById("region")
    regionSelect.classList.remove("onchange-region")
    let selectedRegion = regionSelect.value;
    let communeList = document.getElementById("commune");
    communeList.classList.add("onchange-commune");
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
    };
}

const validateSports = (sports) => {
    const sportsAmount = sports.length;
    if(sportsAmount < 1 || 3 < sportsAmount) return false;
    return true;
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

const validateTransport = (transport) => {
    if(transport == "default") return false;
    return true;
}

const validateName = (name) => {
    const nameLength = name.length;
    return 3 <= nameLength <= 80 && name.trim();
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
    let contentOpaque = document.getElementById("not-opaque");
    let submitConfirmation = document.getElementById("submit");
    contentOpaque.hidden = true;
    submitConfirmation.hidden = true;
}

const validateForm = () => {
    // elements from the form
    let myForm = document.forms["myForm"];
    let sports = document.querySelectorAll('input[name=sport]:checked');
    let region = myForm["region"].value;
    let commune = myForm["commune"].value;
    let transport = myForm["transport"].value;
    let name = myForm["name"].value;
    let email = myForm["email"].value;
    let phone = myForm["phone"].value;

    // validate form
    let invalidInputs = [];
    let isValid = true;
    const setInvalidInput = (inputName) => {
        invalidInputs.push(inputName);
        isValid = false;
    }

    // validate each component of the form
    if(!validateSports(sports)) setInvalidInput("Deporte(s)");
    if(!validateRegion(region)) setInvalidInput("Región");
    if(!validateCommune(region, commune)) setInvalidInput("Comuna");
    if(!validateTransport(transport)) setInvalidInput("Transporte");
    if(!validateName(name)) setInvalidInput("Nombre");
    if(!validateEmail(email)) setInvalidInput("Email");
    if(!validatePhone(phone)) setInvalidInput("Número de celular");

    // Validation display
    let validationBox = document.getElementById("val-box");
    let validationList = document.getElementById("val-list");
    let submitConfirmation = document.getElementById("submit");
    let contentOpaque = document.getElementById("not-opaque");
    if(!isValid) {
        submitConfirmation.hidden = true;
        validationList.innerText = "";

        for (const input of invalidInputs) {
            let listElement = document.createElement("li");
            listElement.innerText = input;
            validationList.append(listElement);
        }

        validationBox.hidden = false;
        window.scrollTo(0, 0);
    } else {
        contentOpaque.hidden = false;
        submitConfirmation.hidden = false;
        validationBox.hidden = true;
    }
}

// Sports selection list
let sportsList = document.getElementById("sports");
for (const sport of sports) {
    let listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    listCheckbox.setAttribute("name", "sport");
    listCheckbox.setAttribute("value", sport);
    listCheckbox.setAttribute("id", sport);

    let listLabel = document.createElement("label");
    listLabel.setAttribute("for", sport);
    listLabel.innerText = sport;

    sportsList.append(listCheckbox);
    sportsList.append(listLabel);
    sportsList.innerHTML += "<br>";
};

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
let communeSelect = document.getElementById("commune");
communeSelect.onchange = () => {communeSelect.classList.remove("onchange-commune")};

let transportSelect = document.getElementById("transport");
transportSelect.onchange = () => {transportSelect.classList.remove("onchange-transport")};

let submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", validateForm);

// Confirmation window
let confirm_btn = document.getElementById("confirm");
let deny_btn = document.getElementById("deny");

confirm_btn.addEventListener("click", showConfirm);
deny_btn.addEventListener("click", showDeny);