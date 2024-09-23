const favMovieCard = document.querySelector(".fav-movie-card");

function addToWatchlist(movieId)
{
   
   let key = Math.random().toString(36).slice(2,7);
   localStorage.setItem(key,movieId);
   //console.log("i'm addwatchlist");
   alert("Movie Added To Watchlist!");
//    displayWatchlist();
   
}

displayWatchlist();
function displayWatchlist()
{
   //console.log("i'm watchlist");
   const keys = Object.keys(localStorage);
   
   keys.forEach((key)=>{
   console.log(key);
    let getWatchlist = localStorage.getItem(key);
   //console.log(getWatchlist);
    fetch(`http://www.omdbapi.com/?i=${getWatchlist}&apikey=ae5a3a5b`)
            .then(response=>response.json())
            .then(favData => {
                //console.log(favData);
                const{Ratings:[{Value}]} = favData;
                const favMovie = document.createElement("div");
                favMovie.classList.add("movie");

                favMovie.innerHTML = `<div>
                <img src="${favData.Poster}" alt="">
            </div>
            <div class="movie-content">
                <div class="movie-title">
                  <p>${favData.Title}</p>
                  <button onclick="event.stopPropagation(); removeFromWatchlist('${favData.imdbID}')"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="year">
                    <p><i>${favData.Year} &middot ${Value}</i></p>
                </div>
            </div>`;
            favMovieCard.appendChild(favMovie);

            favMovie.addEventListener("click",()=>{

                window.location.href = `moviedetails.html?imdbId=${favData.imdbID}`;
            });

            })
            .catch(error => console.log(error));
   
            
        });
   
    }

    function removeFromWatchlist(id)
    {
        //console.log(id); 
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if(localStorage.getItem(key)==id)
            {
                localStorage.removeItem(key);
                alert("Movie Removed From Watchlist");
            }
        })
        location.reload(); 
    }



    const input = document.getElementById("input");
    const movieCard = document.querySelector(".movie-card");
    const movieDetailsCardContainer = document.querySelector(".movie-details-card-container");
    input.addEventListener("input",findMovie);
    
    function findMovie()
    {
       const movieName = input.value.trim();
    
       movieCard.innerHTML="";
    
       fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=ae5a3a5b`)
            .then(response => response.json())
            .then(data => {data.Search.forEach(movieDtl => {
                //console.log(data);
                
                const movie = document.createElement("div");
                movie.classList.add("movie");
                
                movie.innerHTML = `
                    <div>
                        <img src=${movieDtl.Poster} alt="">
                    </div>
                    <div class="movie-content">
                        <div class="movie-title">
                          <p>${movieDtl.Title}</p>
                          <button onclick="event.stopPropagation(); addToWatchlist('${movieDtl.imdbID}')"><i class="fa-solid fa-bookmark"></i></button>
                        </div>
                        <div class="year">
                            <p><i>${movieDtl.Year}</i></p>
                        </div>
                    </div>`;
    
                    movieCard.appendChild(movie);
    
                    movie.addEventListener("click",()=> {
                
                    window.location.href = `moviedetails.html?imdbId=${movieDtl.imdbID}`}
                );
    
            })}).catch(error=>console.log(error));
    
            
    }
    
    
        let url = new URLSearchParams(window.location.search);
        let urlElements = url.get('imdbId');
        //console.log(urlElements);
    
        if(urlElements)
        {
            movieDetails(urlElements)
        }
    
    
    function movieDetails(imdbIdCatch)
    {
       
       fetch(`http://www.omdbapi.com/?i=${imdbIdCatch}&apikey=ae5a3a5b`)
            .then(response=>response.json())
            .then(data => {
                //console.log(data);
                const{Ratings:[{Value}]} = data;
               const movieDetailsCard = document.createElement("div");
               movieDetailsCard.classList.add("movie-details-card");
    
               movieDetailsCard.innerHTML = `<div class="image-details">
            <img src="${data.Poster}" alt="">
           </div>
           <div class="text-content">
           <div class="title-details">
            <h2>${data.Title}</h2>
            <button onclick="addToWatchlist('${data.imdbID}')"><i class="fa-solid fa-bookmark"></i></button>
           </div> 
           <div class="rating-details">
            <p><i>${data.Year} • ${data.Country} • Rating - ${Value}</i></p>
           </div>
           <div class="cast-details">
            <p><b>Actors:</b> ${data.Actors}</p>
            <p><b>Director:</b> ${data.Director}</p>
            <p><b>Writers:</b> ${data.Writer}</p>
           </div>
           <div class="additional-details">
            <p><b>Genre:</b> ${data.Genre}</p>
            <p><b>Release Date:</b> ${data.Released}</p>
            <p><b>Box Office:</b> ${data.BoxOffice}</p>
            <p><b>Movie Runtime:</b> ${data.Runtime}</p>
           </div>
           <div class="plot-details">
            <p>${data.Plot}</p>
           </div>
           <div class="award-details">
            <p><i><i class="fa-solid fa-award"></i> ${data.Awards}</i></p>
           </div>
        </div>`;
        movieDetailsCardContainer.innerHTML = '';
        movieDetailsCardContainer.appendChild(movieDetailsCard);
                })
            .catch(error=>console.log(error));
    }
    
   







