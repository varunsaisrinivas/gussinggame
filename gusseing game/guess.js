let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);

function checkGuess() {
    let gussedNumber=parseInt(userInput.value);
    if(gussedNumber>randomNumber)
    {
        gameResult.textContent="Too high! try again";
        gameResult.style.backgroundColor="blue";
    }
    else if(gussedNumber<randomNumber)
    {
        gameResult.textContent="Too low! try again ";
        gameResult.style.backgroundColor="blue";
    }
    else if(gussedNumber === randomNumber)
    {
        gameResult.textContent="Congratulations!";
        gameResult.style.backgroundColor="green";
    }
    else
    {
        gameResult.textContent="enter a valid number";
        gameResult.style.backgroundColor="red";
    }
    
 
}