let imgs_640 = ["img/buho_640.jpg", "img/cisne_640.jpg", "img/bocchi_640.jpg"];
let imgs_1280 = ["img/buho_1280.jpg", "img/cisne_1280.jpg", "img/bocchi_1280.jpg"];
let imgIn640 = {
    "buho": [true, 0],
    "cisne": [true, 1],
    "bocchi": [true, 2]
};

const changeImg = (elem) => {
    let imgId = elem.id;
    if (imgIn640[imgId][0]) {
        elem.src = imgs_1280[imgIn640[imgId][1]];
        elem.alt = imgs_1280[imgIn640[imgId][1]];
        imgIn640[imgId][0] = !imgIn640[imgId][0];
    } else {
        elem.src = imgs_640[imgIn640[imgId][1]];
        elem.alt = imgs_1280[imgIn640[imgId][1]];
        imgIn640[imgId][0] = !imgIn640[imgId][0];
    }
};

let buho = document.getElementById("buho");
let cisne = document.getElementById("cisne");
let bocchi = document.getElementById("bocchi");

buho.onclick = () => changeImg(buho);
cisne.onclick = () => changeImg(cisne);
bocchi.onclick = () => changeImg(bocchi);