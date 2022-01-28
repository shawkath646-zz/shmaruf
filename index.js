function navActive(params) {
    var totalNavLink = 1;
    while (totalNavLink <= 4) {
        var curDom = document.getElementById("nav-link-" + totalNavLink);
        if (curDom.classList.contains("active")) {
            curDom.classList.remove("active");
        }
        totalNavLink += 1;
    }
    document.getElementById("nav-link-" + params).classList.add("active");
}
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    this.document.getElementById("navbar").classList.toggle("nav-fixed", scrollPosition > 0);
    if (scrollPosition > 0 && scrollPosition < 599) {
        navActive(1);
    } else if (scrollPosition > 600) {
        navActive(2);
    }

    if (scrollPosition > 300) {
        this.document.getElementById("about-me").classList.add("opacity-ani");
        this.document.getElementById("pic-template").classList.add("slide-left-ani");
        this.document.getElementById("name-n-text").classList.add("slide-up-ani");
    }

});
navActive(1);