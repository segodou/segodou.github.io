document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("mouseover", function() {
            this.classList.add("hovered"); // Ajoute la classe "hovered" au survol
        });

        navLink.addEventListener("mouseout", function() {
            this.classList.remove("hovered"); // Supprime la classe "hovered" lorsque la souris quitte la zone
        });
    });
});
