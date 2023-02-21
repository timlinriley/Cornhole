// Corn Hole
// Rules: Two Players. First player to 21 points wins.
    // Scoring: 3 points for bag going in the hole. 1 point for bag landing on the box;
    // Points are scored per round basis as such: if player A scores 7 points and player B scores 2 points, then player A socres 5 points that round. if each team scores same amount in a round no points are added to total for that round

    // Rounds continue until someone scores 21 points


    // WIREFRAME:
    // Button to initialize game and reset scores to 0

    // display total scores function
let player1Total = 0;
let player2Total = 0;
    const displayTotal = () => {
        let p1 = document.querySelector('.player1Total')
        p1.innerHTML = player1Total
        let p2 = document.querySelector('.player2Total')
        p2.innerHTML = player2Total
    }
    // display round scores
let player1Round = 0;
let player2Round = 0;
const displayRound = () => {
    let p1 = document.querySelector('.player1Round')
    p1.innerHTML = player1Round
    let p2 = document.querySelector('.player2Round')
    p2.innerHTML = player2Round
}
displayRound()
displayTotal()
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
                displayRound()
                
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
                displayRound()
               

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
                console.log(p1Throws) 
            }

    // round =
        // player A throws 4 times
  
        // player B throws 4 times
        // round is complete after 4 throws per team
        // show bags remaining by starting w/ 4 and 'hiding' each div after throw button pressed
        // increment round score based on where the bag landed
        // after 4 throws per team calculate point difference if any and add to team total points equal to +point differential for that round (if player A throw counter = 4 && player B throw counter =4 then calculate total score)

   

    // after round complete:
        // calculate and increment total score (maybe: if player A thrown 4 times and player B thrown 4 times, check round scores, if statemente like 'if A round score > B round score then A round score - B round score = A total score +A round score)
        // reset round score without effecting total score
            // alert new round starting
        // start new round if total score < 21

    // Winner:
        // if either team point total >= 21 that player is winner