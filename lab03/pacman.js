let pacmanPos;
let score = 0; 
let numDots;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createGame(n){
    console.log(n);
    let tableau = Array(n);
    console.log(tableau.length);

    this.numDots = n-3;
    console.log("numDots =" + this.numDots);

    //choose pacman position
    this.pacmanPos = getRandomInt(10);
    console.log("pacmanPos= "+this.pacmanPos);

    //choose ghost position
    let ghostPos = this.pacmanPos;
    while (ghostPos == this.pacmanPos){
        ghostPos = getRandomInt(10);
    }
    console.log("ghostPos= "+ghostPos)

    //choose fruit position
    let fruitPos = this.pacmanPos;
    while (fruitPos == this.pacmanPos || fruitPos == ghostPos){
        fruitPos = getRandomInt(10);
    }
    console.log("fruitPos= "+fruitPos);

    //add pacman, ghost, and fruit to tableau at their respective indices
    tableau[this.pacmanPos] = 'C';
    tableau[ghostPos] = '^';
    tableau[fruitPos] = '@';

    for(i=0; i<n; i++){
        if(typeof tableau[i] == 'undefined'){
            tableau[i] = '.';
        }
    }

    console.log(tableau);

    return tableau;
}

function moveLeft(game){
    console.log("Moving left");
    n = game.length;
    newTableau = Array(n);

    for(i=0; i<n; i++){
        newTableau[i] = game[i];
    }
    console.log(newTableau);

    //if pacman is at first position
    if(this.pacmanPos == 0){
        newTableau[n-1] = game[this.pacmanPos];
        if(game[n-1] == '.'){
            eatDot();
        }
    }
    else{
        if((game[(this.pacmanPos -1) %n]) == '.'){
            eatDot();
        }
        newTableau[(this.pacmanPos -1) %n] = game[this.pacmanPos];
    }
    newTableau[this.pacmanPos] = '';
    console.log(newTableau);

    return newTableau;
}

function moveRight(game){
    console.log("Moving right");
    n = game.length;
    newTableau = Array(n);

    for(i=0; i<n; i++){
        newTableau[i] = game[i];
    }
    console.log(newTableau);

    if((game[(this.pacmanPos +1) %n]) == '.'){
        eatDot();
    }

    newTableau[(this.pacmanPos +1) %n] = game[this.pacmanPos];
    newTableau[this.pacmanPos] = '';
    console.log(newTableau);

    return newTableau;
}

function eatDot(){
    console.log("eatDot");
    score++;
    console.log("score = "+score);

    this.numDots--;
    console.log("numDots = "+this.numDots);

    if(this.numDots == 0){
        console.log("YOU WIN!! Creating new game");
        createGame(10);
    }
}

game = createGame(10);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
moveLeft(game);
