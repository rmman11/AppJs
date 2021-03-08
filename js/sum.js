//am creat o functie calculator un operez toate calcule

function calculator(choise){
var n1=parseInt(document.getElementById('num1').value);
var n2=parseInt(document.getElementById('num2').value);
var r;
var c=choise;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4': 
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;

      case '6':
        r='';
    break;
	default:
		break;
			
	}
document.getElementById("result").innerHTML=r;

}
