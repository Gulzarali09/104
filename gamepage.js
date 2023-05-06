// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
// count of attempts
var n = 1;
var playername = localStorage.getItem("player_name" , playername);
function submit()
{
    var x = document.getElementById("guessField").value;
    if(x == y)
{
alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN"
 + guess + " GUESS ");
var guess = 1;
}else if(x > y) /* if guessed number is greater
than actual number*/
{
guess++;
alert ("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
guess++;
alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}
