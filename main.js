
let vaisiai = document.querySelector(".vaisiai");
let darzoves = document.querySelector(".darzove");

let buttonDarzoves = document.querySelector("#darzoves");
buttonDarzoves.addEventListener("click", function () {
    vaisiai.classList.add("d-none");
})

let buttonVaisiai = document.querySelector("#vaisiai");
buttonVaisiai.addEventListener("click", function () {
    darzoves.classList.add("d-none");

})

let buttonVisi = document.querySelector("#visi");
buttonVisi.addEventListener("click", function () {
    vaisiai.classList.remove("d-none");
    darzoves.classList.remove("d-none");
    })



