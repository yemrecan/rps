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
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "berabere"
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return "berabere"
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "berabere"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "pc kazandi"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "sen kazandin broo"
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "kazandin broo"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "pc kazandi"
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "pc kazandi"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "kazandin broo"
    }

}
