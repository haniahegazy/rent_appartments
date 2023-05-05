$(document).ready(function(){
    $("#btn").click(function(){
    $(".check").show(400 );
    $("pre").fadeIn(2000);
    $(".container").fadeTo(700,0.5);
    });
    })
    $(document).ready(function(){
    $("#ok").click(function(){
    $(".check").hide(400 );
    $(".container").fadeTo(700,1);
    });
    })