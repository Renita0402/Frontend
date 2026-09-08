const para = document.getElementById("para");
const button = document.getElementById("toggleBtn");

let isVisible = true;

button.addEventListener("click", () => {

    isVisible = !isVisible;

    if (isVisible) {
        para.style.display = "block";
        button.textContent = "Hide";
    } else {
        para.style.display = "none";
        button.textContent = "Show";
    }

});

