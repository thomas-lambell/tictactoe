var playerTwoTurn = false;

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
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }   
})
square2.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square3.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square4.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square5.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square6.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square7.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square8.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})
square9.addEventListener("click", function(){
    if(!playerTwoTurn){ 
        this.textContent = "X";
        playerTwoTurn = true;
    } else if(playerTwoTurn){
        this.textContent = "O";
        playerTwoTurn = false;
    }
})

// function setup(){

// for (var i = 0; i < squares.length; i++){
//     squares[i].addEventListener("click", function(){
//         if(!playerTwoTurn){ 
//             this.textContent = "X";
//             playerTwoTurn = true;
//         } else if(playerTwoTurn){
//             this.textContent = "O";
//             playerTwoTurn = false;
//         }
// })}
// }
