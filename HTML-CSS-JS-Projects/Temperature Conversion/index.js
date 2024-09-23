const input = document.getElementById("input");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temperature;

function convert()
{
   if(toFahrenheit.checked)
   {
     temperature = Number(input.value);
     temperature = (9/5)*temperature + 32;
     result.textContent = `${temperature.toFixed(1)}°F`;
   }
   else if(toCelsius.checked)
   {
    temperature = Number(input.value);
    temperature = (temperature-32)*5/9;
    result.textContent = `${temperature.toFixed(1)}°C`;
   }
   else
   {
    result.textContent = "Please Select the Unit";
   } 
}