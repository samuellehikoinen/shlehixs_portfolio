"use strict";

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