const btns = document.querySelectorAll("buton");

for (btn of btns) {
    btn.addEventListener("click", () => {
        console.log("button was clicked")
    })
}