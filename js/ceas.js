function ceas() {
  var Digital=new Date()
  var hours=Digital.getHours()     // Preia ora
  var minutes=Digital.getMinutes()     // Preia minutele
  var seconds=Digital.getSeconds()     // Preia secundele
  var dn="AM"
  // Stabileste afisarea AM (Ante Meridian) sau PM (Post Meridian)
  if (hours>12) {
    dn="PM"
    hours=hours-12
  }
  if (hours==0)
    hours=12
  if (minutes<=9)
    minutes="0"+minutes
  if (seconds<=9)
    seconds="0"+seconds

// Aici poti schimba marimea si tipul fontului
// Creaza si afiseaza elementele HTML in eticheta <div>
  myclock="<font size='4' face='Arial' ><b><font size='1'>The Time</font><br>"+hours+":"+minutes+":"
+seconds+" "+dn+"</b></font>"

  document.getElementById("ceas2").innerHTML=myclock
  setTimeout("ceas()",1000)     // Executa functia ceas() la fiecare secunda
}
function date_day(){

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var monthName;


switch (month)
{
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
}

var year = currentDate.getFullYear();
var myString;
myString = "<font size='4' face='Arial' ><b>Today is " + day +  
" - " + monthName + " - " + year + "</b></font>";


 document.getElementById("day_month").innerHTML=myString;
}

date_day();//am apelat a doua functie 

window.onload = ceas;
  