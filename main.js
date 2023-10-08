let userScore = 0;
let computerChoiceScorr = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_scorr");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissore_div = document.getElementById("scissore");

function getComputerChoice(){
    const choices = ["rock","paper","scissore"];
    const rendomNumber = Math.floor(Math.random()*3);
    return choices[rendomNumber]
}

function win(user,computer){
    userScore++;
    userScore_span.innerText =userScore
    computerScore_span.innerText = computerChoiceScorr
    result_p.innerText = `player: ${user} \ncomputer: ${computer} \nyou win`
    document.getElementById(user).classList.add('green_flow');
    setTimeout(function(){document.getElementById(user).classList.remove('green_flow')},300)
}
function loss(user,computer){
    computerChoiceScorr++;
    userScore_span.innerText =userScore
    computerScore_span.innerText = computerChoiceScorr
    result_p.innerText = `player: ${computer} \ncomputer: ${user} \nyou lost`
    document.getElementById(user).classList.add('red_flow');
    setTimeout(function(){document.getElementById(user).classList.remove('red_flow')},300)

}
function tie(user,computer){
    result_p.innerText = `player: ${computer} \ncomputer: ${user} \ntie game`
    document.getElementById(user).classList.add('gray_flow');
    setTimeout(function(){document.getElementById(user).classList.remove('gray_flow')},300)

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rockscissore":
        case "paperrock":
        case "scissorepaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissore":
        case "scissorerock":
            loss(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorescissore":
            tie(userChoice,computerChoice);
            break;
    }
}
 
function main(){
    rock_div.addEventListener("click",(event)=>{
        game("rock")
    })
    paper_div.addEventListener("click",(event)=>{
        game("paper")
    })
    scissore_div.addEventListener("click",(event)=>{
        game("scissore")
    })
}
main()