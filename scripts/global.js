document.querySelector(".close-window").addEventListener("click", function() {
    console.log("Close window button clicked");
    document.querySelector(".window").classList.remove("open");
});
document.querySelector(".open-window").addEventListener("click", abrirVentana);
function abrirVentana() {
    document.querySelector(".window").classList.add("open");
}