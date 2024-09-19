let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const Userscorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");
const popUp = document.querySelector("#pop-up");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "Black";
}

const showWinner = (userwin, userChoice, compChoice)=>{
    
    if(userwin){
        userScore++;
        Userscorepara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "Blue";
        
    } else {
        CompScore++;
        CompScorepara.innerText = CompScore++;
        console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    
    if(userScore > CompScore){
        showPopUp();
    }
    
};

const showPopUp=()=>{
    popUp.style.display = "block"
    setTimeout(() => {
        
        popUp.classList.add('show');
    }, 10);

    setTimeout(() => {
        
        popUp.classList.remove('show');
    }, 4000);
};


const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();

    } else {
        let userwin = true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false:true;
        } else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ?false : true;
        } else {
            userwin=compChoice === "rock"?false:true;
        }
        showWinner(userwin, compChoice, userChoice )
    }
    
};




choices.forEach((choice)=>{
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
});