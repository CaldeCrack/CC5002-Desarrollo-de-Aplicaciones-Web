let ar1 = document.getElementById("11");
let ar2 = document.getElementById("22");
let ar3 = document.getElementById("33");
let ar4 = document.getElementById("44");
let ar5 = document.getElementById("55");

let form1 = document.forms[0];
let form2 = document.forms[1];
let form3 = document.forms[2];
let form4 = document.forms[3];
let form5 = document.forms[4];

if (ar1) ar1.onclick = () => form1.submit();
if (ar2) ar2.onclick = () => form2.submit();
if (ar3) ar3.onclick = () => form3.submit();
if (ar4) ar4.onclick = () => form4.submit();
if (ar5) ar5.onclick = () => form5.submit();