$(document).ready(function() {
    $(".rv").on("click",cambiar);
    $(".ar").on("click",cambiar1);
    $(".va").on("click",cambiar2);
    $(".ng").on("click",cambiar3);
    


function cambiar(){

    if($(".rv").hasClass("rojo")){

        $(".rv").removeClass("rojo").addClass("verde").attr("value","Cambiame a rojo");
    }

    else{

        $(".rv").removeClass("verde").addClass("rojo").attr("value","Cambiame a verde");
    }
}

function cambiar1(){

    if($(".ar").hasClass("amarillo")){

        $(".ar").removeClass("amarillo").addClass("rojo").attr("value","Cambiame a amarillo");
    }

    else{

        $(".ar").removeClass("rojo").addClass("amarillo").attr("value","Cambiame a rojo");
    }
}

function cambiar2(){

    if($(".va").hasClass("verde")){

        $(".va").removeClass("verde").addClass("azul").attr("value","Cambiame a verde");
    }

    else{

        $(".va").removeClass("azul").addClass("verde").attr("value","Cambiame a azul");
    }
}

function cambiar3(){

    if($(".ng").hasClass("gris")){

        $(".ng").removeClass("gris").addClass("negro").attr("value","Cambiar fondo a gris")
        $(".contenedor").css("background-color","black");
    }

    else{

        $(".ng").removeClass("negro").addClass("gris").attr("value","Cambiar fondo a negro")
        $(".contenedor").css("background-color","grey");
    }
}

});