const playerScoreSpan = document.querySelector('#player-score')
const computerScoreSpan = document.querySelector('#computer-score')
const durumSpan = document.querySelector("#durum")
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resetButton = document.querySelector('#reset')



let playerScore = 0;
let computerScore = 0;


resetButton.addEventListener('click', ()=> {
    console.log("resetlemeye basladim..");
    // ilk once jsdeki skorlari sifirla
    playerScore = 0;
    computerScore = 0;

    // sonra htmldeki skorlari sifirla
    playerScoreSpan.innerText = playerScore;
    computerScoreSpan.innerText = computerScore;

    // butonlari aktif et
    rockButton.disabled = false
       scissorsButton.disabled = false
       paperButton.disabled = false

       // durumu sifirla
       durumSpan.innerText = ""


}) 

function tiklamayiHallet (event) {
    const kullaniciSecenek = event.target.textContent.toLowerCase()

    // bir round oyna
    const sonuc = playRound(kullaniciSecenek,getComputerChoice())
    if(sonuc === 'berabere'){
        durumSpan.innerText = "Berabere!"
    } 
    else if(sonuc === '✅ kazandin'){
        durumSpan.innerText = "Kazandın!"
    }else{
        durumSpan.innerText = "Kaybettin!"

    }
    // skor metinlerini guncelle
    playerScoreSpan.innerText = playerScore
    computerScoreSpan.innerText = computerScore

    if(playerScore === 5 || computerScore === 5) {
       const sonucMetni = `OYUN BITTI ve KAZANAN = ${playerScore === 5 ? 'SENSIN' : 'BILGISAYAR'}`
       durumSpan.innerText = sonucMetni
       // butonlari iptal et
       rockButton.disabled = true
       scissorsButton.disabled = true
       paperButton.disabled = true
    }
}
rockButton.addEventListener('click', tiklamayiHallet)
paperButton.addEventListener('click', tiklamayiHallet)
scissorsButton.addEventListener('click', tiklamayiHallet)







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
    if (!playerSelection) {
        return 'HATALI SECIM'
    }
    // girileni otomatik olarak kucult
    playerSelection = playerSelection.toLowerCase()


    // girilen deger rock paper scissors disinda bir sey ise hata ver
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "HATALI SECIM"
    }

    // berabere oldugu durumlarda beraber de
    if (playerSelection === computerSelection) {
        return "berabere"
    }
    // oyuncunun kazandigi durumlarda kazandiniz de
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        console.log("player scoru arttirdim ve degeri bu",playerScore);
        return "✅ kazandin"
    } else {
        computerScore++
        return "💻 pc kazandi"
    }

}




