let userCount=0;
let compCount=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 
const msg1 = document.querySelector("#compsChoice");
const userScorePara = document.querySelector("#users-score");
const compScorePara = document.querySelector("#comp-score");

const generateComp=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame=()=>{
    msg.innerText = "Draw. Play again.😅!";
    msg.style.backgroundColor="#C1E1C1";
};
const showWinner=(userWin)=>{
       if(userWin){
        userCount++;
        userScorePara.innerText=userCount;
        msg.innerText = "YOU WIN🤩!";
        msg.style.backgroundColor="#93C572";
       }
       else{
        compCount++;
        compScorePara.innerText=compCount;
        msg.innerText = `YOU LOST😞!`;
        msg.style.backgroundColor="red";
       }
};

const playGame=(userChoice)=>{
  const compChoice=generateComp();
  msg1.innerText =compChoice;
  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice === "rock"){
        userWin=compChoice==="paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin=compChoice === "scissors" ? false : true;
    }
    else{
        userWin=compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });