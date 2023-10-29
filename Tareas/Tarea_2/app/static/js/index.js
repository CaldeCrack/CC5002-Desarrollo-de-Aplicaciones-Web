const ok = () => {
    let opaqueDiv = document.getElementById("not-opaque");
    opaqueDiv.hidden = true;
}

let ok_btn = document.getElementById("ok");
ok_btn.addEventListener("click", ok);