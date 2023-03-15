var randomNumber1=Math.floor(Math.random()*6+1);
var randomimg="dice"+ randomNumber1 +".png";
var randomimgsrc="images/" + randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsrc);
var randomNumber2=Math.floor(Math.random()*6+1);
 var randomimg2="dice" + randomNumber2 +".png";
 var randomimgsrc2="images/"+randomimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsrc2);
var h1=document.querySelector("h1");
if(randomNumber1>randomNumber2){
  h1.textContent="Player1 won 🚩";
}
else if(randomNumber1<randomNumber2){
  h1.textContent="Player2 won 🚩";
}
else{
  h1.textContent="Draw";
}
