// naam van player vragen
const playerName = prompt(`Hoi speler, wat is je naam?`,)

// reactie met gebruik van de naam
alert(`Hey ${playerName}, wat leuk dat je dit spel gaat spelen, druk snel op "OK" om door te gaan!`)

// uitleg spel
alert(`Dit is een spel waar je een 5 keer de kans hebt het door de computer gekozen nummer te raden. 
Het nummer zit tussen de 0 en 10. Ook 0 en 10 zijn mogelijk. Heel veel succes!`)


// random number generen
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
random = getRandomNumber(0, 10);
console.log(random);

const Checknumber = function () {
    var guessNumber = parseInt(prompt('welk nummer kies je?'));
    let guesses = 0;
    console.log(guesses);
    while (guessNumber !== random && guesses <= 4) {
        guessNumber = parseInt(prompt('helaas dit is fout! Nog een kans: welk nummer kies je?'));
        guesses++;
        console.log(guesses);
    }
    if (guesses <= 4) {
        alert(`wat goed! ${guessNumber} is het goede getal. GEFELICITEERD ${playerName}!!!!Dank je voor het meespelen!`)
    }
    else {
        alert(`helaas je hebt het maximale aantal keer kiezen gehaald en het getal niet geraden, je bent GAME OVER :(`)
    }


}

Checknumber()

