let playerTwoTurn = false;
let buttonClicked = [];

//setup query listeners for the squares
let squares = document.querySelectorAll(".square");

setup();

function setup(){

buttonClickedArray();

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
                if(!playerTwoTurn && !buttonClicked[i]){ 
                    this.textContent = "X";
                    playerTwoTurn = true;
                    buttonClicked[i] = true;
                } else if(playerTwoTurn && !buttonClicked[i]){
                    this.textContent = "O";
                    playerTwoTurn = false;
                    buttonClicked[i] = true;
                }
        })}
}


//tribute to Tom. LET THERE BE LIGHT!!!
function buttonClickedArray(){
    for (let j = 0; j < 9; j++){
        buttonClicked[j] = false;
    }

}


