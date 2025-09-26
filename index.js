const hagara = document.getElementById("hagara");
const warqa = document.getElementById("warqa");
const makas = document.getElementById("makas");
const computer = document.getElementById("computer");
const user = document.getElementById("user");
const result = document.getElementById("result");
let pointsElement = document.getElementById("points");
let computerElement = document.getElementById("computerScore");
let finalResult = document.getElementById("finalResult"); 

let score = 0 
let computerScore = 0;

function newGame(){
    location.reload();
}

function play(x){

    let y = Math.floor(Math.random()*3)+1;
    switch(y){
        case 1:
            if(x === 1 ){
                computer.src = "choose/hagara.jpeg";
                user.src = "choose/hagara.jpeg";
                result.textContent = "TIE!";
                score+=0.5;
                computerScore+=0.5;
            }
            else if(x === 2){
                computer.src = "choose/hagara.jpeg";
                user.src = "choose/warqa.jpeg";
                result.textContent = "WIN!";
                score++;
            }
            else if(x === 3){
                computer.src = "choose/hagara.jpeg";
                user.src = "choose/makas.jpeg";
                result.textContent = "Lose!";
                computerScore++;
            }
            break;
        case 2:
            if(x === 1 ){
                computer.src = "choose/warqa.jpeg";
                user.src = "choose/hagara.jpeg";
                result.textContent = "lose!";
                computerScore++;
            }
            else if(x === 2){
                computer.src = "choose/warqa.jpeg";
                user.src = "choose/warqa.jpeg";
                result.textContent = "TIE!";
                score+=0.5;
                computerScore+=0.5;
            }
            else if(x === 3){
                computer.src = "choose/warqa.jpeg";
                user.src = "choose/makas.jpeg";
                result.textContent = "WiN!";
                score++;
            }
            break;
        case 3:
            if(x === 1 ){
                computer.src = "choose/makas.jpeg";
                user.src = "choose/hagara.jpeg";
                result.textContent = "WIN!";
                score++;
            }
            else if(x === 2){
                computer.src = "choose/makas.jpeg";
                user.src = "choose/warqa.jpeg";
                result.textContent = "lose!";
                computerScore++;
            }
            else if(x === 3){
                computer.src = "choose/makas.jpeg";
                user.src = "choose/makas.jpeg";
                result.textContent = "TIE!";
                score+=0.5;
                computerScore+=0.5;
            }
            break;
        }
    pointsElement.textContent = "YOU: " + score;
    computerElement.textContent ="Computer: "+ computerScore;

        if(score >= 4 && computerScore < 4){
        finalResult.textContent = "🎉 You have WON!";
        endGame();
    }
    else if(computerScore >= 4 && score < 4){
        finalResult.textContent = "💀 You have LOST!";
        endGame();
    }
    else if(score >= 4 && computerScore >= 4){
        finalResult.textContent = "🤝 It's a TIE!";
        endGame();
    }
    function endGame(){
    hagara.disabled = true;
    warqa.disabled = true;
    makas.disabled = true;
    }
}


hagara.onclick = () => play(1);
warqa.onclick  = () => play(2);
makas.onclick  = () => play(3);
