
const BoardModule = (() =>{
    let gameBoard = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
     ];

    const emptyGameBoard =[
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
     ]; 
    
    //detect when a square is clicked
    //associate square DOM elements
    const squares = document.querySelectorAll("div.square");
    for (const square of squares){
    square.addEventListener('click', function(event){
        // alert(playerO.sign(), playerO.printScore());
        
        //TODO: Update this when player and turns are programmed. 
        markSquare(GameModule.checkTurn(), this.id);
        renderBoard(gameBoard, squares);
        if (GameModule.checkWinner(gameBoard, GameModule.checkTurn())){
            DisplayModule.declareWinner(GameModule.checkTurn());
        } else{
            GameModule.switchTurns();
        }
    });
    };

    //render all contents of the gameboard array to the webpage. 
    const renderBoard = (array, gameGrids) => {
        let i = 0;
        
        //put that in the corresponding game square
        gameGrids.forEach(element=>{
            
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
            DisplayModule.display("Please pick a blank space!");
            return;
        }
        
    };
    const resetBoard = () =>{
        //copy the array, NOT assign it, because the pointer will make them the same obj. 
        gameBoard = [...emptyGameBoard];
        renderBoard(gameBoard, squares);
        document.getElementById("readout").classList.remove('victory-achieved');
        DisplayModule.display(`Board Cleared.\nPlayer X goes first!`);
        return;
    };

    const showEB =()=>{
        return emptyGameBoard;
    }

    return{renderBoard, markSquare, resetBoard, showEB};

})();

const DisplayModule = (() =>{
    let readout = document.getElementById("readout");


    //make font size appropriately as screen changes
    const flexFont =  () => {
        var divs = document.getElementsByClassName("flexFont");
        for(var i = 0; i < divs.length; i++) {
            var relFontsize = divs[i].offsetWidth*0.05;
            divs[i].style.fontSize = relFontsize+'px';
        }
    };

    //associate with readout DOM elements
    const display = (string) =>{
        readout.innerText = string;
        flexFont();
        return;
    };

    const declareWinner =(sign) =>{
        document.getElementById("readout").classList.add('victory-achieved');
        display(`Victory! Player ${sign} wins!\n Reset board to play again!`);
        // readout.classList.toggle("victor-declared");

    };

    return{display, declareWinner, flexFont};
})();

const GameModule = (() =>{
    let round = 0;
    let turn = "X";
    let winningCombo = undefined;
    let readout = document.getElementById("readout");

    

    const resetButton = document.querySelector("#reset-btn");
    resetButton.addEventListener("click", function(event){
        
        resetGame();
    });

    const resetBoardButton = document.querySelector("#reset-board");
    resetBoardButton.addEventListener("click", function(event){
        BoardModule.resetBoard();
    })

    const switchTurns = () =>{
        if (turn === "X"){
            turn = "O";
        } else if (turn === "O"){
            turn = "X";
        };
        DisplayModule.display(`Player ${turn} turn`);
        return;
    };

    const checkTurn = () =>{
        return turn;
    };
    const roundPlus = () =>{
        round++;
        return;
    };

    const checkRound = () =>{
        return round;
    };

    //check for 3 in a row
    const checkWinner= (array, sign) =>{
        let victory = false;
        let currentCombo = 0;
        
        const winCombos = [
            [0, 4, 8],
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6]
          ];
        
        winCombos.forEach(element => {
            //loop through each possible combination and use their indexing to see if the X or Os are in the right places by indexing the main array.
            let i0 = element[0];
            let i1 = element[1];
            let i2 = element[2];
            if ((array[i0] == sign) && (array[i1] == sign) && (array[i2] == sign)){
                victory = true;
                winningCombo = currentCombo;
                
            } else {
                currentCombo++;
                return;
            }
        });

        return victory;
    };


    //detect turn and logic for turn change after valid box clicked. 

    const resetGame = () => {
        round = 0;
        turn = "X";
        BoardModule.resetBoard();
        document.getElementById("readout").classList.remove('victory-achieved');
        DisplayModule.display(`Player X goes first!\n Round: ${round}`);
        
    }
    
    const resetGameBoard = () =>{
        //reset just the game board and turns, but leave score alone. 

    }
    
    const checkWinningCombo = () =>{
        return winningCombo;
    }

    return{resetGame, resetGameBoard, checkWinner, switchTurns, checkTurn, roundPlus, checkRound, checkWinningCombo};
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

GameModule.resetGame();
const playerO = PlayerFactory("O");
const playerX = PlayerFactory("X");


window.onload = function(event) {
    DisplayModule.flexFont();
};
window.onresize = function(event) {
    DisplayModule.flexFont();
};



//test code to go down here




