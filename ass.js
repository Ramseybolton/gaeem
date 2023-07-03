var randomnumber1= Math.floor(Math.random()*6 )+1;
var randomImage1= "dice"+randomnumber1+".png";
var source="images/"+randomImage1;

var player1= document.querySelectorAll("img")[0];
player1.setAttribute("src", source);

var randomnumber2= Math.floor(Math.random()*6) +1;
var randomImage2= "dice"+randomnumber2+".png";
var source2="images/"+randomImage2;

var player2= document.querySelectorAll("img")[1];
player2.setAttribute("src", source2);

if (randomnumber1>randomnumber2) {
    document.querySelector("h1").textContent="PLAYER 1 WINS";
    
}

else if (randomnumber1<randomnumber2) {
    document.querySelector("h1").textContent="PLAYER 2 WINS";
    
}
else{
    document.querySelector("h1").textContent="Tts a TIE!!";
}














