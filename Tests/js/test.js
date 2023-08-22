// se buscan los elementos necesarios
let addBtn = document.getElementById("btn-suma");
let subBtn = document.getElementById("btn-resta");
let cnt = document.getElementById("contador");

let n = 0; // contador

const suma = () => {
    n++;
    cnt.innerText = n;
};

const resta = () => {
    n--;
    cnt.innerText = n;
};
// asignar respectivamente la funciones al evento "click"
addBtn.addEventListener("click", suma)
subBtn.addEventListener("click", resta)