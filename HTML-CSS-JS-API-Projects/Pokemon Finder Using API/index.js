//Fetch from API


async function fetchData()
{
    try
    {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const name = pokemonName;  
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if(!response.ok)
      {
        throw new Error("Error Error Error");
      }
      const data = await response.json();
      
      console.log(data);
      const pokemonSprites = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonSprites");

      imgElement.src = pokemonSprites;
      imgElement.style.display = "block";
      
    }
    catch(error)
    {
      console.error(error);
    }
}

fetchData();

// ---------------------------

