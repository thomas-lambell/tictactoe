let playerTwoTurn = false;
let buttonClicked = [[]];

//setup query listeners for the squares
let squares = document.querySelectorAll(".square");
let reset = document.querySelector("#reset")

setup();

function setup(){

buttonClickedArray();
setupSquares();
resetBtn();

}

function setupSquares(){
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
                    if(!playerTwoTurn && !buttonClicked[i][0]){ 
                        this.textContent = "X";
                        playerTwoTurn = true;
                        buttonClicked[i][0] = true;
                        buttonClicked[i][1] = "X"
                            if(buttonClicked[0][0] && buttonClicked[1][0] && buttonClicked[2][0] && buttonClicked[0][1] === "X" && buttonClicked[1][1] === "X" && buttonClicked[2][1] === "X"){
                                console.log("WINNER!")
                            }
                    } else if(playerTwoTurn && !buttonClicked[i][0]){
                        this.textContent = "O";
                        playerTwoTurn = false;
                        buttonClicked[i][0] = true;
                        buttonClicked[i][1] = "O"
                    }
            })}    
}

//tribute to Tom. LET THERE BE LIGHT!!!
function buttonClickedArray(){
    for (let j = 0; j < 9; j++){
        buttonClicked[j] = [];
        buttonClicked[j][0] = false;
        buttonClicked[j][1] = null;
    } 
}

function resetBtn(){
    reset.addEventListener("click", function(){
        for (let i = 0; i < squares.length; i++){
            squares[i].textContent = ""
            playerTwoTurn = false;
            buttonClicked[i][0] = false;
        }
    })
}