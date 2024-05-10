
function randomDice(){
    // var randomNo1=Math.floor(Math.random()*6)+1;
    // var randomNo2=Math.floor(Math.random()*6)+1;
    // console.log(randomNo1);
    // console.log(randomNo2);
    // if(randomNo1==1){
    //     document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    // }
    // else if(randomNo1==2){
    //     document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    // }
    // else if(randomNo1==3){
    //     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    // }
    // else if(randomNo1==4){
    //     document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    // }
    // else if(randomNo1==5){
    //     document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    // }
    // else if(randomNo1==6){
    //     document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    // }

    // if(randomNo2==1){
    //     document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    // }
    // else if(randomNo2==2){
    //     document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    // }
    // else if(randomNo2==3){
    //     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    // }
    // else if(randomNo2==4){
    //     document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    // }
    // else if(randomNo2==5){
    //     document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    // }
    // else if(randomNo2==6){
    //     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    // }

    var randomNo1=Math.floor(Math.random()*6)+1;
    var dice1Src = "./images/"+"dice"+randomNo1+".png";
    document.querySelector(".img1").setAttribute("src",dice1Src);

    var randomNo2=Math.floor(Math.random()*6)+1;
    var dice2Src = "./images/"+"dice"+randomNo2+".png";
    document.querySelector(".img2").setAttribute("src",dice2Src);


    if(randomNo1>randomNo2){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if(randomNo1<randomNo2){
        document.querySelector("h1").innerHTML= "Player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="Its a draw";
    }
    
}

randomDice();