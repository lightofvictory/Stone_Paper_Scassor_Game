do{ 
let a=prompt("Enter the 1.Stone 2.Paper 3.Scissor");
let d=["stone","paper","scissor"];
let e=d.length;
let c= Math.floor(Math.random()*e);
let g=d[c];
if(a==g)  // stone=paper=scissor
{alert("Match Drawn");}
else if( a==d[0] && g==d[1])  //stone vs paper
{alert(" Computer Win");}
else if( a==d[0]&& g==d[2]) // stone vs scissor
{alert(" You Win");}
else if( a==d[1] && g==d[0])  //paper vs stone
{alert("You Win ");}
else if( a==d[1]&& g==d[2]) // paper vs scissor
{alert("computer Win ");}
else if( a==d[2] && g==d[0])  //scissor vs stone
{alert("Computer Win ");}
else if( a==d[2] && g==d[1])  // scissor vs paper
{alert(" You Win");}
else
{alert("Invalid");} 
var z=confirm("Enter Do You Want to Play");
}while(z===true);
alert("Thank you");





