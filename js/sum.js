//declaram variabile folosind document.querySelector pentru a selecta din html componets
var A = document.querySelector('#nr_A');
var B = document.querySelector('#nr_B');
var buttonCalc = document.querySelector('#caculate');


buttonCalc.addEventListener('click', function() {
	
	//80l => 1500 km
	//?L => 100km
	
	//verifica daca campurile sunt completate sau nu 
	if(A.value == '' || B.value == '' ){
		alert('Completeaza toate campurile!')
		return;
		}
		
		
		
   //parseInt() function parses a string argument and returns an integer of the specified 		
		
	var  sum =  parseInt(A.value) +  parseInt(B.value);
	
	document.getElementById("sumFinal").innerHTML =  sum;
	
	console.log(sum);
	
});

