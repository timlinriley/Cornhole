# Cornhole
This game simulates the yard game Cornhole and is built with HTML, CSS, and Javascript.

To play the game click on the 'P1 Throw' and 'P2 Throw' buttons. Each round consists of 4 throws per user. After each user has thrown 4 times, click on the 'New Round' button to calculate the total score and start a new round.

Approach:

the throw outcomes are randomized using Math.random() and a series of if statement conditions will award scoring + and the throw animation based on the random number produced.
Once each round is finished the 'new round' button will calculate the total score, reset the throw count and reset the animations allowing for rounds to continue.
Gameplay continues until a player reaches 21 total score points.
After a playe reaches 21, users have the option to play another game or to exit.
