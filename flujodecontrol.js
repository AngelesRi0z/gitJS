/*
//PARTE 1
function businessHours(dayNumber,hourNumber) {
var dayNumber=parseInt(prompt("Ingrese el dia  utilizando número "))
var hourNumber=parseInt(prompt("Ingrese la hora en horario de 24 hrs"))

if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5){
    window.alert(true);
}else  {
    
    window.alert(false)
}   
}
businessHours();
*/


//Parte 2

var getDayNumber = parseInt(prompt("Dame un día del 1 al 365"));
var calculator = getDayNumber % 7
switch (calculator){
    case 1: 
        window.alert("Lunes")
        break;
    case 2:
        window.alert("Martes")
        break;
    case 3:
        window.alert("Miercoles")
        break;
    case 4:
        window.alert("Jueves")
        break;
    case 5:
        window.alert("Viernes")
        break;
    case 6:
        window.alert("Sabado")
        break;
    case 7:
        window.alert("Domingo")
        break;
}

/*
//Parte 3

var getDayNumber = parseInt(prompt("Dame un día del 0 al 365"));
var calculator = getDayNumber % 7
switch (calculator){
    case 1: 
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
}
*/