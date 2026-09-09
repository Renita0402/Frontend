const box = document.getElementById("box")
const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    box.classList.add("active");
    box.textContent = "This is active";
});