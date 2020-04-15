let playerTwoTurn = false;
let buttonClicked = [[]];

//setup query listeners for the squares
let squares = document.querySelectorAll(".square");
let reset = document.querySelector("#reset")

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

reset.addEventListener("click", function(){
    for (let i = 0; i < squares.length; i++){
        squares[i].textContent = ""
        playerTwoTurn = false;
        buttonClicked[i] = false;
    }
})


//tribute to Tom. LET THERE BE LIGHT!!!
function buttonClickedArray(){
    for (let j = 0; j < 9; j++){
        buttonClicked[j] = [];
        buttonClicked[j][0] = false;
        buttonClicked[j][1] = null;
    }
    // for (let i = 0; i < 9; i++){
    //     buttonClicked[i] = [];
    //     buttonClicked[i][1] = null;
    // }
}