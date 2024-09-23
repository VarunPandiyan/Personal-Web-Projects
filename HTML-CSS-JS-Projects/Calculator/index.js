const display = document.getElementById("input");

function clickToDisplay(input)
{
   display.value += input; 
}
function erase()
{
  display.value = "";
}
function calculate()
{
  try
  {
    display.value = eval(display.value);
  }
  catch(error)
  {
    display.value = 'Error';
  }  
  
}