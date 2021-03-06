const select = document.querySelector('#theme');
const body = document.querySelector('#header');
const h1 = document.querySelector('h1');
document.getElementById('header').style.padding = '24px';

select.onchange = function() {
 const choice = select.value;

 switch(choice) {
 case 'black':
 update('black','green');
h1.innerHTML ="Header Negru";
 break;
 case 'white':
 update('white','black');
 h1.innerHTML ="Header Alb";
 break;

 case 'blue':
 update('#21618C','black');
  h1.innerHTML ="Header Albastru";
 break;
 case 'red':
 update('red','black');
 h1.innerHTML ="Header Rosu";
 break;
 case 'yellow':
 update('#D68910','#1BB18C');
  h1.innerHTML ="Header Galben";
 break;
 case  'purple':
 update('purple','darkgray');
 h1.innerHTML ="Header Pruple";
 break;

 case 'psychedelic':
 update('lime','purple');
 h1.innerHTML ="Learn JavaScript";
 break;
 }
}

function update(bgColor, textColor) {
 body.style.backgroundColor = bgColor;
body.style.color = textColor;
}