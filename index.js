"use strict";

// Navbar home door open
$(document).ready(function () {
    $(".home").hover(function () {
        $(".home i").removeClass("fa-door-closed").addClass("fa-door-open");
    }, function () {
        $(".home i").removeClass("fa-door-open").addClass("fa-door-closed");
    });
});
