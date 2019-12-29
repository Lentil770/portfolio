$(".projects-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects").offset().top
    }, 500);
});
function runPage() {
    projectsLink();
};
$(runPage)
