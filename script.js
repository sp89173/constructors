/* LOGIN*/
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText =
    }
}

/* CHECK LOGIN */
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true")
       window.location.herf = "login.html";
       else {
        loadpage("home");
       }
    }

    /* LOGOUT */
    function logout() {
        localStorage.removeItem("loggedIn");
        window.location.href = "login.html";
    }

    /* DYNAMIC CONTENT */
    let content = document.getElementById("content");


    function loadpage(page) {
        removeActivate();
        document.getElementById(page).classList.add("acti")

        if (page === "home") {
            changeBackground("home-bg");
            content.innerHTML =
            <h2>HOME</h2>
            <img src="images/Home.png" class="section-img">
            <p>Welcome to the website.</p>
        }
        if (pa)
    }
if (page == "about") {
    changeBackground("about-bg");
    content.innerHTML =
    <h2>About</h2>
    <img src="images/about.png" class="section-img"
    <p>Frontend project using HTML, CSS, and JavaScrpt</p>
    ;
}

if (page === "service") {
    changeBackground("service-bg");
    content.innerHTML = 
    <h2>Services</h2>
    <img src="images/services.png" class="section-img">
    <ul>
        <li>web Design</li>
        <li>Fronted Development</li>
        <li>JavaScript Projects</li>
    </ul>
    ;
}

if (page === "contact") {
    changeBackground("contact-bg");
    content.innerHTML =
    <h2>Contact</h2>
    <img src="images/contact.png" class="section-img">
     <input type="text" placeholder="Name"><br><br>
     <input type="email" placeholder="Email"><br><br>
     <button>Submit</button>
     ;
}

function removeActivate() {
    document.querySelectorAll("nav a").forEach(a=>a.classlist.remove("activate"));
}
function changeBackground(classname) {
    document.body.className = className;
}

    





