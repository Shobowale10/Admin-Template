const navicon = document.querySelector("#menu i")
const menu = document.getElementById("menu");
const navBar = document.getElementById("owner-sidebar");

menu.addEventListener("click", () => {
    if (navBar.style.width == "300px") {
        navBar.style.width = "0px";
        navicon.classList.add("fa-sharp");
        navicon.classList.add("fa-bars");
        navicon.style.padding = "0";
        navicon.classList.remove("fa-xmark");
        navBar.style.animation = "slide-in 0.3s ease-in-out";

    } else {

        navBar.style.width = "300px";
        navicon.classList.remove("fa-sharp");
        navicon.classList.remove("fa-bars");
        navicon.classList.add("fa-xmark");
        navicon.style.padding = "0 4px";
        navBar.style.animation = "slide-out 0.3s ease-in-out";
    }
})


// COPY LINK && SHOW COPY TOOLTIP
var copy_buttons = document.getElementsByClassName("copy-post-link");

for (i = 0; copy_buttons.length > i; i++) {
    copy_buttons[i].addEventListener("click", function (e) {
        var copy = e.target.getAttribute('data-id');
        var copy_link = document.getElementById(copy);
        
        var copy_id = copy.substring(4);
        var copy_tooltip = document.querySelector(".tooltip" + copy_id);

        copy_link.select();
        copy_link.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copy_link.value);

        copy_tooltip.style.display = "block";
        setTimeout(()=> {
            copy_tooltip.style.display = "none";
        }, 1000)
    })
}



// DISPLAY LOGOUT BUTTON
var log = document.getElementById("logout-button");
if (log) {
    log.addEventListener('click', () => {
        const out = document.getElementById("logout");
        out.style.display = "none" ? "block" : "none";
    })
}


// CLOSE LOGOUT BUTTON
function closeLogout() {
    var log = document.getElementById("logout");
    if(log.style.display === "block") {
        log.style.display="none";
    } else {
        log.style.display="block";
    }
}



// TOGGLE EYE VISIBILITY
function toogleEye() {
    var eye = document.getElementById("toogle-eye");
    var password = document.getElementById("password");

    // TOOGLE PASSWORD
    if (password.type === "password") {
        password.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}