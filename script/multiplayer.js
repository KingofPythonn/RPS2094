player1= 0;
player2=0;

var player1_score=0; 
var player2_score=0; 

window.addEventListener("keydown", function (event) {

    const result=document.getElementById("result");
    const winner=document.getElementById("winner"); 

    if (event.defaultPrevented) {
      return; 
    }
    switch (event.key) {
      case "ArrowUp":
        player2=2;
       
        break;
      case "ArrowLeft":
        player2=1;
        
      break;
      case "ArrowRight":
        player2=3;
        
        break;
      case "a":
        player1=1;
        
        break;
      case "s":
        player1=2;
        
        break;
      case "d":
        player1=3;
        
        break;
    }

    
    if (player1!=0 && player2!=0){
        if(player1==1){
            if(player2==1){
                winner.innerText="DRAW";
                winner.style.color="rgb(255,193,7)";
               
            } else if(player2==2){
                winner.innerText="PLAYER 2 WIN";
                winner.style.color="green";
                player2_score++;
            } else if(player2==3){
                winner.innerText="PLAYER 1 WIN";
                winner.style.color="red";
                player1_score++;
            }
        } else if (player1==2) {
            if(player2==2){
                winner.innerText="DRAW";
                winner.style.color="rgb(255,193,7)";
               
            } else if(player2==3){
                winner.innerText="PLAYER 2 WIN";
                winner.style.color="green";
                player2_score++;
            } else if(player2==1){
                winner.innerText="PLAYER 1 WIN";
                winner.style.color="red";
                player1_score++;
            }
        } else if (player1==3){
            if(player2==3){
                winner.innerText="DRAW";
                winner.style.color="rgb(255,193,7)";
            } else if(player2==1){
                winner.innerText="PLAYER 2 WIN";
                winner.style.color="green";
                player2_score++;
            } else if(player2==2){
                winner.innerText="PLAYER 1 WIN";
                winner.style.color="red";
                player1_score++;
            }
        }
        result.innerText=`Player1--- : ${player1_score} | PLayer2--- : ${player2_score}`;
        player1= 0;
        player2=0;
    }

    event.preventDefault();
  }, true);