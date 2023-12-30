import { photos } from './data.js'
const allPhotos = [...photos, ...photos]
const main = document.querySelector("main")
const section = document.querySelector("section")
const startGame = document.querySelector("button")


function shuffle(array) { // A  way to shuffle an array
    for (let i = array.length - 1; i > 0; i--) {
       let randomIndex = Math.floor(Math.random() *  (i+1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}



 // Shuffle the photos


function buildCard(photo) { // Render a photo in the browser as a card 
	return `<div class="card--container" >
			<div class="card" id= ${photo.url}.jpg>
					<div class="card--front">
                        <img class= card--front--content src = ${photo.url}>
                    </div>
					<div class="card--back">
                        <p>2023</p>
                    </div>
			</div>
		</div>`
    
}

startGame.addEventListener("click", function() {
    const cardContainers = allPhotos.map(photo => buildCard(photo)).join("")
    shuffle(allPhotos)
    section.style.display = "none"
    main.innerHTML = cardContainers
})

const openedCards = []
document.addEventListener("click", function(e){
   if (e.target.closest(".card--container")) {
       const cardContainer = e.target.closest(".card--container")
       const card = cardContainer.querySelector(".card")
        card.classList.add("flip")
        openedCards.push(card)
         if (openedCards.length >=2) {
            const prevCard = openedCards[openedCards.length-2]
            const currentCard = openedCards[openedCards.length-1]
           if (prevCard.id === currentCard.id){
            openedCards.length = 0
            } else {
           prevCard.classList.toggle("flip")
            }  
         }
    }  
})


