function projectsLink() {
    (".projects-link").on('click', {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects").offset().top
    }, 500);
    });
}
function runPage() {
    projectsLink();
};
$(runPage)
