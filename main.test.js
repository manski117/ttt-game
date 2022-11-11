const {BoardModule, DisplayModule} = require("./main");

//test from factory function
// test("does test1 add goofy?",()=>{
//     expect(test1("donald")).toBe('donald and goofy');

// });

//This is how you would write the test to get a method from a module. 
describe("does the array contain ONLY X, O, or ' ' ?", ()=> {
    let badA = ['a', 'b', 'X', 'o', 'Z']
    let goodA = ["X", "X", "O", " ", "O"]
    let tArray = BoardModule.gameBoard;
    function validGameBoardArray (array){
        let validity = undefined;
        array.forEach(element => {
            
            if (["X", "O", " "].includes(element)) {
                validity = true;
            }
            if (!["X", "O", " "].includes(element)){
                validity = false;
                return;
            }
        });
        return validity;
    }

    test("positive control: good array should return true", () =>{
        
        expect(validGameBoardArray(goodA)).toBe(true);
    });

    test("negative control: bad array should return false", () => {
        expect(validGameBoardArray(badA)).toBe(false);
    });

    test("main test: array from program should be true", () => {
        expect(validGameBoardArray(tArray)).toBe(true);
    });
});

//npm run test main.test.js
//make sure the names match, jest is intstalled globally with $ npm install -g jest