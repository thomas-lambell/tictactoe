var playerTwoTurn = false;

var squareClicked = []

for (var i = 0; i < 9; i++){
    squareClicked[i] = false;
}

//setup query listeners for the squares
var square1 = document.querySelector("#square1");
var square2 = document.querySelector("#square2");
var square3 = document.querySelector("#square3");
var square4 = document.querySelector("#square4");
var square5 = document.querySelector("#square5");
var square6 = document.querySelector("#square6");
var square7 = document.querySelector("#square7");
var square8 = document.querySelector("#square8");
var square9 = document.querySelector("#square9");

square1.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[0]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[0] = true;
    } else if(playerTwoTurn && !squareClicked[0]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[0] = true;
    }   
})

square2.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[1]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[1] = true;
    } else if(playerTwoTurn && !squareClicked[1]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[1] = true;
    }   
})
square3.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[2]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[2] = true;
    } else if(playerTwoTurn && !squareClicked[2]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[2] = true;
    }   
})
square4.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[3]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[3] = true;
    } else if(playerTwoTurn && !squareClicked[3]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[3] = true;
    }   
})
square5.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[4]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[4] = true;
    } else if(playerTwoTurn && !squareClicked[4]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[4] = true;
    }   
})
square6.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[5]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[5] = true;
    } else if(playerTwoTurn && !squareClicked[5]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[5] = true;
    }   
})
square7.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[6]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[6] = true;
    } else if(playerTwoTurn && !squareClicked[6]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[6] = true;
    }   
})
square8.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[7]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[7] = true;
    } else if(playerTwoTurn && !squareClicked[7]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[7] = true;
    }   
})
square9.addEventListener("click", function(){
    if(!playerTwoTurn && !squareClicked[8]){ 
        this.textContent = "X";
        playerTwoTurn = true;
        squareClicked[8] = true;
    } else if(playerTwoTurn && !squareClicked[8]){
        this.textContent = "O";
        playerTwoTurn = false;
        squareClicked[8] = true;
    }   
})
