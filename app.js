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
        return "✅ kazandin"
    } else{
        return "💻 pc kazandi"
    }

}

