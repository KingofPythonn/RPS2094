let PlayerScore = 0;
let ComputerScore = 0;

const button = document.getElementById("button")
button.addEventListener("click", (event) => {
    event.preventDefault();

    const Paper = document.getElementById("Paper");
    const Rock = document.getElementById("Rock");
    const Scissor = document.getElementById("Scissor");
    let getRandomNumber = Math.floor(Math.random() * 3)+1;

    const game = document.getElementById("game");
    const result = document.getElementById("result");
    const Cturn = document.getElementById("Cturn");

    if(Paper.checked || Rock.checked || Scissor.checked){
        button.textContent = " PLAY AGAIN "
        switch(getRandomNumber){
            case 1:{
                Cturn.innerText = " Computer chose 'Rock'"
                break;
            }
            case 2:{
                Cturn.innerText = " Computer chose 'Scissor'"
                break;
            }
            case 3:{
                Cturn.innerText = " Computer chose 'Paper'"
                break;
            }
        }

    }
    // 1 is Rock, 2 is Scissor and 3 is Paper
    if(Paper.checked){
        switch(getRandomNumber){
            case 1:{
                game.innerText = "You won!";
                game.style.color = "green";
                PlayerScore++;
                break;
            }
            case 2:{
                game.innerText = "Computer won!";
                game.style.color = "red";
                ComputerScore++;                
                break;
            }
            case 3:{
                game.innerText = "Draw!";
                game.style.color = " rgb(255,193,7)";               
                 break;
            }
        } 
    }
    else if(Rock.checked){
        switch(getRandomNumber){
            case 2:{
                game.innerText = "You won!";
                game.style.color = "green";
                PlayerScore++;
                break;
            }
            case 3:{
                game.innerText = "Computer won!";
                game.style.color = "red";
                ComputerScore++;                
                break;
            }
            case 1:{
                game.innerText = "Draw!";
                game.style.color = "rgb(255,193,7)";               
                 break;
            }
        } 
    }
    else if(Scissor.checked){
        switch(getRandomNumber){
            case 3:{
                game.innerText = "You won!";
                game.style.color = "green";
                PlayerScore++;
                break;
            }
            case 1:{
                game.innerText = "Computer won!";
                game.style.color = "red";
                ComputerScore++;                
                break;
            }
            case 2:{
                game.innerText = "Draw!";
                game.style.color = "rgb(255,193,7)";               
                 break;
            }
        } 
    }

    result.innerText = " YOU " + PlayerScore + " : " + ComputerScore + " Ai ";
})

