// add hovered class to selected list item
let list = document.querySelectorAll(".Navigation li");

function activeLink() { 
    list.forEach((item) => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggler
let toggles = document.querySelectorAll(".toggle");
let navigation = document.querySelector(".Navigation");
let main = document.querySelector(".main");

toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    });
});
