let cardId = document.getElementById('cardId');
let cardStyle = document.getElementById('cardStyle');
let cardColor = card.style.color
function setCard() {
    const card = document.getElementById(cardId.value);
    card.style.color = cardStyle.value;
    console.log(card)
}

// function reset() {
//     carId.addEventListener('click', function(){
//     carId.reset();
//     })
// }

function reset(){
    const resetButton = document.querySelectorAll("#cardId", "#cardStyle");
        document.location.href='';    
    }
