//dice roller

function rollDice()
{
    const input = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");

    const values = [];
    const images = [];
    let value;
    for(let i = 0; i<input; i++)
    {
        value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice-images/${value}.png" alt="Dice:${value}">`);
    }

    diceResult.textContent = `Dice ${values.join(", ")}`;
    diceImage.innerHTML = `${images.join("")}`;

}