function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createGame(n){
    console.log(n);
    let tableau = Array(5);
    console.log(tableau.length);

    //choose pacman position
    let pacmanPos = getRandomInt(10);
    console.log("pacmanPos= "+pacmanPos)

    //choose ghost position
    let ghostPos = pacmanPos;
    while (ghostPos == pacmanPos){
        ghostPos = getRandomInt(10);
    }
    console.log("ghostPos= "+ghostPos)

    //choose fruit position
    let fruitPos = pacmanPos;
    while (fruitPos == pacmanPos || fruitPos == ghostPos){
        fruitPos = getRandomInt(10);
    }
    console.log("fruitPos= "+fruitPos);

    //add pacman, ghost, and fruit to tableau at their respective indices
    tableau[pacmanPos] = 'C';
    tableau[ghostPos] = '^';
    tableau[fruitPos] = '@';

    for(i=0; i<n; i++){
        if(typeof tableau[i] == 'undefined'){
            tableau[i] = '.';
        }
    }

    console.log(tableau);



}

createGame(10);