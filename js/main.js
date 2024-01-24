// add hovered class to selected list item
let list = document.querySelectorAll(".Navigation li");

function activeLink() { 
    list.forEach((item) => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

//Menu Toggler
let toggle = document.querySelectorAll(".toggle");
let Navigation = document.querySelectorAll(".Navigation");
let main = document.querySelectorAll(".main");

toggle.onclick = function() {
    Navigation.classList.toggle("active");
    main.classList.toggle("active");    
}