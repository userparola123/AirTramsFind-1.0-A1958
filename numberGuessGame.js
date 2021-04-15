var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var refreshButtonClicked = false;
var refreshButton = document.getElementById("refreshButtonNumberGuessGame");
var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];
function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        if(refreshButtonClicked === true){
            alert("really good")
        } else{
            alert("Please enter a number between 1 and 100.");
        }
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;
        if(user_guess < answer){
            msg1.textContent = "Your answer guess is too low.";
            msg2.textContent =  "No. of guesses: " + no_of_guesses
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if(user_guess > answer){
                msg1.textContent = "Your answer guess is too high.";
                msg2.textContent =  "No. of guesses: " + no_of_guesses
                msg3.textContent = "Guessed numbers are: " + guessed_nums;
        }
        else if(user_guess == answer){
            msg1.textContent = "Yippie You Win!!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guesses it in "+ no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
    }
}

refreshButton.addEventListener("click", function(){
    document.getElementById('guess').value = ''
    guessed_nums.length = 0
    no_of_guesses = 0
    document.getElementById("my_btn").disabled = false;
    refreshButtonClicked = true;
    msg1.textContent = "";
    msg2.textContent =  "No. of guesses: " + no_of_guesses
    msg3.textContent = "Guessed numbers are: " + guessed_nums;
    play()
})
