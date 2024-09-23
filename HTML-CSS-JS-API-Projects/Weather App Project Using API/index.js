const inputDisplay = document.querySelector(".inputDisplay");
const formDisplay = document.querySelector(".formDisplay");
const card = document.querySelector(".weatherDisplay");
const APIKey = "0794f496edb906360aa78c2546698d2b";

formDisplay.addEventListener("submit",async event=>{
    event.preventDefault();

    const city = inputDisplay.value;

    if(city)
    {
       const weatherData = await getWeatherData(city);
       displayWeatherInfo(weatherData);
    }
    else
    {
       displayError("Please Enter The City");
    }

});

async function getWeatherData(city)
{
   try
   {
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
     const response = await fetch(apiUrl);

     console.log(response);

     if(!response.ok)
     {
        throw new Error("Could not fetch the data");
     }
      return await response.json();
   }
   catch(error)
   {
     console.log(error);
     displayError(error);
   }
}
function displayWeatherInfo(data)
{
  const {name: city, main: {temp,humidity}, weather: [{description,id}]} = data;
  
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const emojiDisplay = document.createElement("p");
  
  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
  humDisplay.textContent = `Humidity : ${humidity}%`;
  descDisplay.textContent = description;
  emojiDisplay.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humDisplay.classList.add("humDisplay");
  descDisplay.classList.add("descDisplay");
  emojiDisplay.classList.add("emojiDisplay");


  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humDisplay);
  card.appendChild(descDisplay);
  card.appendChild(emojiDisplay);
  
}
function getWeatherEmoji(weatherId)
{
   switch(true)
   {
    case(weatherId>=200 && weatherId<300):
    return "⛈";
    case(weatherId>=300 && weatherId<400):
    return "🌨";
    case(weatherId>=500 && weatherId<600):
    return "☔";
    case(weatherId>=600 && weatherId<700):
    return "❄";
    case(weatherId>=700 && weatherId<800):
    return "🌫";
    case(weatherId===800):
    return "☀";
    case(weatherId>=801 && weatherId<810):
    return "☁";
    default:
    return "❓";    
   }
}
function displayError(message)
{
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}



