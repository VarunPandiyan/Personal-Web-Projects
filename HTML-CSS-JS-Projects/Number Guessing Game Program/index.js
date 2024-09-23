const min = 1;
const max = 50;

let random = Math.floor((Math.random()*(max-min)+1)+min);

let attempts = 0;

let guess;
let isStart = false;


while(!isStart)
{
  guess = window.prompt(`Guess A Number Between ${min} and ${max}`);
  guess = Number(guess);
  if(isNaN(guess))
    {
        window.alert("Enter A Valid Number");
    }
  else if(guess<min || guess>max)
    {
       window.alert("Enter A Valid Number");
    }
  else
  {
    attempts++;
  if(guess<random)
  {
    window.alert("Your Guess Is Too Low!");
    
  }
  else if(guess>random)
  {
    window.alert("Your Guess Is Too High!");
    
  }
  else
  {
    window.alert(`You Guessed The Correct Number ${random}. 
                 It Took ${attempts} Attempts To Find This Number`);
    isStart = true;
  } 
} 
}



