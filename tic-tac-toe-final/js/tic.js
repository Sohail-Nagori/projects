let resetFromSinglePlayer=0;
let playerTurn='0';
let count=0;
let win=0;
let player0color='Sienna';
let playerxcolor='DarkBlue';
function isWinning(column)
{
let i,j;
let match=0;
if(column>=0&&column<=2)i=0;
else if(column>=3&&column<=5)i=3;
else i=6;
for(j=i;j<i+3;j++)
{
if(document.getElementById('btn'+j).innerHTML==playerTurn)
{
match++;
if(match==3)
{
document.getElementById('btn'+j).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(j-1)).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(j-2)).style.backgroundColor='MediumSeaGreen';
return true;
}
}
}
match=0;
if(column==0||column==3||column==6)i=0;
else if(column==1||column==4||column==7)i=1;
else i=2;
for(j=0;j<3;j++,i+=3)
{
if(document.getElementById('btn'+i).innerHTML==playerTurn)
{
match++;
if(match==3)
{
document.getElementById('btn'+i).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-3)).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-6)).style.backgroundColor='MediumSeaGreen';
return true;
}
}
}
match=0;
for(i=0;i<=8;i+=4)
{
if(document.getElementById('btn'+i).innerHTML==playerTurn)
{
match++;
if(match==3)
{
document.getElementById('btn'+i).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-4)).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-8)).style.backgroundColor='MediumSeaGreen';
return true;
}
}
}
match=0;
for(i=2;i<=6;i+=2)
{
if(document.getElementById('btn'+i).innerHTML==playerTurn)
{
match++;
if(match==3)
{
document.getElementById('btn'+i).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-2)).style.backgroundColor='MediumSeaGreen';
document.getElementById('btn'+(i-4)).style.backgroundColor='MediumSeaGreen';
return true;
}
}
}
return false;
}

function fillGrid(column)
{
if(win)return;
var btn=document.getElementById('btn'+column);
if(btn.innerHTML!='')return;
if(playerTurn=='0')
{
btn.style.color=player0color;
btn.innerHTML='0';
if(isWinning(column))
{
win=1;
document.getElementById('turn').innerHTML='Player '+playerTurn+' won!';
return;
}
count++;
document.getElementById('turn').innerHTML='Player x turn';
playerTurn='x';
}
else
{
btn.style.color=playerxcolor;
btn.innerHTML='x';
if(isWinning(column))
{
win=1;
document.getElementById('turn').innerHTML='Player '+playerTurn+' won!';
return;
}
count++;
document.getElementById('turn').innerHTML='Player 0 turn';
playerTurn='0';
}
if(count==9)
{
document.getElementById('turn').innerHTML='Tie!';
}
}

function resetGrid()
{
for(var column=0;column<9;column++)
{
var btn='btn'+column;
document.getElementById(btn).innerHTML='';
document.getElementById(btn).style.backgroundColor='';
}
count=0;
win=0;
playerTurn='0';
if(resetFromSinglePlayer)
{
singlePlayer();
}
else document.getElementById('turn').innerHTML='Player 0 turn';
}
function switchToHome()
{
document.getElementById('homepage').submit();
}

function multiPlayer()
{
resetFromSinglePlayer=0;
var html="<h1 class='tic-tac-toe-title'>Play Tic-Tac-Toe</h1><br><button class='tic-tac-toe-btn' id='btn0' onclick='fillGrid(0)'></button><button class='tic-tac-toe-btn' id='btn1' onclick='fillGrid(1)'></button><button class='tic-tac-toe-btn' id='btn2' onclick='fillGrid(2)'></button><br><button class='tic-tac-toe-btn' id='btn3' onclick='fillGrid(3)'></button><button class='tic-tac-toe-btn' id='btn4' onclick='fillGrid(4)'></button><button class='tic-tac-toe-btn' id='btn5' onclick='fillGrid(5)'></button>&nbsp;&nbsp;&nbsp;&nbsp;<span id='turn' class='tic-tac-toe-turn'>Player 0 turn</span><br><button class='tic-tac-toe-btn' id='btn6' onclick='fillGrid(6)'></button><button class='tic-tac-toe-btn' id='btn7' onclick='fillGrid(7)'></button><button class='tic-tac-toe-btn' id='btn8' onclick='fillGrid(8)'></button><br><br><button class='tic-tac-toe-reset-btn' onclick='resetGrid()'>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class='tic-tac-toe-back-btn' onclick='javascript:switchToHome()'>Back</button><form id='homepage' action='index.html'</form>";
document.body.innerHTML=html;
}

var turnOfPlayer;
var totalMoves;
function singlePlayer()
{
resetFromSinglePlayer=1;
var rnum=(Math.floor(Math.random()*10))%2;
win=0;
totalMoves=0;
if(rnum==1)
{
turnOfPlayer='player';
playerTurn='x';
var html="<h1 class='tic-tac-toe-title'>Play Tic-Tac-Toe</h1><br><button class='tic-tac-toe-btn' id='btn0' onclick='fillGridOfMultiplayer(0)'></button><button class='tic-tac-toe-btn' id='btn1' onclick='fillGridOfMultiplayer(1)'></button><button class='tic-tac-toe-btn' id='btn2' onclick='fillGridOfMultiplayer(2)'></button><br><button class='tic-tac-toe-btn' id='btn3' onclick='fillGridOfMultiplayer(3)'></button><button class='tic-tac-toe-btn' id='btn4' onclick='fillGridOfMultiplayer(4)'></button><button class='tic-tac-toe-btn' id='btn5' onclick='fillGridOfMultiplayer(5)'></button>&nbsp;&nbsp;&nbsp;&nbsp;<span id='turn' class='tic-tac-toe-turn'>Your turn(x)</span><br><button class='tic-tac-toe-btn' id='btn6' onclick='fillGridOfMultiplayer(6)'></button><button class='tic-tac-toe-btn' id='btn7' onclick='fillGridOfMultiplayer(7)'></button><button class='tic-tac-toe-btn' id='btn8' onclick='fillGridOfMultiplayer(8)'></button><br><br><button class='tic-tac-toe-reset-btn' onclick='resetGrid()'>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class='tic-tac-toe-back-btn' onclick='javascript:switchToHome()'>Back</button><form id='homepage' action='index.html'</form>";
document.body.innerHTML=html;
}
else
{
turnOfPlayer='computer';
playerTurn='x';
var html="<h1 class='tic-tac-toe-title'>Play Tic-Tac-Toe</h1><br><button class='tic-tac-toe-btn' id='btn0' onclick='fillGridOfMultiplayer(0)'></button><button class='tic-tac-toe-btn' id='btn1' onclick='fillGridOfMultiplayer(1)'></button><button class='tic-tac-toe-btn' id='btn2' onclick='fillGridOfMultiplayer(2)'></button><br><button class='tic-tac-toe-btn' id='btn3' onclick='fillGridOfMultiplayer(3)'></button><button class='tic-tac-toe-btn' id='btn4' onclick='fillGridOfMultiplayer(4)'></button><button class='tic-tac-toe-btn' id='btn5' onclick='fillGridOfMultiplayer(5)'></button>&nbsp;&nbsp;&nbsp;&nbsp;<span id='turn' class='tic-tac-toe-turn'>Your turn(0)</span><br><button class='tic-tac-toe-btn' id='btn6' onclick='fillGridOfMultiplayer(6)'></button><button class='tic-tac-toe-btn' id='btn7' onclick='fillGridOfMultiplayer(7)'></button><button class='tic-tac-toe-btn' id='btn8' onclick='fillGridOfMultiplayer(8)'></button><br><br><button class='tic-tac-toe-reset-btn' onclick='resetGrid()'>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;<button class='tic-tac-toe-back-btn' onclick='javascript:switchToHome()'>Back</button><form id='homepage' action='index.html'</form>";
document.body.innerHTML=html;
var pos=Math.floor(Math.random()*10);
if(pos>8)pos=8;
document.getElementById('btn'+pos).innerHTML=playerTurn;
document.getElementById('btn'+pos).style.color='DarkBlue';
turnOfPlayer='player';
playerTurn='0';
totalMoves=1;
}
}

function fillGridOfMultiplayer(column)
{
if(win)return;
var btn=document.getElementById('btn'+column);
if(btn.innerHTML!='')return;
if(turnOfPlayer==='player')
{
if(playerTurn==='0')btn.style.color='Sienna';
else btn.style.color='DarkBlue';
btn.innerHTML=playerTurn;
if(isWinning(column))
{
win=1;
document.getElementById('turn').innerHTML='You won!';
return;
}
totalMoves++;
if(totalMoves==9)
{
document.getElementById('turn').innerHTML='Tie!';
return;
}
if(playerTurn==='0')playerTurn='x';
else playerTurn='0';
turnOfPlayer='computer';
document.getElementById('turn').innerHTML='Computer turn('+playerTurn+')';
setTimeout(moveOfComputer,2000);
}
}
function moveOfComputer()
{
if(doAttackAndWin())
{
win=1;
document.getElementById('turn').innerHTML='You lost!';
return;
}
if(destroyOpponent())
{
totalMoves++;
if(totalMoves==9)
{
document.getElementById('turn').innerHTML='Tie!';
return;
}
if(playerTurn==='0')playerTurn='x';
else playerTurn='0';
turnOfPlayer='player';
document.getElementById('turn').innerHTML='Your turn('+playerTurn+')';
return;
}

var pos=Math.floor(Math.random()*10);
if(pos>8)pos=8;
var btn=document.getElementById('btn'+pos);
if(btn.innerHTML!='')
{
for(var m=0;m<=8;m++)
{
btn=document.getElementById('btn'+m);
if(btn.innerHTML=='')
{
pos=m;
break;
}
}
}
if(playerTurn==='0')btn.style.color='Sienna';
else btn.style.color='DarkBlue';
btn.innerHTML=playerTurn;
if(isWinning(pos))
{
win=1;
document.getElementById('turn').innerHTML='You lost!';
return;
}
totalMoves++;
if(totalMoves==9)
{
document.getElementById('turn').innerHTML='Tie!';
return;
}
if(playerTurn==='0')playerTurn='x';
else playerTurn='0';
turnOfPlayer='player';
document.getElementById('turn').innerHTML='Your turn('+playerTurn+')';
}

function doAttackAndWin()
{
var kill;
var safe;
var i,j;
var btn;
for(j=0;j<=6;j+=3)
{
kill=0;
safe=0;
for(i=j;i<=j+2;i++)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML===playerTurn)kill++;
else if(btn.innerHTML==='')safe=1;
}
if(kill==2&&safe)
{
for(i=j;i<=j+2;i++)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
btn.style.backgroundColor='MediumSeaGreen';
}
return 1;
}
}



for(j=0;j<=2;j++)
{
kill=0;
safe=0;
for(i=j;i<=3+3+j;i+=3)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML===playerTurn)kill++;
else if(btn.innerHTML==='')safe=1;
}
if(kill==2&&safe)
{
for(i=j;i<=3+3+j;i+=3)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
btn.style.backgroundColor='MediumSeaGreen';
}
return 1;
}
}

for(j=0;j<=2;j+=2)
{
kill=0;
safe=0;
for(i=j;i<=8-j;i+=4-j)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML===playerTurn)kill++;
else if(btn.innerHTML==='')safe=1;
}
if(kill==2&&safe)
{
for(i=j;i<=8-j;i+=4-j)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
btn.style.backgroundColor='MediumSeaGreen';
}
return 1;
}
}
return 0;
}


function destroyOpponent()
{
var opponent;
var safe;
var i,j;
var btn;
for(j=0;j<=6;j+=3)
{
opponent=0;
safe=0;
for(i=j;i<=j+2;i++)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')safe=1;
else if(btn.innerHTML!==playerTurn)opponent++;
}
if(opponent==2&&safe)
{
for(i=j;i<=j+2;i++)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
}
return 1;
}
}



for(j=0;j<=2;j++)
{
opponent=0;
safe=0;
for(i=j;i<=3+3+j;i+=3)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')safe=1;
else if(btn.innerHTML!==playerTurn)opponent++;
}
if(opponent==2&&safe)
{
for(i=j;i<=3+3+j;i+=3)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
}
return 1;
}
}

for(j=0;j<=2;j+=2)
{
opponent=0;
safe=0;
for(i=j;i<=8-j;i+=4-j)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')safe=1;
else if(btn.innerHTML!==playerTurn)opponent++;
}
if(opponent==2&&safe)
{
for(i=j;i<=8-j;i+=4-j)
{
btn=document.getElementById('btn'+i);
if(btn.innerHTML==='')
{
btn.innerHTML=playerTurn;
if(playerTurn==='x')btn.style.color='DarkBlue';
else btn.style.color='Sienna';
}
}
return 1;
}
}
return 0;
}

