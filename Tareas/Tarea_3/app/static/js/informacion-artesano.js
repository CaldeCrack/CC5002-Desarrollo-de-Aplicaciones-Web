let img1 = document.getElementById("1")
let img2 = document.getElementById("2")
let img3 = document.getElementById("3")

if (img1) img1.onclick = () => {
    if (img1.className == "default") img1.className = "scaled";
    else img1.className = "default"
}

if (img2) img2.onclick = () => {
    if (img2.className == "default") img2.className = "scaled";
    else img2.className = "default"
}

if (img3) img3.onclick = () => {
    if (img3.className == "default") img3.className = "scaled";
    else img3.className = "default"
}