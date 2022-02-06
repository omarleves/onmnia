/*------------------portfolio-popup--------------- */
document.addEventListener("click", (eo) => {
    if (eo.target.classList.contains("view")) {
        tooglepp()
        document.querySelector(".portfolio-popup").scrollTo(0,0)
        portfolioitem(eo.target.parentElement)
    }
})

function tooglepp() {
    document.querySelector(".portfolio-popup").classList.toggle("open");

    document.body.classList.toggle("hide-scroll")

    document.querySelector(".main").classList.toggle("fade-out")
}

document.querySelector(".pp-close").addEventListener("click", tooglepp)

document.addEventListener("click", (eo) => {
    if (eo.target.classList.contains("pp-inner")) {
        tooglepp()
    }
})

function portfolioitem(portfolio) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolio.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolio.querySelector(".portfolio-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolio.querySelector(".portfolio-item-details").innerHTML;
}



/*------------------ header --------------- */
document.addEventListener("click", (eo) => {
    if (eo.target.classList.contains("link-item") && eo.target.hash !== "") {
        navtoggle.classList.add("hide")
        if (eo.target.classList.contains("nav-item")) {
            togglenav();
        } else {
            hidesection()
            document.body.classList.add("hide-scroll")
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(eo.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scroll");
        },500)
    }
})



/*------------------ toggle --------------- */
const navtoggle = document.querySelector(".nav-btn");
navtoggle.addEventListener("click", () => {
    hidesection();
    togglenav();
    document.body.classList.toggle("hide-scroll")
})
function hidesection() {
    document.querySelector("section.active").classList.toggle("fade-out")
}
function togglenav() {
    document.querySelector(".header").classList.toggle("active")
}


/*------------------ Loader --------------- */
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    document.querySelector(".loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
    },600)
})


/*------------------ Form --------------- */
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ahmedabdelnaser408@yahoo.com",
        Password : "0m@rleves99481996",
        To : 'dgjkjfdssfghjjred@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Order",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}