$(document).ready(function () {

    // -----start button

    $(".start").on('click', function () {
        window.location.href = "2ndpage.html";
        console.log('.start');
    })


    // ---- timer ---- 
    window.onload = function () {
        $(".timer").on("click", timer)
    };

    var myVar = setInterval(timer, 1000);

    function timer() {
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#timerDisplay").html(s);
    }


    // var sec = 30;
    // var timer = setInterval(function () {
    //     $("timerDisplay").html('00:' + sec);
    //     sec--;
    //     if (sec < 0) {
    //         clearInterval(timer);
    //     }

    // }, 1000);



    // function timer() {
    //     var s = 30;
    //     s = checkTime(s);
    //     $("#timerDisplay").html(s);
    //     var t = setTimeout(function () {
    //         timer()
    //     }, 1000);
    // }

    // function checktime(i) {
    //     if (1 < 10) {
    //         i = "0" + i;
    //     }
    //     console.log(i);
    // };


    var correctAns = 0;
    var incorrectAns = 0;
    var missed = 0;
    var total = 0;

    $("#correct").html(correctAns);
    $("#incorrect").html(incorrectAns);
    $("#missed").html(missed);
    $("#total").html(total);

    // --------- 1st set of buttons
    $(".select1").click(function () {
        $("#toggle1").show(".select1");

        // set timeout for the viewing  
        setTimeout(function () {
            if ($(".select2").val() === $("#toggle2").val()) {
                $("#toggle1").hide();
                correctAns++;
                total++;
            }
            else if ($(".select1").val() || $(".select3").val() === $("#toggle1").val()) {
                $("#toggle1").hide();
                ++incorrectAns;

            }

        }, 2000);

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);
        console.log(incorrectAns);

    });

    $(".select3").click(function () {
        $("#toggle1").show(".select3");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {

            if ($(".select2").val() === $("#toggle2").val()) {
                $("#toggle1").hide();
                correctAns++;
                total++
            }
            else if ($(".select1").val() || $(".select3").val() === $("#toggle1").val()) {
                $("#toggle1").hide();
                incorrectAns++;
            }

        }, 2000);


    });
    $(".select2").click(function () {
        $("#toggle2").show(".select2");


        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {

            if ($(".select2").val() === $("#toggle2").val()) {
                $("#toggle2").hide();
                correctAns++;
                total++;
            }
            else if ($(".select1").val() || $(".select3").val() === $("#toggle1").val()) {
                $("#toggle2").hide();
                incorrectAns++;


            }

        }, 2000);

    });
    // --------- 2nd set of buttons
    $(".select4").click(function () {
        $("#toggle3").show(".select4");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + correctAns);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select4").val() === $("#toggle3").val()) {
                $("#toggle3").hide();
                correctAns++;
                total++;
            }
            else if ($(".select5").val() || $(".select6").val() === $("#toggle4").val()) {
                $("#toggle3").hide();
                incorrectAns++;
            }

        }, 2000);

    });
    $(".select5").click(function () {
        $("#toggle4").show(".select5");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select4").val() === $("#toggle3").val()) {
                $("#toggle4").hide();
                correctAns++;
                total++;
            }
            else if ($(".select5").val() || $(".select6").val() === $("#toggle3").val()) {
                $("#toggle4").hide();
                incorrectAns++;


            }

        }, 2000);

    });


    $(".select6").click(function () {
        $("#toggle4").show(".select6");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select4").val() === $("#toggle3").val()) {
                $("#toggle4").hide();
                correctAns++;
                total++;
            }
            else if ($(".select5").val() || $(".select6").val() === $("#toggle3").val()) {
                $("#toggle4").hide();
                incorrectAns++;
                missed++;

            }

        }, 2000);

    });
    // 3rd sets show/hide ---
    $(".select7").click(function () {
        $("#toggle5").show(".select7");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select7").val() === $("#toggle6").val()) {
                $("#toggle5").hide();
                correctAns++;
                total++;
            }
            else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {
                $("#toggle5").hide();
                incorrectAns++;
            }

        }, 2000);
    });

    $(".select8").click(function () {
        $("#toggle5").show(".select8");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select7").val() === $("#toggle6").val()) {
                $("#toggle5").hide();
                correctAns++;
                total++;
            }
            else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {
                $("#toggle5").hide();
                incorrectAns++;
            }

        }, 2000);
    });


    $(".select9").click(function () {
        $("#toggle6").show(".select9");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select7").val() === $("#toggle6").val()) {
                $("#toggle6").hide();
                correctAns++;
                total++;
            }
            else if ($(".select7").val() || $(".select8").val() === $("#toggle5").val()) {
                $("#toggle6").hide();
                incorrectAns++;
            }

        }, 2000);
    });
    // ------- 4th sets show/hide ---
    $(".select10").click(function () {
        $("#toggle8").show(".select10");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select10").val() === $("#toggle8").val()) {
                $("#toggle8").hide();
                correctAns++;
                total++;
            }
            else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {
                $("#toggle8").hide();
                incorrectAns++;
            }

        }, 2000);


    });
    $(".select11").click(function () {
        $("#toggle7").show(".select11");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select10").val() === $("#toggle8").val()) {
                $("#toggle7").hide();
                correctAns++;
                total++;
            }
            else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {
                $("#toggle8").hide();
                incorrectAns++;
            }

        }, 2000);


    });
    $(".select12").click(function () {
        $("#toggle7").show(".select12");

        $("#correct").html("Correct Answers:  " + correctAns);
        $("#incorrect").html("Incorrect Answers:  " + incorrectAns);
        console.log(incorrectAns);
        $("#missed").html("Missed:  " + missed);
        $("#total").html("Total:  " + total);

        setTimeout(function () {
            if ($(".select10").val() === $("#toggle8").val()) {
                $("#toggle7").hide();
                correctAns++;
                total++;
            }
            else if ($(".select11").val() || $(".select12").val() === $("#toggle7").val()) {
                $("#toggle8").hide();
                incorrectAns++;
            }

        }, 2000);

    });


    // score

    $(".Score").click(function () {
        $("#toggle9").show();

        setTimeout(function () {
            $("#toggle9").hide();


        }, 2000);

    });



});