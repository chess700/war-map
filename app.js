var SPEED = 10

let svg = document.querySelector('svg');

//1500 730

var timeouts = [];

function deleteSquares(){

    let squares = svg.querySelectorAll('path');

    if (timeouts && timeouts.length){
        timeouts.forEach(timeout => {
            clearTimeout(timeout);
        });
        timeouts = [];
    }

    squares.forEach((square, index) => {
        let timeout = setTimeout(function(){
            square.remove();
        }, index * SPEED);

        timeouts.push(timeout);

    });
}

function goSlower(){
    SPEED += 1;
    console.log(SPEED);
    deleteSquares();
}
function goFaster(){
    SPEED -= 1;
    if (SPEED <= 0) SPEED = 1;
    console.log(SPEED);
    deleteSquares();
}

deleteSquares();
