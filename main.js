function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-list-toggle");

    if (navbarToggle.className === "navbar-list") {
        navbarToggle.className += " responsive";
    } else
    {
        navbarToggle.className = "navbar-list";
    }
}