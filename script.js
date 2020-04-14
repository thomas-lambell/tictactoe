//setup query listeners for the squares
var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        alert("clicked");
})}