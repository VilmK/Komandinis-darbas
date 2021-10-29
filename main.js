
let buttonDarzoves = document.querySelector("#darzoves");
buttonDarzoves.addEventListener("click", function () {
    let vais = document.querySelector(".vaisiai");
    vais.classList.add("d-none");
})

let buttonVaisiai = document.querySelector("#vaisiai");
buttonVaisiai.addEventListener("click", function () {
    let darz = document.querySelector(".darzove");
    darz.classList.add("d-none");
})

let buttonVisi = document.querySelector("#visi");
buttonVisi.addEventListener("click", function () {
    let darz = document.querySelector(".darzove");
    let vais = document.querySelector(".vaisiai");
    vais.classList.remove("d-none");
    darz.classList.remove("d-none");
})



