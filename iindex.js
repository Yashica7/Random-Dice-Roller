var randomNumber1=Math.floor(Math.random()*6);
var randomNumber2=Math.floor(Math.random()*6);

var imgarr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

document.querySelector(".img1").setAttribute("src",imgarr[randomNumber1]);
document.querySelector(".img2").setAttribute("src",imgarr[randomNumber2]);

var text;

if(randomNumber1>randomNumber2){
  text="Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
  text="Player 2 wins";
}
else{
  text="Draw"
}

document.querySelector("h1").innerHTML=text;
