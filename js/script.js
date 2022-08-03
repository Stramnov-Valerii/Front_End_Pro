const day = new Date().getDate();
let month = new Date().getMonth()
    ++month;
let year = new Date().getFullYear();
let captionString = `Food prices ≠ ${day}.${month}.${year}`;
console.log(captionString.replace('≠', '-'));
let apple = `🍎`;
let appleSalePercent = 7;
let appleCount = 3;
let applePrice = 10
    applePrice = (applePrice - applePrice * appleSalePercent / 100) * appleCount;
console.log(`Final price for ${appleCount} ${apple} = ${applePrice.toFixed()} UAH`);
let orange = `🍊`;
let orangeCount = 2;
let orangeSalePercent = 3;
let orangePrice = 12;
    orangePrice = (orangePrice - orangePrice * orangeSalePercent /100) * orangeCount;
console.log(`Final price for ${orangeCount} ${orange} = ${orangePrice.toFixed()} UAH`);
let kiwi = `🥝`;
let kiwiCount = 10;
let kiwiCountryPercent = 10;
let kiwiPrice = 15
    kiwiPrice = (kiwiPrice + kiwiPrice * kiwiCountryPercent / 100) * kiwiCount;
console.log(`Final price for ${kiwiCount} ${kiwi} = ${kiwiPrice.toFixed()} UAH`);
console.log(`Final price for all products = ` + (applePrice + orangePrice + kiwiPrice) + ` UAH`);