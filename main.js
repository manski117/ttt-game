console.log('js is working')

const BoardModule = (() =>{
    let gameBoard = [
        'X', 'O', ' ',
        'X', 'O', 'X',
        ' ', 'O', 'O'
     ];

    const emptyGameBoard = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
     ]; 
    


    //detect when a square is clicked
    //associate square DOM elements
    const squares = document.querySelectorAll("div.square");
    for (const square of squares){
    square.addEventListener('click', function(event){
        alert(playerO.sign(), playerO.printScore());
        alert(this.id);
        //TODO: Update this when player and turns are programmed. 
        markSquare("X", this.id);
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

    const markSquare = (sign, squareID)=>{
        
        //get last letter of string passed (should = array index)
        let lastCharID = squareID.slice(-1);
        //turn that into an integer
        let intID = parseInt(lastCharID);
        
        //check to see if that square has anything in it yet other than space.
        if (gameBoard[intID] == " "){
            //overrite that character in the main gameBoard array with the square that was chosen.
            gameBoard[intID] = sign;
        } else{
            alert("Please choose a blank space");
            return;
        }
        
    };
    const resetBoard = () =>{
        gameBoard = emptyGameBoard;
        renderBoard(gameBoard, squares);
        return;
    };

    return{renderBoard, markSquare, resetBoard};

    

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
    let game = 0;
    let turn = "X";

    const resetButton = document.querySelector("#reset-btn");
    resetButton.addEventListener("click", function(event){
        alert("you clicked reset button")
        resetGame();
    });

    //check for 3 in a row
    //detect turn and logic for turn change after valid box clicked. 

    const resetGame = () => {
        game = 0;
        turn = "X";
        BoardModule.resetBoard();
        
    }
    
    const resetGameBoard = () =>{
        //reset just the game board and turns, but leave score alone. 

    }
    

    
    return{resetGame, resetGameBoard};
})();

const PlayerFactory = (symbol) => {
    let score = 0;
    let playerSign = symbol;
    const sign = () => {
        return playerSign;
    }

    const increaseScore = () =>{
        score++;
    };

    const printScore = () =>{
        return score;
    };

    return{sign, increaseScore, printScore}

};

const playerO = PlayerFactory("O");
const playerX = PlayerFactory("X");


//test code to go down here






//no code beyond this line
module.exports = {test1, test2};





