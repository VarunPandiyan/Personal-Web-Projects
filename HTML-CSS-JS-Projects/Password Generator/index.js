//random password generator
function generatePassword(length,includesUpperCase,includesLowerCase,includesNumber,includesSymbol)
{
   const lowerCaseChars = "abcdefghijklmnopqrstuvwzyz";
   const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars = "1234567890";
   const symbolChars = "~!@#$%^&*()_+=-";

   let allowedChars = "";
   let Password = "";

   allowedChars += includesLowerCase?lowerCaseChars:"";
   allowedChars += includesUpperCase?upperCaseChars:"";
   allowedChars += includesNumber?numberChars:"";
   allowedChars += includesSymbol?symbolChars:"";


   if(length<=0)
   {
    return `(Please Give The Valid Number)`;
   }
   if(allowedChars.length === 0)
   {
    return '(Please select atleast one method to generate password)';
   } 
   
   for(let i = 0; i<length;i++)
   {
      let random = Math.floor(Math.random()*allowedChars.length);
      Password += allowedChars[random];
   }

   return `${Password}`;
   
}

let passwordLength = 10;
let includesUpperCase = true;
let includesLowerCase = true;
let includesNumber = true;
let includesSymbol = true;


const password = generatePassword(passwordLength,
                                  includesUpperCase,
                                  includesLowerCase,
                                  includesNumber,
                                  includesSymbol);


console.log(`Generate Password: ${password}`);                                  