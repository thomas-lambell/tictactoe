let playerTwoTurn = false;
let buttonClicked = [[]];
var gameWon = false;

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
                        gameWonTopRow();
                        gameWonMiddleRow();
                        gameWonBottomRow();
                        gameWonLeftColumn();
                        gameWonMiddleColumn();
                        gameWonRightColumn();
                            if(gameWon){
                                console.log("WINNER!");
                            }
                    } else if(playerTwoTurn && !buttonClicked[i][0]){
                        this.textContent = "O";
                        playerTwoTurn = false;
                        buttonClicked[i][0] = true;
                        buttonClicked[i][1] = "O"
                    }
            })}    
}

function gameWonTopRow(){

    for(var i = 0; i < 3; i++){
        
    }

    // if (buttonClicked[0][1] === "X" && buttonClicked[1][1] === "X" && buttonClicked[2][1] === "X"){
    //     gameWon = true;
    // }
}

function gameWonMiddleRow(){
    if (buttonClicked[3][1] === "X" && buttonClicked[4][1] === "X" && buttonClicked[5][1] === "X"){
        gameWon = true;
    }
}

function gameWonBottomRow(){
    if (buttonClicked[6][1] === "X" && buttonClicked[7][1] === "X" && buttonClicked[8][1] === "X"){
        gameWon = true;
    }
}

function gameWonLeftColumn(){
    if (buttonClicked[0][1] === "X" && buttonClicked[3][1] === "X" && buttonClicked[6][1] === "X"){
        gameWon = true;
    }
}

function gameWonMiddleColumn(){
    if (buttonClicked[1][1] === "X" && buttonClicked[4][1] === "X" && buttonClicked[7][1] === "X"){
        gameWon = true;
    }
}

function gameWonRightColumn(){
    if (buttonClicked[2][1] === "X" && buttonClicked[5][1] === "X" && buttonClicked[8][1] === "X"){
        gameWon = true;
    }
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
            squares[i].textContent = "";
            gameWon = false;
            playerTwoTurn = false;
            buttonClicked[i][0] = false;
            buttonClicked[i][1] = "";
        }        
    })
    
}