// Corn Hole
// Rules: Two Players. First player to 21 points wins.
    // Scoring: 3 points for bag going in the hole. 1 point for bag landing on the box;
    // Points are scored per round basis as such: if player A scores 7 points and player B scores 2 points, then player A socres 5 points that round. if each team scores same amount in a round no points are added to total for that round

    // Rounds continue until someone scores 21 points


    // WIREFRAME:
    // Button to initialize game and reset scores to 0

    // display total scores function
    const winning = () => {
        if (player1Total > player2Total){
            const bg = document.querySelector('#TS')
            bg.setAttribute('class', 'totalScoreP1')
        }
        else if (player1Total < player2Total){
            const bg1 = document.querySelector('#TS')
            bg1.setAttribute('class', 'totalScoreP2')
        } else {
            const bg2 = document.querySelector('#TS')
            bg2.setAttribute('class', 'totalScore')
        }
    }

    const roundLead = () => {
        if (player1Round > player2Round){
            const bg = document.querySelector('#RS')
            bg.setAttribute('class', 'roundScoreP1' )
        }
        else if (player1Round < player2Round){
            const bg2 = document.querySelector('#RS')
             bg2.setAttribute('class', 'roundScoreP2' )
        } else {
            const bg3 = document.querySelector('#RS')
            bg3.setAttribute('class', 'roundScore' )
        }
    }   
    const won = () => {
        if (player1Total >= 21){
            const bg = document.querySelector('body')
            bg.setAttribute('style', "background-color: red")
        }
        else if (player2Total >= 21){
            const bg = document.querySelector('body')
            bg.setAttribute('style', "background-color: blue")
        } else  {
            const bg = document.querySelector('body')
            bg.setAttribute('style', "background-color:  rgb(55, 39, 39)")
        }
    }
    
let player1Total = 0;
let player2Total = 0;
    const displayTotal = () => {
        let p1 = document.querySelector('.p1t')
        p1.innerHTML =` ${player1Total}`
        p1.setAttribute('style','font-size: 60px;')
        let p2 = document.querySelector('.p2t')
        p2.innerHTML = ` ${player2Total}`
        p2.setAttribute('style','font-size: 60px;')
        winning()
    }
    // display round scores
let player1Round = 0;
let player2Round = 0;
const displayRound = () => {
    let p1 = document.querySelector('.p1r')
    p1.innerHTML = ` ${player1Round}`
    p1.setAttribute('style','font-size: 60px;')
    let p2 = document.querySelector('.p2r')
    p2.innerHTML = ` ${player2Round}`
    p2.setAttribute('style','font-size: 60px;')
    roundLead()
}

let player1Dubs = 0;
let player2Dubs = 0;
const displayDubs = () => {
    if (player1Total >= 21){
        player1Dubs ++
    }
    else if (player2Total >= 21){
        player2Dubs ++
    }
    let p1 = document.querySelector('.p1w')
    p1.innerHTML = ` ${player1Dubs}`
    let p2 = document.querySelector('.p2w')
    p2.innerHTML = `${player2Dubs}`
}
// displayRound()
// displayTotal()
    // Throwing:
    let throwOutcome = 0
            // assign throw outcome potential based on %:
                // land off board: 40%
                // land on board 1 point: 40%
                // land in hole: 20%
    // throw functions:
            const p1ThrowBag = () => {
                p1ThrowCounter() 
                throwOutcome = Math.random()
                
                console.log(throwOutcome)
              // land off board:
                if (throwOutcome <= 0.4){
                    console.log('p1 throw landed off board')
                    }
                else if (throwOutcome > 0.4 && throwOutcome <= 0.8){
                    console.log('p1 throw landed on board')
                     player1Round += 1;
                }
                else {
                    console.log('p1 throw in the hole!')
                     player1Round += 3;
                } 
                setTimeout(displayRound, 1010)
                p1Animate()
                setTimeout(roundLead, 1010)
                p1Limiter()
            }

            const p2ThrowBag = () => {
                p2ThrowCounter()
                throwOutcome = Math.random()
                console.log(throwOutcome)
              // land off board:
                if (throwOutcome <= 0.4){
                    console.log('p2 throw landed off board')
                    }
                else if (throwOutcome > 0.4 && throwOutcome <= 0.8){
                    console.log('p2 throw landed on board')
                     player2Round += 1;
                }
                else {
                    console.log('p2 throw in the hole!')
                     player2Round += 3;
                } 
                setTimeout(displayRound,1010)
                p2Animate()
                setTimeout(roundLead, 1010)
                p2Limiter()            
            }
// throw button on click:
            // done!!

        // STYLING TO BE DONE AFTER GAME LOGIC COMPLETE:
            // append bags to board game based on above outcome
              // throwing: 
                // player A throws : red color appears on board
                // player B thows: blue color appears on board
let p1Throws = 0
let p2Throws = 0
            const p1ThrowCounter = () => {
                p1Throws ++
                console.log(p1Throws)
            }

            const p2ThrowCounter = () => {
                p2Throws ++
                console.log(p2Throws) 

            }
             // round =
       
let p1Limit = 4
let p2Limit = 4
 // player A throws 4 times
const evP1 = document.querySelector('.p1Throw')
evP1.addEventListener('click', p1ThrowBag) 
const p1Limiter = () => {
if (p1Throws == p1Limit){
    evP1.removeEventListener('click', p1ThrowBag)
}
}
        // player B throws 4 times
const evP2 = document.querySelector('.p2Throw')
evP2.addEventListener('click', p2ThrowBag) 
const p2Limiter = () => {
if (p2Throws == p2Limit){
    evP2.removeEventListener('click', p2ThrowBag)
}
}

   
  

        // round is complete after 4 throws per team
    // TO BE STYLED AFTER GAME LOGIC COMPLETE:
        // show bags remaining by starting w/ 4 and 'hiding' each div after throw button pressed

        // increment round score based on where the bag landed
            // this is already accomplished in ThrowBag functions

        // after 4 throws per team calculate point difference if any and add to team total points equal to +point differential for that round (if player A throw counter = 4 && player B throw counter =4 then calculate total score)
        // calculate and increment total score (maybe: if player A thrown 4 times and player B thrown 4 times, check round scores, if statemente like 'if A round score > B round score then A round score - B round score = A total score +A round score)
        const calculateTotal = () => {
            if (p1Throws === 4 && p2Throws === 4){
                if (player1Round > player2Round){
                let diff1 = player1Round -= player2Round; 
                player1Total += diff1
                } else if (player1Round < player2Round){
                let diff2 = player2Round -= player1Round;
                player2Total += diff2
                } else {
                    alert('You tied this round! No score added to total')
                }
            }
        }


 
        // start new round if total score < 21

               // reset round score and calculate total score from previous round:
        const newRound = () => {
            calculateTotal()
            displayTotal()
            displayRound()
            p1Throws = 0;
            p2Throws = 0;
            player1Round = 0;
            player2Round = 0;
        displayRound()
        console.log(player1Round)
        console.log(player2Round)
        console.log(player1Total)
        console.log(player2Total)
        resetBags()
        // add throw button event listenrs back after being removed after 4 throws from previous round:
        const evP1 = document.querySelector('.p1Throw')
        evP1.addEventListener('click', p1ThrowBag)
        const evP2 = document.querySelector('.p2Throw')
        evP2.addEventListener('click', p2ThrowBag) 
        won()
        setTimeout(winner, 4000)
        // winner()
        }
        // new round listener

    const nr = document.querySelector('.newRound')
    nr.addEventListener('click', newRound) 
      


        

//  maybe add change to bg color to match winner bag color to indicate win as well that then switches back once the prompt is run. 
    const winner = () => {
        if (player1Total >= 21){
          const winState = prompt(`Player 1 wins! To play again enter 'a' or 'b' to exit`)
            if (winState === 'a'){
                p1Throws = 0;
                p2Throws = 0;
                player1Round = 0;
                player2Round = 0;
                player1Total = 0;
                player2Total = 0;
                displayTotal()
                displayRound()
                const bg = document.querySelector('body')
                bg.setAttribute('style', 'background-color:  rgb(55, 39, 39)')
            }
            else {
                alert('Thanks for playing')
            }
        } else if (player2Total >= 21){
            const winState = prompt(`Player 2 wins! To play again enter 'a' or 'b' to exit`)
            if (winState.toLowerCase() === 'a'){
                p1Throws = 0;
                p2Throws = 0;
                player1Round = 0;
                player2Round = 0;
                player1Total = 0;
                player2Total = 0;
                displayTotal()
                displayRound()
                const bg = document.querySelector('body')
                bg.setAttribute('style', 'background-color:  rgb(55, 39, 39)')
            }
            else {
                alert('Thanks for playing')
            }
        } 
    }

    // after round complete:
       
 

        // Change bag classes to animate throws:

const p1Animate = () => {
    if (p1Throws === 1 && throwOutcome <= 0.4){
        b1 = document.querySelector('.p1Bag1')
        b1.setAttribute('class', 'p1b1Off')
    }
    else if (p1Throws === 1 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b1b = document.querySelector('.p1Bag1')
        b1b.setAttribute('class', 'p1b1On')
    }
    else if (p1Throws === 1 && throwOutcome > 0.8){
        b1c = document.querySelector('.p1Bag1')
        b1c.setAttribute('class', 'p1b1Hole')
    }
    else if (p1Throws === 2 && throwOutcome <= 0.4){
        b2 = document.querySelector('.p1Bag2')
        b2.setAttribute('class', 'p1b2Off')
    }
    else if (p1Throws === 2 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b2b = document.querySelector('.p1Bag2')
        b2b.setAttribute('class', 'p1b2On')
    }
    else if (p1Throws === 2 && throwOutcome > 0.8){
        b2c = document.querySelector('.p1Bag2')
        b2c.setAttribute('class', 'p1b2Hole')
    }
    else if (p1Throws === 3 && throwOutcome <= 0.4){
        b3 = document.querySelector('.p1Bag3')
        b3.setAttribute('class', 'p1b3Off')
    }
    else if (p1Throws === 3 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b3b = document.querySelector('.p1Bag3')
        b3b.setAttribute('class', 'p1b3On')
    }
    else if (p1Throws === 3 && throwOutcome > 0.8){
        b3c = document.querySelector('.p1Bag3')
        b3c.setAttribute('class', 'p1b3Hole')
    }
    else if (p1Throws === 4 && throwOutcome <= 0.4){
        b4 = document.querySelector('.p1Bag4')
        b4.setAttribute('class', 'p1b4Off')
    }
    else if (p1Throws === 4 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b4b = document.querySelector('.p1Bag4')
        b4b.setAttribute('class', 'p1b4On')
    }
    else if (p1Throws === 4 && throwOutcome > 0.8){
        b4c = document.querySelector('.p1Bag4')
        b4c.setAttribute('class', 'p1b4Hole')
    }
}

const p2Animate = () => {
    if (p2Throws === 1 && throwOutcome <= 0.4){
        b1 = document.querySelector('.p2Bag1')
        b1.setAttribute('class', 'p2b1Off')
    }
    else if (p2Throws === 1 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b1b = document.querySelector('.p2Bag1')
        b1b.setAttribute('class', 'p2b1On')
    }
    else if (p2Throws === 1 && throwOutcome > 0.8){
        b1c = document.querySelector('.p2Bag1')
        b1c.setAttribute('class', 'p2b1Hole')
    }
    else if (p2Throws === 2 && throwOutcome <= 0.4){
        b2 = document.querySelector('.p2Bag2')
        b2.setAttribute('class', 'p2b2Off')
    }
    else if (p2Throws === 2 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b2b = document.querySelector('.p2Bag2')
        b2b.setAttribute('class', 'p2b2On')
    }
    else if (p2Throws === 2 && throwOutcome > 0.8){
        b2c = document.querySelector('.p2Bag2')
        b2c.setAttribute('class', 'p2b2Hole')
    }
    else if (p2Throws === 3 && throwOutcome <= 0.4){
        b3 = document.querySelector('.p2Bag3')
        b3.setAttribute('class', 'p2b3Off')
    }
    else if (p2Throws === 3 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b3b = document.querySelector('.p2Bag3')
        b3b.setAttribute('class', 'p2b3On')
    }
    else if (p2Throws === 3 && throwOutcome > 0.8){
        b3c = document.querySelector('.p2Bag3')
        b3c.setAttribute('class', 'p2b3Hole')
    }
    else if (p2Throws === 4 && throwOutcome <= 0.4){
        b4 = document.querySelector('.p2Bag4')
        b4.setAttribute('class', 'p2b4Off')
    }
    else if (p2Throws === 4 && throwOutcome > 0.4 && throwOutcome <= 0.8){
        b4b = document.querySelector('.p2Bag4')
        b4b.setAttribute('class', 'p2b4On')
    }
    else if (p2Throws === 4 && throwOutcome > 0.8){
        b4c = document.querySelector('.p2Bag4')
        b4c.setAttribute('class', 'p2b4Hole')
    }
}

const resetBags = () => {
    p1b1 = document.querySelector('#p1b1')
    p1b1.setAttribute('class', 'p1Bag1')
    p1b2 = document.querySelector('#p1b2')
    p1b2.setAttribute('class', 'p1Bag2')
    p1b3 = document.querySelector('#p1b3')
    p1b3.setAttribute('class','p1Bag3')
    p1b4 = document.querySelector('#p1b4')
    p1b4.setAttribute('class', 'p1Bag4')
    p2b1 = document.querySelector('#p2b1')
    p2b1.setAttribute('class', 'p2Bag1')
    p2b2 = document.querySelector('#p2b2')
    p2b2.setAttribute('class','p2Bag2')
    p2b3 = document.querySelector('#p2b3')
    p2b3.setAttribute('class', 'p2Bag3')
    p2b4 = document.querySelector('#p2b4')
    p2b4.setAttribute('class', 'p2Bag4')
}

// Change 'Venues':

const beach = () => {
    let bg = document.querySelector('.gameBoard');
    bg.setAttribute("style", "background-image: url('https://www.surfertoday.com/images/jamp/page/beach-quotes.jpg')")
}

const backyard = () => {
    let bg = document.querySelector('.gameBoard');
    bg.setAttribute("style", "background-image: url('https://images.contentstack.io/v3/assets/blt3840fc786435e65e/blt953a26bf776f175c/6363b40032031b1042c62d27/photo_14598_(1).jpg')")
}

const bar = () => {
    let bg = document.querySelector('.gameBoard');
    bg.setAttribute("style", "background-image: url('https://ca-times.brightspotcdn.com/dims4/default/12b1a2f/2147483647/strip/true/crop/3502x2338+0+0/resize/1200x801!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F14%2Ffd%2F80d142b74cb197ea093a67c7de87%2Fthe-garten-photo-credit-jake-takeo-3.JPG')")
}


const campground = () => {
    let bg = document.querySelector('.gameBoard');
    bg.setAttribute("style", "background-image: url('https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg')")
}

const instructions = () => {
    let ins = document.querySelector('.instructions')
    ins.setAttribute("style", "display:block")
}

