var x,y;
/* first dice number generation */

x= Math.random();
x=x*6;
x=x+1;
x=Math.floor(x);

/* first dice number generation */

y= Math.random();
y=y*6;
y=y+1;
y=Math.floor(y);

/*changing the heading according to the result */
if(x>y){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(y>x){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "It's A Tie";
}



/*adding pictures according to the number */
switch(x){
    case 1 :  
        document.querySelector('.img1').setAttribute('src','images/dice1.png');
    break;
    case 2 : 
        document.querySelector('.img1').setAttribute('src','images/dice2.png');
    break;
    case 3 :
        document.querySelector('.img1').setAttribute('src','images/dice3.png');
    break;
    case 4 :  
        document.querySelector('.img1').setAttribute('src','images/dice4.png');
    break;
    case 5 : 
        document.querySelector('.img1').setAttribute('src','images/dice5.png');
    break;
    case 6 :
        document.querySelector('.img1').setAttribute('src','images/dice6.png');
    break;
   
}

switch(y){
    case 1 :  
        document.querySelector('.img2').setAttribute('src','images/dice1.png');
    break;
    case 2 : 
        document.querySelector('.img2').setAttribute('src','images/dice2.png');
    break;
    case 3 :
        document.querySelector('.img2').setAttribute('src','images/dice3.png');
    break;
    case 4 :  
        document.querySelector('.img2').setAttribute('src','images/dice4.png');
    break;
    case 5 : 
        document.querySelector('.img2').setAttribute('src','images/dice5.png');
    break;
    case 6 :
        document.querySelector('.img2').setAttribute('src','images/dice6.png');
    break;
   
}