$(document).ready(function () {

    // -----start button

    $(".start").on('click', function () {
        window.location.href = "2ndpage.html";
        console.log('.start');
    })


    // ---- timer ---- 
    window.onload = function () {
        $(".start").on("click", stopwatch)

        var timer = 30;
        var min = 0;
        var stopwatch = setInterval(function () {
            var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timer % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            $("#timerDisplay").text(timer + "  seconds");
            timer--;
            // If the count down is over, write some text 
            if (timer < 1) {
                clearInterval(stopwatch);
                $("#timerDisplay").text("Your time is up!");
                setTimeout(function () {
                    location.reload();

                    $("#toggle9").hide();
                }, 7000);
            }
            console.log(timer);
        }, 1000);


    };



    $("#correct").html(correctAns);
    $("#incorrect").html(incorrectAns);
    $("#missed").html(missed);
    $("#total").html(total);
    var correctAns = 0;
    var incorrectAns = 0;
    var missed = 0;
    var total = 0;


    // --------- 1st set of buttons
    $(".select1").click(function () {
        console.log($(this).val() + "value");

        $("#toggle1").show(".select1");

        // set timeout for the buttons hide/show

        setTimeout(function () {

            incorrectAns++;
            $("#toggle1").hide();


            // if ($(".select2").val() === $("#toggle2").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle1").hide();
            //     console.log(correctAns + "yes");
            // }
            // else if ($(".select1").val() || $(".select3").val() === $("#toggle1").val()) {
            //     incorrectAns++;
            //     $("#toggle1").hide();
            //     //****** for some reason my counter is not incrementing by 1 and it's adding it on my correct slot****
            //     console.log(incorrectAns + "no");
            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);
            console.log(incorrectAns + "Incorrect Answer");
            console.log(correctAns + "Correct Answer");

        }, 3000);






    });

    $(".select3").click(function () {
        $("#toggle1").show(".select3");

        setTimeout(function () {

            incorrectAns++;
            $("#toggle1").hide();

            // if ($(".select2").val() === $("#toggle2").val()) {
            //     correctAns++;
            //     total++
            //     $("#toggle1").hide();
            // }


            // else if ($(".select1").val() || $(".select3").val() !== $("#toggle1").val()) {
            //     true;
            //     incorrectAns++;
            //     $("#toggle1").hide();
            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);
            console.log(incorrectAns + "Incorrect Answer");
            console.log(correctAns + "Correct Answer");

        }, 3000);


    });
    $(".select2").click(function () {
        $("#toggle2").show(".select2");

        setTimeout(function () {

            correctAns++;
            total++;
            $("#toggle2").hide();

            // if ($(".select2").val() === $("#toggle2").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle2").hide();
            // }
            // else if ($(".select1").val() || $(".select3").val() === $("#toggle1").val()) {
            //     incorrectAns++;
            //     $("#toggle2").hide();



            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);
            console.log(incorrectAns + "Incorrect Answer");
            console.log(correctAns + "Correct Answer");

        }, 3000);

    });

    // --------- 2nd set of buttons
    $(".select4").click(function () {
        $("#toggle3").show(".select4");

        setTimeout(function () {

            correctAns++;
            total++;
            $("#toggle3").hide();

            // if ($(".select4").val() === $("#toggle3").val()) {
            // }
            // else if ($(".select5").val() || $(".select6").val() === $("#toggle4").val()) {
            //     incorrectAns++;
            //     $("#toggle3").hide();

            // }
            // else {
            //     console.log("neither correct or incorrect");
            // }

            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns + "Incorrect Answer");
            $("#missed").html("Missed:  " + correctAns);
            console.log(correctAns + "Correct Answer");
            $("#total").html("Total:  " + total);

        }, 3000);

    });

    $(".select5").click(function () {
        $("#toggle4").show(".select5");

        setTimeout(function () {

            incorrectAns++;
            $("#toggle4").hide();

            // if ($(".select4").val() === $("#toggle3").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle4").hide();
            // }
            // else if ($(".select5").val() || $(".select6").val() === $("#toggle3").val()) {




            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);

    });


    $(".select6").click(function () {
        $("#toggle4").show(".select6");

        setTimeout(function () {
            incorrectAns++;
            missed++;
            $("#toggle4").hide();

            // if ($(".select4").val() === $("#toggle3").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle4").hide();
            // }
            // else if ($(".select5").val() || $(".select6").val() === $("#toggle3").val()) {

            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);

    });

    // 3rd sets show/hide ---
    $(".select7").click(function () {
        $("#toggle5").show(".select7");

        setTimeout(function () {

            incorrectAns++;
            $("#toggle5").hide();

            // if ($(".select7").val() === $("#toggle6").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle5").hide();
            // }
            // else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {

            // }

            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);
    });

    $(".select8").click(function () {
        $("#toggle5").show(".select8");


        setTimeout(function () {

            incorrectAns++;
            $("#toggle5").hide();


            // if ($(".select7").val() === $("#toggle6").val()) {
            //     $("#toggle5").hide();
            //     correctAns++;
            //     total++;
            // }
            // else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {

            // }


            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);
    });


    $(".select9").click(function () {
        $("#toggle6").show(".select9");

        setTimeout(function () {

            correctAns++;
            total++;
            $("#toggle6").hide();

            // if ($(".select7").val() === $("#toggle6").val()) {
            // }
            // else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {
            //     incorrectAns++;
            //     $("#toggle6").hide();

            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);
    });

    // ------- 4th sets show/hide ---
    $(".select10").click(function () {
        $("#toggle8").show(".select10");

        setTimeout(function () {

            correctAns++;
            total++;
            $("#toggle8").hide();

            // if ($(".select10").val() === $("#toggle8").val()) {
            // }
            // else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {
            //     incorrectAns++;
            //     $("#toggle8").hide();

            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);


    });

    $(".select11").click(function () {
        $("#toggle7").show(".select11");

        setTimeout(function () {

            incorrectAns++;
            $("#toggle7").hide(); s

            // if ($(".select10").val() === $("#toggle8").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle7").hide();
            // }
            // else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {


            // }
            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);


    });

    $(".select12").click(function () {
        $("#toggle7").show(".select12");

        setTimeout(function () {

            incorrectAns++;
            $("#toggle7").hide();

            // if ($(".select10").val() === $("#toggle8").val()) {
            //     correctAns++;
            //     total++;
            //     $("#toggle7").hide();
            // }
            // else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {

            // }

            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            console.log(incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);

    });

    // if (($(".seledt1", ".select2", ".select3", ".select4", ".select5", ".select6", ".select7", ".select8", ".select9", ".select10", ".select11", ".select12").val() === ""))


    // trying to add any of the missed counter by selecting all buttons and passing on to the If/else statement
    if ($(".seledt1", ".select2", ".select3", ".select4", ".select5", ".select6", ".select7", ".select8", ".select9", ".select10", ".select11", ".select12").val() === "") {
        missed++;
    } else {

    }

    // score

    $(".Score").click(function () {
        $("#toggle9").show();

        setTimeout(function () {
            $("#toggle9").hide();

            $("#correct").html("Correct Answers:  " + correctAns);
            $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
            $("#missed").html("Missed:  " + missed);
            $("#total").html("Total:  " + total);

        }, 3000);




    });
    // 


});