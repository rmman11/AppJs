  var city = document.querySelector('#city');
var searchBtn = document.querySelector('#myBtn');
var conditionTemp =  document.querySelector('#conditionTemp');
var currentTemp = document.querySelector('#currentTemp');
var results  = document.querySelector('#results');
var table  = document.querySelector('#forecastTable');



searchBtn.addEventListener('click' ,function(){
getWeatherData(city.value);
})
//selectam un eveniment de click

city.addEventListener('keyup' ,function(e){
  if(e.key  === 'Enter'){
  getWeatherData(city.value)  
}
// console.log(e);    
})
//adaugam alt tip de eveniment pe input atunci cand scri ceva in el si dau enter sa execute procesul de cautare
//avem un parametru 'e' ce eveniment s-a petrecut
//Trebuie sa facem un apel HTTP pentru api-folosim librariea Axios
//ne folosim de un script pentru a apela libraria Axios  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//facem o functie ansicrona pentru a putea apela HTTP si nu asteapta un raspuns
//definim o functie ansincrona iar in interirul functei putem apela HTTP folosind axios
//ne folosim de o cheie pentru a putea catua orasul pe care l-am scris in input


var getWeatherData = async function(cityName){
  
  
  var locationResponse = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%20%09cqeBXTa5At42nB6gtQM7MLlwQcjFLUGk%20&q=${cityName}`)
  .then(res =>{
    console.log(res.data[0]);
    return res.data[0].Key;
    })
    .catch(err => {
       console.log(err);    
   })
   
  console.log(locationResponse);
  
  
  var conditionResponse = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationResponse}?apikey=%20%09cqeBXTa5At42nB6gtQM7MLlwQcjFLUGk%20`)
      .then(res =>{ 
    displayTemp(res.data[0].Temperature.Metric.Value)
    return res.data[0].Temperature.Metric.Value;
    })
    .catch(err => {
       console.log(err);    
   })
  console.log(conditionResponse);
  
  var forecastResponse = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationResponse}?apikey=%20%09cqeBXTa5At42nB6gtQM7MLlwQcjFLUGk%20`)
  .then(res =>{
    
     showTemp(res.data.DailyForecasts);
    console.log(res.data.DailyForecasts);
    
    })
    .catch(err => {
       console.log(err);    
   })

 var regionList = await axios.get(`http://dataservice.accuweather.com/locations/v1/regions?apikey=cqeBXTa5At42nB6gtQM7MLlwQcjFLUGk%20`).then(res =>{
  console.log(res.data.LocalizedName);
     })
    .catch(err => {
       console.log(err);    
   })

  console.log(regionList);
}









function displayTemp(temp){
  
  currentTemp.innerHTML = `${temp}`;
  conditionTemp.style.display = 'flex';
  
}
function showTemp(data){
  console.log(data);
  
  var htmlTable=``;
  data.forEach(el =>{
  
  htmlTable +=`
  <tr>
   <td>${displayDate(el.Date)}</td>
      <td>${el.Temperature.Minimum.Value}</td>
      <td>${el.Temperature.Maximum.Value}</td>
      </tr>
  
  `;  
  table.innerHTML = htmlTable;
  results.style.display ='flex';
  
  })

  function displayDate(date){

    var oldDate = new Date(date);

    const day  =oldDate.getDate() < 10 ? '0' + oldDate.getDate().toString() : oldDate.getDate().toString();

    let month = oldDate.getMonth() +1;
    month = month < 10 ? '0' + month.toString() : month.toString();
    const year = oldDate.getFullYear().toString();

    const newDate =`${day}/${month}/${year}`;

    return newDate; 
  }

  displayDate("2021-02-08t07:00:00+2:00");
  
}

