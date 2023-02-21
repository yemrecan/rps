let playerScore = 0;
let computerScore = 0;

console.log("merhaba");
// "rock" | "paper" | "scissors" stringlerinden birini rastgele döner
function getComputerChoice() {
    // birinci yaklasim
    // const rastgeleSayi = Math.floor(Math.random() * 3)
    // if(rastgeleSayi === 0){
    //     return "rock"
    // }
    // else if(rastgeleSayi === 1){
    //     return "paper"
    // }
    // else{
    //     return "scissors"
    // }

    //ikinci dizi yaklasimi
    const secenekler = ["rock", "paper", "scissors"]
    const rastgeleSayi = Math.floor(Math.random() * 3)  // 0,1,2
    return secenekler[rastgeleSayi]
}


function playRound(playerSelection, computerSelection) {
   if(!playerSelection){
    return 'HATALI SECIM'
   }
    console.log(playerSelection);
    // girileni otomatik olarak kucult
    playerSelection = playerSelection.toLowerCase()


    // girilen deger rock paper scissors disinda bir sey ise hata ver
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ){
        return "HATALI SECIM"
    }

    // berabere oldugu durumlarda beraber de
    if(playerSelection === computerSelection){
        return "berabere"
    }
    // oyuncunun kazandigi durumlarda kazandiniz de
    if((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++
        return "✅ kazandin"
    } else{
        computerScore++
        return "💻 pc kazandi"
    }

}


// game adında bir fonksiyon olustur bu fonksiyon calistirildiginda 5 tur round oynansin... 
function game(){
    for(let i=0;i < 5;i++)
    {
        console.log(playRound(prompt("sec: 'rock|paper|scissors'"),getComputerChoice()));
    }
    // console.log(`bilgisayar= ${computerScore} sen= ${playerScore}`);
    // kazanani ilan et 
    if(playerScore > computerScore){
        console.log(`sen kazandin | senin skorun = ${playerScore} | pc skoru = ${computerScore}`);
    }
    else if(playerScore === computerScore){
        console.log(`berabere | senin skorun = ${playerScore} | pc skoru = ${computerScore}`);
    }
    else{
        console.log(`pc kazandi | pc skoru = ${computerScore} | senin skorun = ${playerScore}`);
    }

}

game()


