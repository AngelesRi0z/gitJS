//PARTE 1
function businessHours(dayNumber,hourNumber) {
  //var dayNumber=parseInt(prompt("Ingrese el dia con numero siendo 0(lunes) y 6 (domingo) "))
  var hourNumber=parseInt(prompt("Ingrese la hora en horario de 24 hrs"))
 
  if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 0 && dayNumber <= 6){
      window.alert(true);
  }else  {
     
      window.alert(false)
  }  
  }
  //businessHours();

//PARTE 2

function getDayNumber(janFirstDayNumber, yearDayNumber){
  var res = yearDayNumber % 7;
  var final = (janFirstDayNumber + res)%7;
  return final;
}
//getDayNumber();

//alert("De acuerdo a los datos ingresados el dia cayo en : " + getDayNumber(parseInt(prompt("En que dia inició el año siendo 0(lunes) y 6(domingo))")),parseInt(prompt("Elige un numero del 0 al 365"))));

//PARTE 3

function workingHours() {
  getDayNumber();
  businessHours();
}
workingHours();
alert("De acuerdo a los datos ingresados el dia cayo en : " + getDayNumber(parseInt(prompt("En que dia inició el año siendo 0(lunes)")),parseInt(prompt("Elige un numero del 0 al 365"))));
  