"use strict";

// Oura tracker
$(document).ready(function () {
    $(".git-oura").click(function () {
        window.open("https://github.com/samuellehikoinen/oura_tracker", '_blank').focus();
    });
    $(".project-oura").click(function () {
        console.dir("An oura modal should open now");
    });
});

// Faceit stat checker
$(document).ready(function () {
    $(".git-fsc").click(function () {
        window.open("https://github.com/samuellehikoinen/faceit_stat_finder", '_blank').focus();
    });
    $(".project-fsc").click(function () {
        console.dir("A fsc modal should open now");
    });
});

// Portfolio
$(document).ready(function () {
    $(".git-portfolio").click(function () {
        window.open("https://github.com/samuellehikoinen/shlehixs_portfolio", '_blank').focus();
    });
    $(".project-portfolio").click(function () {
        console.dir("A portfolio modal should open now");
    });
});

// Navbar home door open
$(document).ready(function () {
    $(".home").hover(function () {
        $(".home i").removeClass("fa-door-closed").addClass("fa-door-open");
    }, function () {
        $(".home i").removeClass("fa-door-open").addClass("fa-door-closed");
    });
});

// Mobile navigation button
$(document).ready(function () {
    $("#hamburger").click(
        function () {
            if ($("#mobile-nav-items").css("display") === "none") {
                $("#mobile-nav-items").css({ display: "block" });
                $("#hamburger").css({ "background-color": "#00d3d3" });
            } else {
                $("#mobile-nav-items").css({ display: "none" });
                $("#hamburger").css({ "background-color": "" });
            }
        });
});

/**
 * Click handler for projects
 * @param {project} project 
 */
function clickProject(project) {
    console.dir(project);
}