const prompt= require("prompt-sync")(); 






const deposit = () => {
    while(true) {
const depositAmount = prompt("Enter a deposit amount: ");
const numberDepositAmount = parseFloat(depositAmount);

if(isNaN(numberDepositAmount) || numberDepositAmount<=0){
    console.log(" Invalid amount, Try again");
        } else {
            return numberDepositAmount ;
        }
    }
 };
// function 2 
 const getNumberOfLines = () => {
    while(true) {
const lines = prompt("Enter the number of lines to bet(1-3): ");
const numberOfLines = parseFloat(lines);

if(isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines > 3){
    console.log(" Invalid number of lines, Try again");
        } else {
            return numberOfLines ;
        }
    }
 };

 //function 3 
 const getBet = (balance,lines) =>  {
    while(true) {
const bet = prompt("Enter the total bet per line: ");
const numberBet = parseFloat(bet);
const maxNumberPerLine = balance/lines ; 
if(isNaN(numberBet) || numberBet<=0 || numberBet > maxNumberPerLine  ){
    console.log(" Invalid bet, Try again");
        } else {
            return numberBet ;
        }
    }
 };

//function 4

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT ={
    A : 2,
    B : 4,
    C : 6,
    D : 8
}
const SYMBOLS_VALUES ={
    A : 5,
    B : 4,
    C : 3,
    D : 2
}

const spin = () => {
   const symbols=[];
 for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
    for (let i=0; i<count ; i++){
        symbols.push(symbol);
    }
 }
// console.log(symbols);
const reels = [] ; 
for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for(let j = 0; j < ROWS ; j++) {6
        const randomIndex = Math.floor(Math.random()* reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
  //41 MIn.
    }  
}
return reels ; 
};

const transpose = (reels) => {
    const rows = [];

    for (let i= 0 ; i < ROWS ; i++) {
      rows.push([]);
      for (let j=0; j<COLS; j++ )   {
        rows[i].push(reels[j][i])
      }
    } return rows
} 
const rows = transpose(reels);
console.log(rows);
const reels  = spin();
console.log (reels);
 //console.log(deposi  t()); instead of doing this we will put it in a const veriable so we can call it later
let balance =deposit();
//console.log(depositMoney);
const numberOfLines = getNumberOfLines();
//console.log(numberOfLines);
const bet=getBet(balance,numberOfLines);


 