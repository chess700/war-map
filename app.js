let inputCountry = '';
let theChecker = [];
let target = '';

let colors = [
    '#FF00FF',
    '#FF33FF',
    '#CC00CC',
    '#FF66FF',
    '#CC33CC',
    '#990099',
    '#FF99FF',
    '#CC66CC',
    '#993399',
    '#660066',
    '#FFCCFF',
    '#CC99CC',
    '#996699',
    '#663366',
    '#330033',
    '#CC00FF',
    '#CC33FF',
    '#9900CC',
    '#CC66FF',
    '#9933CC',
    '#660099',
    '#CC99FF',
    '#9966CC',
    '#663399',
    '#330066',
    '#9900FF',
    '#9933FF',
    '#6600CC',
    '#9966FF',
    '#6633CC',
    '#330099',
    '#6600FF',
    '#6633FF',
    '#3300CC',
    '#3300FF',
    '#0000FF',
    '#3333FF',
    '#0000CC',
    '#6666FF',
    '#3333CC',
    '#000099',
    '#9999FF',
    '#6666CC',
    '#333399',
    '#000066',
    '#CCCCFF',
    '#9999CC',
    '#666699',
    '#333366',
    '#000033',
    '#0033FF',
    '#3366FF',
    '#0033CC',
    '#0066FF',
    '#6699FF',
    '#3366CC',
    '#003399',
    '#3399FF',
    '#0066CC',
    '#0099FF',
    '#99CCFF',
    '#6699CC',
    '#336699',
    '#003366',
    '#66CCFF',
    '#3399CC',
    '#006699',
    '#33CCFF',
    '#0099CC',
    '#00CCFF',
    '#00FFFF',
    '#33FFFF',
    '#00CCCC',
    '#66FFFF',
    '#33CCCC',
    '#009999',
    '#99FFFF',
    '#66CCCC',
    '#339999',
    '#006666',
    '#CCFFFF',
    '#99CCCC',
    '#669999',
    '#336666',
    '#003333',
    '#00FFCC',
    '#33FFCC',
    '#00CC99',
    '#66FFCC',
    '#33CC99',
    '#009966',
    '#99FFCC',
    '#66CC99',
    '#339966',
    '#006633',
    '#00FF99',
    '#33FF99',
    '#00CC66',
    '#66FF99',
    '#33CC66',
    '#009933',
    '#00FF66',
    '#33FF66',
    '#00CC33',
    '#00FF33',
    '#00FF00',
    '#33FF33',
    '#00CC00',
    '#66FF66',
    '#33CC33',
    '#009900',
    '#99FF99',
    '#66CC66',
    '#339933',
    '#006600',
    '#CCFFCC',
    '#99CC99',
    '#669966',
    '#336633',
    '#003300',
    '#33FF00',
    '#66FF33',
    '#33CC00',
    '#66FF00',
    '#99FF66',
    '#66CC33',
    '#339900',
    '#99FF33',
    '#66CC00',
    '#99FF00',
    '#CCFF99',
    '#99CC66',
    '#669933',
    '#336600',
    '#CCFF66',
    '#99CC33',
    '#669900',
    '#CCFF33',
    '#99CC00',
    '#CCFF00',
    '#FFFF00',
    '#FFFF33',
    '#CCCC00',
    '#FFFF66',
    '#CCCC33',
    '#999900',
    '#FFFF99',
    '#CCCC66',
    '#999933',
    '#666600',
    '#FFFFCC',
    '#CCCC99',
    '#999966',
    '#666633',
    '#333300',
    '#FFCC00',
    '#FFCC33',
    '#CC9900',
    '#FFCC66',
    '#CC9933',
    '#996600',
    '#FFCC99',
    '#CC9966',
    '#996633',
    '#663300',
    '#FF9900',
    '#FF9933',
    '#CC6600',
    '#FF9966',
    '#CC6633',
    '#993300',
    '#FF6600',
    '#FF6633',
    '#CC3300',
    '#FF3300',
    '#FF0000',
    '#FF3333',
    '#CC0000',
    '#FF6666',
    '#CC3333',
    '#990000',
    '#FF9999',
    '#CC6666',
    '#993333',
    '#660000',
    '#FFCCCC',
    '#CC9999',
    '#996666',
    '#663333',
    '#330000',
    '#FF0033',
    '#FF3366',
    '#CC0033',
    '#FF0066',
    '#FF6699',
    '#CC3366',
    '#990033',
    '#FF3399',
    '#CC0066',
    '#FF0099',
    '#FF99CC',
    '#CC6699',
    '#993366',
    '#660033',
    '#FF66CC',
    '#CC3399',
    '#990066',
    '#FF33CC',
    '#CC0099',
    '#FF00CC',
    '#FFFFFF',
    '#CCCCCC',
    '#999999',
    '#666666',
    '#333333',
    '##000066'
]


function randomInt(low, high){
    return Math.max(Math.floor(Math.random() * high), low);
}
class Country {

    constructor(name, regen, militaryStrength, color, thing) {
        this.name = name;
        this.militaryStrength = militaryStrength;
        this.regen = regen;
        this.color = color;
        this.thing = thing;
    }

    attack(targetCountry) {

        let attackPower = randomInt(0, Math.round(this.militaryStrength * 10));
        let targetDefense = randomInt(Math.round(targetCountry.militaryStrength * 5), targetCountry.militaryStrength * 10);

        if (attackPower > targetDefense) {

            console.log(`${this.name} successfully attacked ${targetCountry.name}!`);
            targetCountry.militaryStrength -= ((attackPower - targetDefense) / 100);
            this.militaryStrength -= randomInt(1, 2);

            if (this.militaryStrength <= 0) {
                this.militaryStrength = 0;
                theChecker.splice(theChecker.indexOf(this), 1);
                allCountries.splice(allCountries.indexOf(this), 1);
                allCountries.push(this);
                console.log('you were conquered');
            }

            if (targetCountry.militaryStrength <= 0) {
                targetCountry.militaryStrength = 0;
                theChecker.splice(theChecker.indexOf(targetCountry), 1);
                allCountries.splice(allCountries.indexOf(this), 1);
                allCountries.push(this);
                console.log('you conquered ' + targetCountry.name);

                let targetCountryBlocks = document.querySelectorAll('[data-country="' + targetCountry.name.toLowerCase() + '"] path');
                targetCountryBlocks.forEach((targetCountryBlock, i) => {

                    setTimeout(() => {
                        targetCountryBlock.style.fill = this.color;
                        targetCountryBlock.style.stroke = this.color;
                    }, i * 0);

                    colors.forEach((color, c) => {

                        setTimeout(() => {
                            targetCountryBlock.style.fill = color;
                            targetCountryBlock.style.stroke = color;
                        }, c * 0);


                    });

                });

            }

        } else {

            this.militaryStrength -= this.militaryStrength / 10;

            targetCountry.militaryStrength -= randomInt(1, 11);

            if (targetCountry.militaryStrength <= 0) {
                targetCountry.militaryStrength = 0;
                theChecker.splice(theChecker.indexOf(targetCountry), 1);
                allCountries.splice(allCountries.indexOf(this), 1);
                allCountries.push(this);

                console.log('you conquered  ' + targetCountry.name);

                let targetCountryBlocks = document.querySelectorAll('[data-country="' + targetCountry.name.toLowerCase() + '"] path');
                targetCountryBlocks.forEach(targetCountryBlock => {
                    targetCountryBlock.style.fill = this.color;
                });

            }
            if (this.militaryStrength <= 0) {
                this.militaryStrength = 0;
                theChecker.remove(theChecker.indexOf(this), 1);
                allCountries.splice(allCountries.indexOf(this), 1);
                allCountries.push(this);
                console.log('you were conquered');
            }
            console.log(`${this.name}'s attack on ${targetCountry.name} failed!`);
        }
    }
}

let countries = [];
let allCountries = [];
let countryNames = ["Iceland", "USA", "Russia", "China", "Germany", "Brazil", "France", "UK", "Japan", "Australia", "Canada", "South Korea", "Egypt", "India", "Pakistan", "Nigeria", "Iran", "Turkey", "Democratic Republic of the Congo", "Indonesia", "Bangladesh"];
let regens = [1, 3.7, 6.6, 4, 1, 3.2, 1, 1, 1, 2.9, 3.8, 1, 1, 2.1, 1, 1, 1, 1, 2, 2, 1];
let strengths = [1, 339, 147, 1425, 80, 216, 68, 69, 125, 25, 37, 51, 100, 142, 240, 221, 92, 81, 95, 277, 185];
//let colors = ["2041E5", "7E4FFC", "5BD7F4", "3DE83D", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066", "#000066"];

countryNames.forEach((name, index) => {
    let country = new Country(name, regens[index], strengths[index], colors[index], 0);
    countries.push(country);
    allCountries.push(country);
    theChecker.push(country);
});


function startWar(inputCountry){

    if (!inputCountry) return;

    theChecker.forEach(theCheckerCountry => {
        if (theCheckerCountry.name === 'China'){
            attacker = theCheckerCountry;
            return;
        }
        if (inputCountry.toLowerCase() === theCheckerCountry.name.toLowerCase()) {
            target = theCheckerCountry;
        }
    });

    console.log('==== attacker is ' + attacker.name);
    if (attacker !== target) {
        console.log('==== target is ' + target.name);
        attacker.attack(target);

        theChecker.forEach(country => {
            country.militaryStrength = Math.round((country.militaryStrength) + country.regen);
            if (country.militaryStrength > country.thing) {
                country.thing = country.militaryStrength;
            }
            console.log(`${country.name}: ${country.militaryStrength}`);
        });
    }

    console.log('high scores');
    allCountries.forEach(i => {
        console.log(i.name);
        console.log(i.thing);
    });

}






var SPEED = 99999


let svg = document.querySelector('svg');

//2000 730

var timeouts = [];



function deleteSquares(){

        if (timeouts && timeouts.length){
            timeouts.forEach(timeout => {
                clearTimeout(timeout);
            });
            timeouts = [];
        }

        const pathsArray = Array.from(svg.querySelectorAll('path'));

        shuffleArray(pathsArray);

        pathsArray.forEach((square, index) => {
            let timeout = setTimeout(function(){
                square.remove();
            }, index * SPEED);

            timeouts.push(timeout);

        });
}

function goSlower(){
    SPEED += 100;
    console.log(SPEED);
    deleteSquares();
}
function goFaster(e){

    console.dir(e);
    SPEED -= (e.shift) ? 20 : 5;
    if (SPEED <= 0) SPEED = 1;
    console.log(SPEED);
    deleteSquares();
}

deleteSquares();

function squareIsWithinBounds(squaresInClickedCountry, square){

    let isWithinBounds = false;

    squaresInClickedCountry.forEach(squareInClickedCountry => {

        let squareInClickedCountryBox = squareInClickedCountry.getBoundingClientRect();
        let squareBox = square.getBoundingClientRect();

        //if above / below
        if (
            Math.abs(Math.ceil(squareInClickedCountryBox.top) - Math.ceil(squareBox.top)) <= 30 &&
            Math.abs(Math.ceil(squareInClickedCountryBox.left) - Math.ceil(squareBox.left)) <= 30
        ){
            isWithinBounds = true;
        }

        //if left / right
        if (
            Math.abs(Math.ceil(squareInClickedCountryBox.top) - Math.ceil(squareBox.top)) <= 30 &&
            Math.abs(Math.ceil(squareInClickedCountryBox.left) - Math.ceil(squareBox.left)) <= 30
        ){
            isWithinBounds = true;
        }

    });

    return isWithinBounds;

}

let alreadyClicked = [];

var squaresInClickedCountry = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}





document.addEventListener('click', event => {

    if (event.target.closest('#faster')){
        SPEED -= (event.shiftKey) ? 20 : 5;
        console.log('faster -= ' + SPEED);
        document.querySelector('#slower').textContent = 'slower (' + SPEED + ')';
        document.querySelector('#faster').textContent = 'faster (' + SPEED + ')';
        deleteSquares();
        return;
    }
    if (event.target.closest('#slower')){
        SPEED += (event.shiftKey) ? 200 : 100;
        console.log('slower += ' + SPEED);
        document.querySelector('#slower').textContent = 'slower (' + SPEED + ')';
        document.querySelector('#faster').textContent = 'faster (' + SPEED + ')';
        deleteSquares();
        return;
    }
     if (event.target.closest('#pause')){

        let wasPaused = (SPEED === 99999);

        SPEED = (wasPaused) ? 100 : 99999;

        event.target.textContent = (wasPaused) ? 'pause' : 'play';

        console.log('pause = ' + SPEED);
        deleteSquares();
        return;
     }

    let clickedSquare = event.target.closest('path');

    if (clickedSquare){

        let redoLoop = false;

        squaresInClickedCountry = [];

        let originalCountryColor = clickedSquare.getAttribute('fill');

        console.dir(originalCountryColor);

        squaresInClickedCountry.push(clickedSquare);

        clickedSquare.style.fill = '#000066';
        clickedSquare.style.stroke = '#000066';

        let allSquares = document.querySelectorAll('path');

        const pathsArray = Array.from(document.querySelectorAll('path'));

        shuffleArray(pathsArray);

        pathsArray.forEach(square => {

            if (
                square.getAttribute('fill') === originalCountryColor &&
                squareIsWithinBounds(squaresInClickedCountry, square)
            ){

                //square.dispatchEvent(new MouseEvent("click",{bubbles: true, cancellable: true}));

                square.style.fill = '#000066';
                square.style.stroke = '#000066';

                squaresInClickedCountry.push(square);

            }

        });

    }





    return;



    let clickedCountry = event.target.closest('[data-country]');


    if (clickedCountry){

        let country = clickedCountry.getAttribute('data-country');

        if (confirm('you want to kill ' + country + '?')){
            startWar(country);
        }

        console.dir(country);

    }

});

