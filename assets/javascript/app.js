$(document).ready(function () {

    // -----start button

    $(".start").on('click', function () {
        window.location.href = "2ndpage.html";
        console.log('.start');
    })
    // --------- 1st set of buttons
    $(".select1").click(function () {
        $("#toggle1").toggle();
    });
    $(".select3").click(function () {
        $("#toggle1").toggle();
    });
    $(".select2").click(function () {
        $("#toggle2").toggle();
    });
    // --------- 2nd set of buttons
    $(".select4").click(function () {
        $("#toggle3").toggle();
    });
    $(".select5").click(function () {
        $("#toggle4").toggle();
    });
    $(".select6").click(function () {
        $("#toggle4").toggle();
    });


});