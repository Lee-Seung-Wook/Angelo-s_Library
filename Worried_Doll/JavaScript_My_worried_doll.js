// To Show the TOP button
window.onscroll = function () { ScrollBtShow_Hide() };

function ScrollBtShow_Hide() {
    if (document.body.scroll < 100 || document.documentElement.scroll < 100) {
        $('#ToTheTop').css('display', 'none');
    } else {
        $('#ToTheTop').css('display', 'block');
    }
};

// Character Move Button //
$('#mini1').click(function () {
    var offset = $('#mini1_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini2').click(function () {
    var offset = $('#mini2_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini3').click(function () {
    var offset = $('#mini3_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini4').click(function () {
    var offset = $('#mini4_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini5').click(function () {
    var offset = $('#mini5_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini6').click(function () {
    var offset = $('#mini6_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini7').click(function () {
    var offset = $('#mini7_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini8').click(function () {
    var offset = $('#mini8_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini9').click(function () {
    var offset = $('#mini9_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini10').click(function () {
    var offset = $('#mini10_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini11').click(function () {
    var offset = $('#mini11_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini12').click(function () {
    var offset = $('#mini12_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini13').click(function () {
    var offset = $('#mini13_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini14').click(function () {
    var offset = $('#mini14_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})
$('#mini15').click(function () {
    var offset = $('#mini15_1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
})

// Top Move Button //
$('#ToTheTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

// Move Page To Main Function
function MovePageToMain() {
    $('#MovePageToMain').addClass('icon-spin4-alt animate-spin');
    setTimeout(function () {
        window.location.replace("./My_worried_doll.html");
    }, 1500);
}

// Move Page To Other Characters Function
function MovePageToOtherCharacters() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_OtherCharacters.html");
    }, 1000);
}

// Move Page To Result 1 Function
function MovePageToResult1() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_1.html");
    }, 1000);
}

// Move Page To Result 2 Function
function MovePageToResult2() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_2.html");
    }, 1000);
}

// Move Page To Result 3 Function
function MovePageToResult3() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_3.html");
    }, 1000);
}

// Move Page To Result 4 Function
function MovePageToResult4() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_4.html");
    }, 1000);
}

// Move Page To Result 5 Function
function MovePageToResult5() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_5.html");
    }, 1000);
}

// Move Page To Result 6 Function
function MovePageToResult6() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_6.html");
    }, 1000);
}

// Move Page To Result 7 Function
function MovePageToResult7() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_7.html");
    }, 1000);
}

// Move Page To Result 8 Function
function MovePageToResult8() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_8.html");
    }, 1000);
}

// Move Page To Result 9 Function
function MovePageToResult9() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_9.html");
    }, 1000);
}

// Move Page To Result 10 Function
function MovePageToResult10() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_10.html");
    }, 1000);
}

// Move Page To Result 11 Function
function MovePageToResult11() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_11.html");
    }, 1000);
}

// Move Page To Result 12 Function
function MovePageToResult12() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_12.html");
    }, 1000);
}

// Move Page To Result 13 Function
function MovePageToResult13() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_13.html");
    }, 1000);
}

// Move Page To Result 14 Function
function MovePageToResult14() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_14.html");
    }, 1000);
}

// Move Page To Result 15 Function
function MovePageToResult15() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_15.html");
    }, 1000);
}

// Copy Current URL to Clipboard
function CopyUrlToClipboard() {
    var Dummy_Tag = document.createElement("input");
    var Current_URL = location.href;
    document.body.appendChild(Dummy_Tag);
    Dummy_Tag.value = Current_URL;
    Dummy_Tag.select();
    document.execCommand("copy");
    document.body.removeChild(Dummy_Tag);
    alert("???????????? ????????? ?????????????????????.\nThe website address has been copied.");
}

var CurrentPage = 0;
var number = 0;
var StartNumber = 0;

var array = []
array[0] = {
    "Second_Question1": "&nbsp;????????? ????????? ????????? ????????? ????????? ????????? ????????? ???????????????????", "BtBt1": "1_1_1", "BtBt2": "1_1_1", "BtBt3": "1_1_1", "BtBt4": "1_1_1", "BtBt5": "1_1_1",
    "Second_Question2": "&nbsp;????????? ????????? ??? ????????? ?????? ????????? ????????? ??? ??? ??????????????????? ???????????? ?????????????", "BtBt1_2": "1_1_2", "BtBt2_2": "1_1_2", "BtBt3_2": "1_1_2", "BtBt4_2": "1_1_2", "BtBt5_2": "1_1_2",
    "Second_Question3": "&nbsp;?????? ????????? ????????? ????????? ?????? ???????????? ?????????????", "BtBt1_3": "1_1_3", "BtBt2_3": "1_1_3", "BtBt3_3": "1_1_3", "BtBt4_3": "1_1_3", "BtBt5_3": "1_1_3",
    "Second_Question4": "&nbsp;?????? ??? ?????? ??? ??????????????? ????????? ????????? ?????? ?????? ????????? ???????????? ?????????????", "BtBt1_4": "1_1_4", "BtBt2_4": "1_1_4", "BtBt3_4": "1_1_4", "BtBt4_4": "1_1_4", "BtBt5_4": "1_1_4",
    "Second_Question5": "&nbsp;????????? ????????? ?????? ?????? ????????? ?????? ????????????????", "BtBt1_5": "1_1_5", "BtBt2_5": "1_1_5", "BtBt3_5": "1_1_5", "BtBt4_5": "1_1_5", "BtBt5_5": "1_1_5"
},
    array[1] = {
        "Second_Question1": "&nbsp;?????? ????????? ????????? ?????? ????????? ??????????????? ????????????????", "BtBt1": "1_2_1", "BtBt2": "1_2_1", "BtBt3": "1_2_1", "BtBt4": "1_2_1", "BtBt5": "1_2_1",
        "Second_Question2": "&nbsp;????????? ?????? ?????? ????????? ?????????????????????????", "BtBt1_2": "1_2_2", "BtBt2_2": "1_2_2", "BtBt3_2": "1_2_2", "BtBt4_2": "1_2_2", "BtBt5_2": "1_2_2",
        "Second_Question3": "&nbsp;????????? ?????? ?????? ???????????? ??? ?????? ???????????? ????????? ??????????", "BtBt1_3": "1_2_3", "BtBt2_3": "1_2_3", "BtBt3_3": "1_2_3", "BtBt4_3": "1_2_3", "BtBt5_3": "1_2_3",
        "Second_Question4": "&nbsp;????????? ?????? ?????? ???????????? ????????? ???????????? ?????? ????????? ??????????", "BtBt1_4": "1_2_4", "BtBt2_4": "1_2_4", "BtBt3_4": "1_2_4", "BtBt4_4": "1_2_4", "BtBt5_4": "1_2_4",
        "Second_Question5": "&nbsp;????????? ????????? ????????? ???????????? ????????? ????????????????", "BtBt1_5": "1_2_5", "BtBt2_5": "1_2_5", "BtBt3_5": "1_2_5", "BtBt4_5": "1_2_5", "BtBt5_5": "1_2_5"
    },
    array[2] = {
        "Second_Question1": "&nbsp;???????????? ????????? ??????????????? ????????? ?????? ??????????", "BtBt1": "1_3_1", "BtBt2": "1_3_1", "BtBt3": "1_3_1", "BtBt4": "1_3_1", "BtBt5": "1_3_1",
        "Second_Question2": "&nbsp;??????????????? ????????? ???????????? ????????? ????????????????", "BtBt1_2": "1_3_2", "BtBt2_2": "1_3_2", "BtBt3_2": "1_3_2", "BtBt4_2": "1_3_2", "BtBt5_2": "1_3_2",
        "Second_Question3": "&nbsp;?????? ????????? ?????? ??? ???????????? ?????? ???????????? ????????? ???????????? ???????????? ?????? ?????? ??????????", "BtBt1_3": "1_3_3", "BtBt2_3": "1_3_3", "BtBt3_3": "1_3_3", "BtBt4_3": "1_3_3", "BtBt5_3": "1_3_3",
        "Second_Question4": "&nbsp;????????? ?????? ????????? ????????? ????????? ????????? ?????? ???????????? ?????? ??? ??????????", "BtBt1_4": "1_3_4", "BtBt2_4": "1_3_4", "BtBt3_4": "1_3_4", "BtBt4_4": "1_3_4", "BtBt5_4": "1_3_4",
        "Second_Question5": "&nbsp;????????? ????????? ?????? ????????? ????????? ?????? ??????????", "BtBt1_5": "1_3_5", "BtBt2_5": "1_3_5", "BtBt3_5": "1_3_5", "BtBt4_5": "1_3_5", "BtBt5_5": "1_3_5"
    },
    array[3] = {
        "Second_Question1": "&nbsp;????????? ???????????? ????????? ??? ????????? ????????? ????????? ????????????????", "BtBt1": "1_4_1", "BtBt2": "1_4_1", "BtBt3": "1_4_1", "BtBt4": "1_4_1", "BtBt5": "1_4_1",
        "Second_Question2": "&nbsp;???????????? ????????? ????????? ????????? ????????? ?????? ????????? ????????? ?????? ??????????", "BtBt1_2": "1_4_2", "BtBt2_2": "1_4_2", "BtBt3_2": "1_4_2", "BtBt4_2": "1_4_2", "BtBt5_2": "1_4_2",
        "Second_Question3": "&nbsp;????????? ????????? ???????????? ????????? ?????? ??????????", "BtBt1_3": "1_4_3", "BtBt2_3": "1_4_3", "BtBt3_3": "1_4_3", "BtBt4_3": "1_4_3", "BtBt5_3": "1_4_3",
        "Second_Question4": "&nbsp;????????? ???????????? ?????? ?????? ?????? ??????????????? ?????? ?????? ??????????", "BtBt1_4": "1_4_4", "BtBt2_4": "1_4_4", "BtBt3_4": "1_4_4", "BtBt4_4": "1_4_4", "BtBt5_4": "1_4_4",
        "Second_Question5": "&nbsp;??????????????? ????????? ???????????? ????????? ?????? ??? ?????? ??????????", "BtBt1_5": "1_4_5", "BtBt2_5": "1_4_5", "BtBt3_5": "1_4_5", "BtBt4_5": "1_4_5", "BtBt5_5": "1_4_5"
    },
    array[4] = {
        "Second_Question1": "&nbsp;???(???)??? ????????? ?????? ????????? ?????? ????????? ????????? ?????? ??????????", "BtBt1": "1_5_1", "BtBt2": "1_5_1", "BtBt3": "1_5_1", "BtBt4": "1_5_1", "BtBt5": "1_5_1",
        "Second_Question2": "&nbsp;????????? ???(???)?????? ???????????? ?????? ?????? ???????????? ??????????", "BtBt1_2": "1_5_2", "BtBt2_2": "1_5_2", "BtBt3_2": "1_5_2", "BtBt4_2": "1_5_2", "BtBt5_2": "1_5_2",
        "Second_Question3": "&nbsp;???(???)??? ????????? ????????? ????????? ???????????? ??????????", "BtBt1_3": "1_5_3", "BtBt2_3": "1_5_3", "BtBt3_3": "1_5_3", "BtBt4_3": "1_5_3", "BtBt5_3": "1_5_3",
        "Second_Question4": "&nbsp;????????? ?????? ???(???)??? SNS??? ???????????? ?????? ?????? ??????????", "BtBt1_4": "1_5_4", "BtBt2_4": "1_5_4", "BtBt3_4": "1_5_4", "BtBt4_4": "1_5_4", "BtBt5_4": "1_5_4",
        "Second_Question5": "&nbsp;????????? ???????????? ???????????? ?????? ?????? 1??? ??????????????? ????????? ?????? ??????????", "BtBt1_5": "1_5_5", "BtBt2_5": "1_5_5", "BtBt3_5": "1_5_5", "BtBt4_5": "1_5_5", "BtBt5_5": "1_5_5"
    },
    array[5] = {
        "Second_Question1": "&nbsp;???(???)?????? ???????????? ???????????? ?????????????", "BtBt1": "1_6_1", "BtBt2": "1_6_1", "BtBt3": "1_6_1", "BtBt4": "1_6_1", "BtBt5": "1_6_1",
        "Second_Question2": "&nbsp;????????? ????????? ??????????????? ????????? ??????????", "BtBt1_2": "1_6_2", "BtBt2_2": "1_6_2", "BtBt3_2": "1_6_2", "BtBt4_2": "1_6_2", "BtBt5_2": "1_6_2",
        "Second_Question3": "&nbsp;????????? ?????? ????????? ???(???)??? ???????????? ?????? ????????? ????????????????", "BtBt1_3": "1_6_3", "BtBt2_3": "1_6_3", "BtBt3_3": "1_6_3", "BtBt4_3": "1_6_3", "BtBt5_3": "1_6_3",
        "Second_Question4": "&nbsp;???(???)??? ?????? ??? ???????????? ??? ?????? ??? ????????? ?????? ??????????", "BtBt1_4": "1_6_4", "BtBt2_4": "1_6_4", "BtBt3_4": "1_6_4", "BtBt4_4": "1_6_4", "BtBt5_4": "1_6_4",
        "Second_Question5": "&nbsp;?????? ?????????????????? ???(???)??? ????????? ????????? ?????? ?????? ??????????", "BtBt1_5": "1_6_5", "BtBt2_5": "1_6_5", "BtBt3_5": "1_6_5", "BtBt4_5": "1_6_5", "BtBt5_5": "1_6_5"
    },
    array[6] = {
        "Second_Question1": "&nbsp;?????? ??? ????????? ???????????? ???????????? ??????????", "BtBt1": "1_7_1", "BtBt2": "1_7_1", "BtBt3": "1_7_1", "BtBt4": "1_7_1", "BtBt5": "1_7_1",
        "Second_Question2": "&nbsp;????????? ???????????? ??????????", "BtBt1_2": "1_7_2", "BtBt2_2": "1_7_2", "BtBt3_2": "1_7_2", "BtBt4_2": "1_7_2", "BtBt5_2": "1_7_2",
        "Second_Question3": "&nbsp;???????????? ???????????? ????????? ?????? ?????? ??????????", "BtBt1_3": "1_7_3", "BtBt2_3": "1_7_3", "BtBt3_3": "1_7_3", "BtBt4_3": "1_7_3", "BtBt5_3": "1_7_3",
        "Second_Question4": "&nbsp;????????? ???????????? ????????? ????????? ?????? ?????? ??????????", "BtBt1_4": "1_7_4", "BtBt2_4": "1_7_4", "BtBt3_4": "1_7_4", "BtBt4_4": "1_7_4", "BtBt5_4": "1_7_4",
        "Second_Question5": "&nbsp;????????? ??? ????????? ??? ?????? ??? ????????? ????????? ??? ?????? ??????????", "BtBt1_5": "1_7_5", "BtBt2_5": "1_7_5", "BtBt3_5": "1_7_5", "BtBt4_5": "1_7_5", "BtBt5_5": "1_7_5"
    },
    array[7] = {
        "Second_Question1": "&nbsp;???????????? ?????? ????????????????????? ????????????????", "BtBt1": "1_8_1", "BtBt2": "1_8_1", "BtBt3": "1_8_1", "BtBt4": "1_8_1", "BtBt5": "1_8_1",
        "Second_Question2": "&nbsp;???????????? ????????? ????????? ???????????? ????????????????", "BtBt1_2": "1_8_2", "BtBt2_2": "1_8_2", "BtBt3_2": "1_8_2", "BtBt4_2": "1_8_2", "BtBt5_2": "1_8_2",
        "Second_Question3": "&nbsp;??? ?????? ????????? ??????????????? ?????? ???????????? ??????????", "BtBt1_3": "1_8_3", "BtBt2_3": "1_8_3", "BtBt3_3": "1_8_3", "BtBt4_3": "1_8_3", "BtBt5_3": "1_8_3",
        "Second_Question4": "&nbsp;???????????? ?????? ????????? ???????????? ??????????????? ???????????? ?????? ?????? ?????? ??????????", "BtBt1_4": "1_8_4", "BtBt2_4": "1_8_4", "BtBt3_4": "1_8_4", "BtBt4_4": "1_8_4", "BtBt5_4": "1_8_4",
        "Second_Question5": "&nbsp;??????????????? ????????? ?????? ????????? ?????????????", "BtBt1_5": "1_8_5", "BtBt2_5": "1_8_5", "BtBt3_5": "1_8_5", "BtBt4_5": "1_8_5", "BtBt5_5": "1_8_5"
    },
    array[8] = {
        "Second_Question1": "&nbsp;??????????????? ????????? ???????????? ?????? ?????? ??????????", "BtBt1": "1_9_1", "BtBt2": "1_9_1", "BtBt3": "1_9_1", "BtBt4": "1_9_1", "BtBt5": "1_9_1",
        "Second_Question2": "&nbsp;??????????????? ???????????? ?????? ????????? ?????? ?????? ???????????? ?????????????", "BtBt1_2": "1_9_2", "BtBt2_2": "1_9_2", "BtBt3_2": "1_9_2", "BtBt4_2": "1_9_2", "BtBt5_2": "1_9_2",
        "Second_Question3": "&nbsp;??????????????? ????????? ??????????????? ????????? ???????????? ?????????????", "BtBt1_3": "1_9_3", "BtBt2_3": "1_9_3", "BtBt3_3": "1_9_3", "BtBt4_3": "1_9_3", "BtBt5_3": "1_9_3",
        "Second_Question4": "&nbsp;???????????? ????????? ???????????? ?????? ?????? ???????????? ????????? ??????????", "BtBt1_4": "1_9_4", "BtBt2_4": "1_9_4", "BtBt3_4": "1_9_4", "BtBt4_4": "1_9_4", "BtBt5_4": "1_9_4",
        "Second_Question5": "&nbsp;?????????????????? ????????? ?????? ?????? ??? ?????? ?????? ???????????? ?????? ??????????", "BtBt1_5": "1_9_5", "BtBt2_5": "1_9_5", "BtBt3_5": "1_9_5", "BtBt4_5": "1_9_5", "BtBt5_5": "1_9_5"
    },
    array[9] = {
        "Second_Question1": "&nbsp;?????? ????????? ?????? ?????? ???????????? ???????????? ?????? ????????????????", "BtBt1": "1_10_1", "BtBt2": "1_10_1", "BtBt3": "1_10_1", "BtBt4": "1_10_1", "BtBt5": "1_10_1",
        "Second_Question2": "&nbsp;????????? ????????????????????? ?????? ????????? ?????????????", "BtBt1_2": "1_10_2", "BtBt2_2": "1_10_2", "BtBt3_2": "1_10_2", "BtBt4_2": "1_10_2", "BtBt5_2": "1_10_2",
        "Second_Question3": "&nbsp;????????? ?????? ?????? ??????????????? ?????? ?????? ??????????", "BtBt1_3": "1_10_3", "BtBt2_3": "1_10_3", "BtBt3_3": "1_10_3", "BtBt4_3": "1_10_3", "BtBt5_3": "1_10_3",
        "Second_Question4": "&nbsp;?????? ???????????? ?????? ????????? ?????? ????????? ??????????", "BtBt1_4": "1_10_4", "BtBt2_4": "1_10_4", "BtBt3_4": "1_10_4", "BtBt4_4": "1_10_4", "BtBt5_4": "1_10_4",
        "Second_Question5": "&nbsp;????????? ??????????????? ?????? ????????? ??????????????? ?????? ?????? ??????????", "BtBt1_5": "1_10_5", "BtBt2_5": "1_10_5", "BtBt3_5": "1_10_5", "BtBt4_5": "1_10_5", "BtBt5_5": "1_10_5"
    },
    array[10] = {
        "Second_Question1": "&nbsp;??????????????? ??????????????? ????????? ????????? ??????????", "BtBt1": "1_11_1", "BtBt2": "1_11_1", "BtBt3": "1_11_1", "BtBt4": "1_11_1", "BtBt5": "1_11_1",
        "Second_Question2": "&nbsp;????????? ????????? ???????????? ?????? ????????? ???????????? ?????????????", "BtBt1_2": "1_11_2", "BtBt2_2": "1_11_2", "BtBt3_2": "1_11_2", "BtBt4_2": "1_11_2", "BtBt5_2": "1_11_2",
        "Second_Question3": "&nbsp;???????????? ????????? ????????? ????????? ???????????? ????????? ??????????", "BtBt1_3": "1_11_3", "BtBt2_3": "1_11_3", "BtBt3_3": "1_11_3", "BtBt4_3": "1_11_3", "BtBt5_3": "1_11_3",
        "Second_Question4": "&nbsp;??? ?????? ????????? ?????? ???????????? ??????????", "BtBt1_4": "1_11_4", "BtBt2_4": "1_11_4", "BtBt3_4": "1_11_4", "BtBt4_4": "1_11_4", "BtBt5_4": "1_11_4",
        "Second_Question5": "&nbsp;?????????????????? ??????, ???????????? ?????? ??????????????? ?????? ???????????? ????????? ??????????", "BtBt1_5": "1_11_5", "BtBt2_5": "1_11_5", "BtBt3_5": "1_11_5", "BtBt4_5": "1_11_5", "BtBt5_5": "1_11_5"
    },
    array[11] = {
        "Second_Question1": "&nbsp;???????????? ?????????????????? ????????? ???????????? ??????????", "BtBt1": "1_12_1", "BtBt2": "1_12_1", "BtBt3": "1_12_1", "BtBt4": "1_12_1", "BtBt5": "1_12_1",
        "Second_Question2": "&nbsp;??????????????? ????????? ?????? ?????? ????????? ?????? ????????? ???????????? ????????????????", "BtBt1_2": "1_12_2", "BtBt2_2": "1_12_2", "BtBt3_2": "1_12_2", "BtBt4_2": "1_12_2", "BtBt5_2": "1_12_2",
        "Second_Question3": "&nbsp;\????????????????????? ?????? ????????? ?????????\????????? ?????? ????????? ????????????????", "BtBt1_3": "1_12_3", "BtBt2_3": "1_12_3", "BtBt3_3": "1_12_3", "BtBt4_3": "1_12_3", "BtBt5_3": "1_12_3",
        "Second_Question4": "&nbsp;????????? ?????? ??? ?????? ????????? ?????? ????????? ?????? ????????? ????????????????????? ?????? ????????????????", "BtBt1_4": "1_12_4", "BtBt2_4": "1_12_4", "BtBt3_4": "1_12_4", "BtBt4_4": "1_12_4", "BtBt5_4": "1_12_4",
        "Second_Question5": "&nbsp;????????? ??? ??? ????????? ???????????? ?????? ?????????????", "BtBt1_5": "1_12_5", "BtBt2_5": "1_12_5", "BtBt3_5": "1_12_5", "BtBt4_5": "1_12_5", "BtBt5_5": "1_12_5"
    },
    array[12] = {
        "Second_Question1": "&nbsp;?????????????????? ????????? ???????????? ??????????????? ????????? ????????? ??????????", "BtBt1": "1_13_1", "BtBt2": "1_13_1", "BtBt3": "1_13_1", "BtBt4": "1_13_1", "BtBt5": "1_13_1",
        "Second_Question2": "&nbsp;??????????????? ????????? ????????? ???????????? ????????? ?????? ??????????", "BtBt1_2": "1_13_2", "BtBt2_2": "1_13_2", "BtBt3_2": "1_13_2", "BtBt4_2": "1_13_2", "BtBt5_2": "1_13_2",
        "Second_Question3": "&nbsp;????????? ?????? ???????????? ????????? ?????? ?????? ?????? ??????????", "BtBt1_3": "1_13_3", "BtBt2_3": "1_13_3", "BtBt3_3": "1_13_3", "BtBt4_3": "1_13_3", "BtBt5_3": "1_13_3",
        "Second_Question4": "&nbsp;???????????? ????????? ?????? ??? ????????? ?????? ??? ????????????????????? ????????? ?????? ?????? ??????????", "BtBt1_4": "1_13_4", "BtBt2_4": "1_13_4", "BtBt3_4": "1_13_4", "BtBt4_4": "1_13_4", "BtBt5_4": "1_13_4",
        "Second_Question5": "&nbsp;????????? ???????????? ?????? ????????? ?????????????????? ??????????????? ????????? ???????????? ??????????", "BtBt1_5": "1_13_5", "BtBt2_5": "1_13_5", "BtBt3_5": "1_13_5", "BtBt4_5": "1_13_5", "BtBt5_5": "1_13_5"
    },
    array[13] = {
        "Second_Question1": "&nbsp;??? ?????? ????????? ?????? ?????? ????????? ?????? ????????? ?????? ??????????", "BtBt1": "1_14_1", "BtBt2": "1_14_1", "BtBt3": "1_14_1", "BtBt4": "1_14_1", "BtBt5": "1_14_1",
        "Second_Question2": "&nbsp;?????? ????????? ????????? ???????????? ?????? ?????????????", "BtBt1_2": "1_14_2", "BtBt2_2": "1_14_2", "BtBt3_2": "1_14_2", "BtBt4_2": "1_14_2", "BtBt5_2": "1_14_2",
        "Second_Question3": "&nbsp;????????? ?????? ?????? ??????????????????? ?????? ?????? ?????? ?????? ??????????", "BtBt1_3": "1_14_3", "BtBt2_3": "1_14_3", "BtBt3_3": "1_14_3", "BtBt4_3": "1_14_3", "BtBt5_3": "1_14_3",
        "Second_Question4": "&nbsp;???????????? ????????? ?????? ???????????????? ????????? ????????? ????????????????", "BtBt1_4": "1_14_4", "BtBt2_4": "1_14_4", "BtBt3_4": "1_14_4", "BtBt4_4": "1_14_4", "BtBt5_4": "1_14_4",
        "Second_Question5": "&nbsp;????????? ????????? ????????? ?????? ?????? ????????? ?????? ??????????", "BtBt1_5": "1_14_5", "BtBt2_5": "1_14_5", "BtBt3_5": "1_14_5", "BtBt4_5": "1_14_5", "BtBt5_5": "1_14_5"
    },
    array[14] = {
        "Second_Question1": "&nbsp;????????? ????????? ???????????? ????????? ????????? ????????? ??????????", "BtBt1": "1_15_1", "BtBt2": "1_15_1", "BtBt3": "1_15_1", "BtBt4": "1_15_1", "BtBt5": "1_15_1",
        "Second_Question2": "&nbsp;?????? ????????? ????????? ???????????? ????????? ???????????? ?????????????", "BtBt1_2": "1_15_2", "BtBt2_2": "1_15_2", "BtBt3_2": "1_15_2", "BtBt4_2": "1_15_2", "BtBt5_2": "1_15_2",
        "Second_Question3": "&nbsp;?????? ?????? ?????? ?????? ???????????? ?????? ?????? ??????????", "BtBt1_3": "1_15_3", "BtBt2_3": "1_15_3", "BtBt3_3": "1_15_3", "BtBt4_3": "1_15_3", "BtBt5_3": "1_15_3",
        "Second_Question4": "&nbsp;???????????? ?????? ???????????? ?????? ????????? ?????? ?????? ??????????", "BtBt1_4": "1_15_4", "BtBt2_4": "1_15_4", "BtBt3_4": "1_15_4", "BtBt4_4": "1_15_4", "BtBt5_4": "1_15_4",
        "Second_Question5": "&nbsp;?????? ?????? ?????? ?????? ??????????????? ????????????????", "BtBt1_5": "1_15_5", "BtBt2_5": "1_15_5", "BtBt3_5": "1_15_5", "BtBt4_5": "1_15_5", "BtBt5_5": "1_15_5"
    }

// For FadeOut [Main Page] and FadeIn [Second Page]
$(document).ready(function () {
    if (StartNumber == 0) {
        function isMobile() {
            var UserAgent = navigator.userAgent;
            if (UserAgent.match(/iPhone|iPod|iPad|iPad Pro|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
                return true;
            } else {
                return false;
            }
        }
        if (StartNumber == 0) {
            setTimeout(function () {
                if (isMobile()) {
                    $('.Main_Page').fadeOut(500);
                    $('.Second_Page').fadeIn(500);
                } else {
                    alert("????????? ????????? ????????? ?????? ????????????. ??????????????? QR????????? ?????? ???????????? ??????????????????.")
                    $('.Main_Page').fadeOut(500);
                    $('.Second_Page').fadeIn(500);
                }
            }, 2500);
            StartNumber++;
            window.scrollTo(0, 0);
        }
    }
})

// For FadeOut [Second Page] and FadeIn [Third Page]
$('.Start').click(function () {
    if (StartNumber == 1) {
        setTimeout(function () {
            $('.Second_Page').fadeOut(500);
            $('.Third_Page').fadeIn(500);
        }, 1500);
        StartNumber++;
        window.scrollTo(0, 0);
    }
})

// For Select First Question Button [Color, Value]
$('#FQBt1').click(function () {
    var value = $('.First_Question_value1').val();
    if (value == 0) {
        $('#FQBt1').attr('class', 'First_Question_Bt_Click');
        $('.First_Question_value1').val(1);
        var offset = $('#FQBt1').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt1').attr('class', 'First_Question_Bt');
        $('.First_Question_value1').val(0);
        var offset = $('#FQBt1').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Second Question Button [Color, Value]
$('#FQBt2').click(function () {
    var value = $('.First_Question_value2').val();
    if (value == 0) {
        $('#FQBt2').attr('class', 'First_Question_Bt_Click2');
        $('.First_Question_value2').val(1);
        var offset = $('#FQBt2').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt2').attr('class', 'First_Question_Bt');
        $('.First_Question_value2').val(0);
        var offset = $('#FQBt2').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Third Question Button [Color, Value]
$('#FQBt3').click(function () {
    var value = $('.First_Question_value3').val();
    if (value == 0) {
        $('#FQBt3').attr('class', 'First_Question_Bt_Click3');
        $('.First_Question_value3').val(1);
        var offset = $('#FQBt3').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt3').attr('class', 'First_Question_Bt');
        $('.First_Question_value3').val(0);
        var offset = $('#FQBt3').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Fourth Question Button [Color, Value]
$('#FQBt4').click(function () {
    var value = $('.First_Question_value4').val();
    if (value == 0) {
        $('#FQBt4').attr('class', 'First_Question_Bt_Click4');
        $('.First_Question_value4').val(1);
        var offset = $('#FQBt4').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt4').attr('class', 'First_Question_Bt');
        $('.First_Question_value4').val(0);
        var offset = $('#FQBt4').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For FadeOut [Third Page] and FadeIn [Fourth Page]
$('.Next').click(function () {
    // $('#span').addClass('icon-spin4-alt animate-spin');
    if (StartNumber == 2) {
        setTimeout(function () {
            $('.Third_Page').fadeOut(500);
            $('.Fourth_Page').fadeIn(500);
        }, 1000);
        StartNumber++;
        window.scrollTo(0, 0);
    } ArrayModify();
})

// To modify the array
function ArrayModify() {
    var First = $('.First_Question_value1').val();
    var Second = $('.First_Question_value2').val();
    var Third = $('.First_Question_value3').val();
    var Fourth = $('.First_Question_value4').val();
    if (First == 0) {
        delete array[0];
        delete array[1];
        delete array[2];
    } if (Second == 0) {
        delete array[3];
        delete array[4];
        delete array[5];
        delete array[6];
        delete array[7];
        delete array[8];
    } if (Third == 0) {
        delete array[9];
        delete array[10];
        delete array[11];
    } if (Fourth == 0) {
        delete array[12];
        delete array[13];
        delete array[14];
    } if (First == 0 && Second == 0 && Third == 0 && Fourth == 0) {
        alert("?????? ?????? ????????? ???????????? ??????????????????.\nPlease select at least one option.");
        window.location.reload();
    }
    CurrentPage++
    array = array.filter(item => item);
    var TotalPage = array.length;
    $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>');
    Next();
}

// Inset the value of arrayy in third page [First]
function Next() {
    // Second Question <P> Insert through the array
    $("#Second_Question1").html(array[number]["Second_Question1"]);
    $("#Second_Question2").html(array[number]["Second_Question2"]);
    $("#Second_Question3").html(array[number]["Second_Question3"]);
    $("#Second_Question4").html(array[number]["Second_Question4"]);
    $("#Second_Question5").html(array[number]["Second_Question5"]);
    // Second Question <First Button> Insert through the array
    $('#BtBt1').val(array[number]["BtBt1"]);
    $('#BtBt2').val(array[number]["BtBt2"]);
    $('#BtBt3').val(array[number]["BtBt3"]);
    $('#BtBt4').val(array[number]["BtBt4"]);
    $('#BtBt5').val(array[number]["BtBt5"]);
    // Second Question <Second Button> Insert through the array
    $('#BtBt1_2').val(array[number]["BtBt1_2"]);
    $('#BtBt2_2').val(array[number]["BtBt2_2"]);
    $('#BtBt3_2').val(array[number]["BtBt3_2"]);
    $('#BtBt4_2').val(array[number]["BtBt4_2"]);
    $('#BtBt5_2').val(array[number]["BtBt5_2"]);
    // Second Question <Third Button> Insert through the array
    $('#BtBt1_3').val(array[number]["BtBt1_3"]);
    $('#BtBt2_3').val(array[number]["BtBt2_3"]);
    $('#BtBt3_3').val(array[number]["BtBt3_3"]);
    $('#BtBt4_3').val(array[number]["BtBt4_3"]);
    $('#BtBt5_3').val(array[number]["BtBt5_3"]);
    // Second Question <Fourth Button> Insert through the array
    $('#BtBt1_4').val(array[number]["BtBt1_4"]);
    $('#BtBt2_4').val(array[number]["BtBt2_4"]);
    $('#BtBt3_4').val(array[number]["BtBt3_4"]);
    $('#BtBt4_4').val(array[number]["BtBt4_4"]);
    $('#BtBt5_4').val(array[number]["BtBt5_4"]);
    // Second Question <Fifth Button> Insert through the array
    $('#BtBt1_5').val(array[number]["BtBt1_5"]);
    $('#BtBt2_5').val(array[number]["BtBt2_5"]);
    $('#BtBt3_5').val(array[number]["BtBt3_5"]);
    $('#BtBt4_5').val(array[number]["BtBt4_5"]);
    $('#BtBt5_5').val(array[number]["BtBt5_5"]);
    // Second Question Button Reset
    $('#BtBt1').attr('class', 'Second_Question_Bt');
    $('#BtBt2').attr('class', 'Second_Question_Bt');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_2').attr('class', 'Second_Question_Bt');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_3').attr('class', 'Second_Question_Bt');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_4').attr('class', 'Second_Question_Bt');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_5').attr('class', 'Second_Question_Bt');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    // Second Next Step Button Reset
    $('#span2').removeClass();
}

// Inset the value of arrayy in third page [Second]
function NextStep() {
    setTimeout(function () {
        $('#span2').addClass('icon-spin4-alt animate-spin');
    }, 100);
    setTimeout(function () {
        Sum();
        window.scrollTo(0, 0);
        number++;
        array = array.filter(item => item);
        var TotalPage = array.length;
        if (number >= TotalPage) {
            $('.Fourth_Page').fadeOut(500);
            $('.Fifth_Page').fadeIn(500);
        } else {
            // Second Question <P> Insert through the array
            $("#Second_Question1").html(array[number]["Second_Question1"]);
            $("#Second_Question2").html(array[number]["Second_Question2"]);
            $("#Second_Question3").html(array[number]["Second_Question3"]);
            $("#Second_Question4").html(array[number]["Second_Question4"]);
            $("#Second_Question5").html(array[number]["Second_Question5"]);
            // Second Question <First Button> Insert through the array
            $('#BtBt1').val(array[number]["BtBt1"]);
            $('#BtBt2').val(array[number]["BtBt2"]);
            $('#BtBt3').val(array[number]["BtBt3"]);
            $('#BtBt4').val(array[number]["BtBt4"]);
            $('#BtBt5').val(array[number]["BtBt5"]);
            // Second Question <Second Button> Insert through the array
            $('#BtBt1_2').val(array[number]["BtBt1_2"]);
            $('#BtBt2_2').val(array[number]["BtBt2_2"]);
            $('#BtBt3_2').val(array[number]["BtBt3_2"]);
            $('#BtBt4_2').val(array[number]["BtBt4_2"]);
            $('#BtBt5_2').val(array[number]["BtBt5_2"]);
            // Second Question <Third Button> Insert through the array
            $('#BtBt1_3').val(array[number]["BtBt1_3"]);
            $('#BtBt2_3').val(array[number]["BtBt2_3"]);
            $('#BtBt3_3').val(array[number]["BtBt3_3"]);
            $('#BtBt4_3').val(array[number]["BtBt4_3"]);
            $('#BtBt5_3').val(array[number]["BtBt5_3"]);
            // Second Question <Fourth Button> Insert through the array
            $('#BtBt1_4').val(array[number]["BtBt1_4"]);
            $('#BtBt2_4').val(array[number]["BtBt2_4"]);
            $('#BtBt3_4').val(array[number]["BtBt3_4"]);
            $('#BtBt4_4').val(array[number]["BtBt4_4"]);
            $('#BtBt5_4').val(array[number]["BtBt5_4"]);
            // Second Question <Fifth Button> Insert through the array
            $('#BtBt1_5').val(array[number]["BtBt1_5"]);
            $('#BtBt2_5').val(array[number]["BtBt2_5"]);
            $('#BtBt3_5').val(array[number]["BtBt3_5"]);
            $('#BtBt4_5').val(array[number]["BtBt4_5"]);
            $('#BtBt5_5').val(array[number]["BtBt5_5"]);
            $('#span2').removeClass();
            // Second Question Button Reset
            $('#BtBt1').attr('class', 'Second_Question_Bt');
            $('#BtBt2').attr('class', 'Second_Question_Bt');
            $('#BtBt3').attr('class', 'Second_Question_Bt');
            $('#BtBt4').attr('class', 'Second_Question_Bt');
            $('#BtBt5').attr('class', 'Second_Question_Bt');
            $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_2').attr('class', 'Second_Question_Bt');
            $('#BtBt2_2').attr('class', 'Second_Question_Bt');
            $('#BtBt3_2').attr('class', 'Second_Question_Bt');
            $('#BtBt4_2').attr('class', 'Second_Question_Bt');
            $('#BtBt5_2').attr('class', 'Second_Question_Bt');
            $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_3').attr('class', 'Second_Question_Bt');
            $('#BtBt2_3').attr('class', 'Second_Question_Bt');
            $('#BtBt3_3').attr('class', 'Second_Question_Bt');
            $('#BtBt4_3').attr('class', 'Second_Question_Bt');
            $('#BtBt5_3').attr('class', 'Second_Question_Bt');
            $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_4').attr('class', 'Second_Question_Bt');
            $('#BtBt2_4').attr('class', 'Second_Question_Bt');
            $('#BtBt3_4').attr('class', 'Second_Question_Bt');
            $('#BtBt4_4').attr('class', 'Second_Question_Bt');
            $('#BtBt5_4').attr('class', 'Second_Question_Bt');
            $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_5').attr('class', 'Second_Question_Bt');
            $('#BtBt2_5').attr('class', 'Second_Question_Bt');
            $('#BtBt3_5').attr('class', 'Second_Question_Bt');
            $('#BtBt4_5').attr('class', 'Second_Question_Bt');
            $('#BtBt5_5').attr('class', 'Second_Question_Bt');
            $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
            // Second Next Step Button Reset
            $('#span2').removeClass();
            CurrentPage++;
            array = array.filter(item => item);
            var TotalPage = array.length;
            $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>')
        }
    }, 1500);
}

// For Second Value Sum
function Sum() {
    if ($('#BtBt1').val() == "1_1_1") {
        var Second_Value1 = $('.1_1_1').val();
        var Second_Value2 = $('.1_1_2').val();
        var Second_Value3 = $('.1_1_3').val();
        var Second_Value4 = $('.1_1_4').val();
        var Second_Value5 = $('.1_1_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_1_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_2_1") {
        var Second_Value1 = $('.1_2_1').val();
        var Second_Value2 = $('.1_2_2').val();
        var Second_Value3 = $('.1_2_3').val();
        var Second_Value4 = $('.1_2_4').val();
        var Second_Value5 = $('.1_2_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_2_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_3_1") {
        var Second_Value1 = $('.1_3_1').val();
        var Second_Value2 = $('.1_3_2').val();
        var Second_Value3 = $('.1_3_3').val();
        var Second_Value4 = $('.1_3_4').val();
        var Second_Value5 = $('.1_3_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_3_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_4_1") {
        var Second_Value1 = $('.1_4_1').val();
        var Second_Value2 = $('.1_4_2').val();
        var Second_Value3 = $('.1_4_3').val();
        var Second_Value4 = $('.1_4_4').val();
        var Second_Value5 = $('.1_4_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_4_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_5_1") {
        var Second_Value1 = $('.1_5_1').val();
        var Second_Value2 = $('.1_5_2').val();
        var Second_Value3 = $('.1_5_3').val();
        var Second_Value4 = $('.1_5_4').val();
        var Second_Value5 = $('.1_5_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_5_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_6_1") {
        var Second_Value1 = $('.1_6_1').val();
        var Second_Value2 = $('.1_6_2').val();
        var Second_Value3 = $('.1_6_3').val();
        var Second_Value4 = $('.1_6_4').val();
        var Second_Value5 = $('.1_6_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_6_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_7_1") {
        var Second_Value1 = $('.1_7_1').val();
        var Second_Value2 = $('.1_7_2').val();
        var Second_Value3 = $('.1_7_3').val();
        var Second_Value4 = $('.1_7_4').val();
        var Second_Value5 = $('.1_7_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_7_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_8_1") {
        var Second_Value1 = $('.1_8_1').val();
        var Second_Value2 = $('.1_8_2').val();
        var Second_Value3 = $('.1_8_3').val();
        var Second_Value4 = $('.1_8_4').val();
        var Second_Value5 = $('.1_8_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_8_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_9_1") {
        var Second_Value1 = $('.1_9_1').val();
        var Second_Value2 = $('.1_9_2').val();
        var Second_Value3 = $('.1_9_3').val();
        var Second_Value4 = $('.1_9_4').val();
        var Second_Value5 = $('.1_9_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_9_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_10_1") {
        var Second_Value1 = $('.1_10_1').val();
        var Second_Value2 = $('.1_10_2').val();
        var Second_Value3 = $('.1_10_3').val();
        var Second_Value4 = $('.1_10_4').val();
        var Second_Value5 = $('.1_10_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_10_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_11_1") {
        var Second_Value1 = $('.1_11_1').val();
        var Second_Value2 = $('.1_11_2').val();
        var Second_Value3 = $('.1_11_3').val();
        var Second_Value4 = $('.1_11_4').val();
        var Second_Value5 = $('.1_11_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_11_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_12_1") {
        var Second_Value1 = $('.1_12_1').val();
        var Second_Value2 = $('.1_12_2').val();
        var Second_Value3 = $('.1_12_3').val();
        var Second_Value4 = $('.1_12_4').val();
        var Second_Value5 = $('.1_12_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_12_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_13_1") {
        var Second_Value1 = $('.1_13_1').val();
        var Second_Value2 = $('.1_13_2').val();
        var Second_Value3 = $('.1_13_3').val();
        var Second_Value4 = $('.1_13_4').val();
        var Second_Value5 = $('.1_13_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_13_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_14_1") {
        var Second_Value1 = $('.1_14_1').val();
        var Second_Value2 = $('.1_14_2').val();
        var Second_Value3 = $('.1_14_3').val();
        var Second_Value4 = $('.1_14_4').val();
        var Second_Value5 = $('.1_14_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_14_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_15_1") {
        var Second_Value1 = $('.1_15_1').val();
        var Second_Value2 = $('.1_15_2').val();
        var Second_Value3 = $('.1_15_3').val();
        var Second_Value4 = $('.1_15_4').val();
        var Second_Value5 = $('.1_15_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_15_6').attr('value', Second_Value_Sum);
    }
}

// For Change Result Value and First Button CSS
$('#BtBt1').click(function () {
    var type = $('#BtBt1').val();
    $("." + type).val(0);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2').attr('class', 'Second_Question_Bt');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second Button CSS
$('#BtBt2').click(function () {
    var type = $('#BtBt2').val();
    $("." + type).val(2);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third Button CSS
$('#BtBt3').click(function () {
    var type = $('#BtBt3').val();
    $("." + type).val(3);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth Button CSS
$('#BtBt4').click(function () {
    var type = $('#BtBt4').val();
    $("." + type).val(4);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth Button CSS
$('#BtBt5').click(function () {
    var type = $('#BtBt1').val();
    $("." + type).val(6);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 2 Button CSS
$('#BtBt1_2').click(function () {
    var type = $('#BtBt1_2').val();
    $("." + type).val(0);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 2 Button CSS
$('#BtBt2_2').click(function () {
    var type = $('#BtBt2_2').val();
    $("." + type).val(2);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 2 Button CSS
$('#BtBt3_2').click(function () {
    var type = $('#BtBt3_2').val();
    $("." + type).val(3);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 2 Button CSS
$('#BtBt4_2').click(function () {
    var type = $('#BtBt4_2').val();
    $("." + type).val(4);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 2 Button CSS
$('#BtBt5_2').click(function () {
    var type = $('#BtBt5_2').val();
    $("." + type).val(6);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 3 Button CSS
$('#BtBt1_3').click(function () {
    var type = $('#BtBt1_3').val();
    $("." + type).val(0);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 3 Button CSS
$('#BtBt2_3').click(function () {
    var type = $('#BtBt2_3').val();
    $("." + type).val(2);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 3 Button CSS
$('#BtBt3_3').click(function () {
    var type = $('#BtBt3_3').val();
    $("." + type).val(3);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 3 Button CSS
$('#BtBt4_3').click(function () {
    var type = $('#BtBt4_3').val();
    $("." + type).val(4);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 3 Button CSS
$('#BtBt5_3').click(function () {
    var type = $('#BtBt5_3').val();
    $("." + type).val(6);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 4 Button CSS
$('#BtBt1_4').click(function () {
    var type = $('#BtBt1_4').val();
    $("." + type).val(0);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 4 Button CSS
$('#BtBt2_4').click(function () {
    var type = $('#BtBt2_4').val();
    $("." + type).val(2);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 4 Button CSS
$('#BtBt3_4').click(function () {
    var type = $('#BtBt3_4').val();
    $("." + type).val(3);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 4 Button CSS
$('#BtBt4_4').click(function () {
    var type = $('#BtBt4_4').val();
    $("." + type).val(4);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 4 Button CSS
$('#BtBt5_4').click(function () {
    var type = $('#BtBt5_4').val();
    $("." + type).val(6);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 5 Button CSS
$('#BtBt1_5').click(function () {
    var type = $('#BtBt1_5').val();
    $("." + type).val(0);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 5 Button CSS
$('#BtBt2_5').click(function () {
    var type = $('#BtBt2_5').val();
    $("." + type).val(2);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 5 Button CSS
$('#BtBt3_5').click(function () {
    var type = $('#BtBt3_5').val();
    $("." + type).val(3);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 5 Button CSS
$('#BtBt4_5').click(function () {
    var type = $('#BtBt4_5').val();
    $("." + type).val(4);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 5 Button CSS
$('#BtBt5_5').click(function () {
    var type = $('#BtBt5_5').val();
    $("." + type).val(6);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Calculate The Result value
function Result() {
    setTimeout(function () {
        $('#span3').addClass('icon-spin4-alt animate-spin');
    }, 100);
    setTimeout(function () {
        var Array_1 = $('.1_1_6').val();
        var Array_2 = $('.1_2_6').val();
        var Array_3 = $('.1_3_6').val();
        var Array_4 = $('.1_4_6').val();
        var Array_5 = $('.1_5_6').val();
        var Array_6 = $('.1_6_6').val();
        var Array_7 = $('.1_7_6').val();
        var Array_8 = $('.1_8_6').val();
        var Array_9 = $('.1_9_6').val();
        var Array_10 = $('.1_10_6').val();
        var Array_11 = $('.1_11_6').val();
        var Array_12 = $('.1_12_6').val();
        var Array_13 = $('.1_13_6').val();
        var Array_14 = $('.1_14_6').val();
        var Array_15 = $('.1_15_6').val();
        var Result_Array = [
            Array_1 * 1, Array_2 * 1, Array_3 * 1, Array_4 * 1, Array_5 * 1, Array_6 * 1, Array_7 * 1, Array_8 * 1, Array_9 * 1, Array_10 * 1, Array_11 * 1, Array_12 * 1, Array_13 * 1, Array_14 * 1, Array_15 * 1]
        var TopScore = Math.max.apply(null, Result_Array);
        if (Array_1 == Array_2 || Array_1 == Array_3 || Array_1 == Array_4 || Array_1 == Array_5 || Array_1 == Array_6 || Array_1 == Array_7 || Array_1 == Array_8 || Array_1 == Array_9 || Array_1 == Array_10 || Array_1 == Array_11 || Array_1 == Array_12 || Array_1 == Array_13 || Array_1 == Array_14 || Array_1 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_1 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_1_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_1) {
            MovePageToResult1();
            $('#span3').removeClass();
        } else if (Array_2 == Array_3 || Array_2 == Array_4 || Array_2 == Array_5 || Array_2 == Array_6 || Array_2 == Array_7 || Array_2 == Array_8 || Array_2 == Array_9 || Array_2 == Array_10 || Array_2 == Array_11 || Array_2 == Array_12 || Array_2 == Array_13 || Array_2 == Array_14 || Array_2 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_2 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_2_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_2) {
            MovePageToResult2();
            $('#span3').removeClass();
        } else if (Array_3 == Array_4 || Array_3 == Array_5 || Array_3 == Array_6 || Array_3 == Array_7 || Array_3 == Array_8 || Array_3 == Array_9 || Array_3 == Array_10 || Array_3 == Array_11 || Array_3 == Array_12 || Array_3 == Array_13 || Array_3 == Array_14 || Array_3 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_3 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_3_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_3) {
            MovePageToResult3();
            $('#span3').removeClass();
        } else if (Array_4 == Array_5 || Array_4 == Array_6 || Array_4 == Array_7 || Array_4 == Array_8 || Array_4 == Array_9 || Array_4 == Array_10 || Array_4 == Array_11 || Array_4 == Array_12 || Array_4 == Array_13 || Array_4 == Array_14 || Array_4 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_4 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_4_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_4) {
            MovePageToResult4();
            $('#span3').removeClass();
        } else if (Array_5 == Array_6 || Array_5 == Array_7 || Array_5 == Array_8 || Array_5 == Array_9 || Array_5 == Array_10 || Array_5 == Array_11 || Array_5 == Array_12 || Array_5 == Array_13 || Array_5 == Array_14 || Array_5 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_5 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_5_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_5) {
            MovePageToResult5();
            $('#span3').removeClass();
        } else if (Array_6 == Array_7 || Array_6 == Array_8 || Array_6 == Array_9 || Array_6 == Array_10 || Array_6 == Array_11 || Array_6 == Array_12 || Array_6 == Array_13 || Array_6 == Array_14 || Array_6 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_6 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_6_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_6) {
            MovePageToResult6();
            $('#span3').removeClass();
        } else if (Array_7 == Array_8 || Array_7 == Array_9 || Array_7 == Array_10 || Array_7 == Array_11 || Array_7 == Array_12 || Array_7 == Array_13 || Array_7 == Array_14 || Array_7 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_7 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_7_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_7) {
            MovePageToResult7();
            $('#span3').removeClass();
        } else if (Array_8 == Array_9 || Array_8 == Array_10 || Array_8 == Array_11 || Array_8 == Array_12 || Array_8 == Array_13 || Array_8 == Array_14 || Array_8 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_8 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_8_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_8) {
            MovePageToResult8();
            $('#span3').removeClass();
        } else if (Array_9 == Array_10 || Array_9 == Array_11 || Array_9 == Array_12 || Array_9 == Array_13 || Array_9 == Array_14 || Array_9 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_9 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_9_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_9) {
            MovePageToResult9();
            $('#span3').removeClass();
        } else if (Array_10 == Array_11 || Array_10 == Array_12 || Array_10 == Array_13 || Array_10 == Array_14 || Array_10 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_10 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_10_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_10) {
            MovePageToResult10();
            $('#span3').removeClass();
        } else if (Array_11 == Array_12 || Array_11 == Array_13 || Array_11 == Array_14 || Array_11 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_11 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_11_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_11) {
            MovePageToResult11();
            $('#span3').removeClass();
        } else if (Array_12 == Array_13 || Array_12 == Array_14 || Array_12 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_12 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_12_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_12) {
            MovePageToResult12();
            $('#span3').removeClass();
        } else if (Array_13 == Array_14 || Array_13 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_13 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_13_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_13) {
            MovePageToResult13();
            $('#span3').removeClass();
        } else if (Array_14 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_14 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_14_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_14) {
            MovePageToResult14();
            $('#span3').removeClass();
        } else if (TopScore == Array_15) {
            MovePageToResult15();
            $('#span3').removeClass();
        }
    }, 500);
}
