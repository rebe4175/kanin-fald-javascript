$(window).on("load", begynd); //siger at den skal loade alt i vinduet


function begynd() { //begynder animationen

    $("#start").on("click", moveIn); //knap til start, defineret i html
    $("#fall").on("click", fall);

}

function moveIn() { //funktionen "kalder" på moveIn

    console.log("move_in"); //colsol log er for hele koden indenfor disse tuborg paranteser
    $("#kanin_sprite").removeClass("fall"); //move in har både walk og fall (som man kan se inde på inspektion), så vi bliver nød til at fjerne fall så man kan starte animationen forfra - ellers falder den for evigt
    $("#kanin_container").addClass("move_in");
    $("#kanin_sprite").addClass("walk");
}

function fall() {

    console.log("fall");
    $("#kanin_container").removeClass("move_in");
    $("#kanin_sprite").removeClass("walk");


    $("#kanin_container").addClass("position_in");
    $("#kanin_sprite").addClass("fall");

}
