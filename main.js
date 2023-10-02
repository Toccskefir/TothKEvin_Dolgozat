import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./style.css";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("submit").addEventListener("click", changeImg);
    document.getElementById("mode").addEventListener("click", changeMode);
}

function changeImg() {
    let url = document.getElementById("urlInput").value;
    let imgWidth = document.getElementById("imgWidth").value;
    let frameSize = document.getElementById("frameSize").value;
    let frameColor = document.getElementById("frameColor").value;
    let img = document.getElementById("img");
    img.src = url;
    img.style.width = `${imgWidth}px`;
    img.style.borderWidth = `${frameSize}px`;
    img.style.borderColor = frameColor;
    img.style.borderStyle = "solid";
}

function changeMode() {
    document.body.classList.toggle("dark-mode");
}