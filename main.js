console.log('js is working')

const BoardModule = (() =>{
    const gameBoard = [
        'X', 'O', ' ',
        'X', 'O', 'X',
        ' ', 'O', 'O'
     ];
    


    //detect when a square is clicked

    //associate square DOM elements
    const squares = document.querySelectorAll("div.square");
    for (const square of squares){
    square.addEventListener('click', function(event){
        alert('wuzzup');
        alert(this.id);
        renderBoard(gameBoard, squares);
    });
    }

    //render all contents of the gameboard array to the webpage. 
    const renderBoard = (array, gameGrids) => {
        let i = 0;
        //do something with each item in the array
        array.forEach(element => {
            console.log(element)
        });
        //put that in the corresponding game square
        gameGrids.forEach(element=>{
            console.log(array[i], i);
            element.innerText = array[i];
            i++;
        })
    };

    return{renderBoard}

    

    //associate with button DOM elements

    //logic not to overrite a square
    
    //logic for squares to know if and what they contain

    //check player.sign when a square is clicked

    //tie DOM elements to gameboard array so that when user clicks a specific spot, they can make their mark where they expect to. 
})();

const DisplayModule = (() =>{
    //associate with readout DOM elements
    //display whos turn it is when turns change
    //give feedback to players (can't choose this square, you loose, you win, etc.)

    return;
})();

const GameModule = (() =>{
    //clicking a square should be enough to start the game
    //check for 3 in a row
    //detect turn and logic for turn change after valid box clicked. 
    return;
})();

const PlayerFactory = (sign) => {

}


//test code to go down here






//no code beyond this line
module.exports = {test1, test2};





