//declaram variabile folosind document.querySelector pentru a selecta din html componets
var km = document.querySelector('#km');
var litri = document.querySelector('#litri');
var buttonCalc = document.querySelector('#caculate');


buttonCalc.addEventListener('click', function() {
	
	//80l => 1500 km
	//?L => 100km
	
	//verifica daca campurile sunt completate sau nu 
	if(litri.value == '' || km.value == '' ){
		alert('Completeaza toate campurile!')
		return;
		}
		
		
		
	var result = (100 * litri.value) / km.value;
	
	document.getElementById("consumFinal").innerHTML = result.toFixed(1);
	
	//console.log(result);
	
});
