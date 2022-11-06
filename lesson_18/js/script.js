const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
};

let currency = ``;
function checkBalance (curencyData) {
    currency = prompt(`Please choose currency ${curencyData}`);
    let choosedCurency = ``;
    curencyData.map(item => {if(item===currency){
            choosedCurency = item;
        };
    });
    if(choosedCurency!==currency || !currency) {
        checkBalance(curencyData);
    };
    return currency;
};
const getMoney = new Promise ((resolve, reject) => {
        let checkMoney = confirm(`Check card balance?`);
        checkMoney ? resolve() : reject();
    }
);
getMoney
    .then (
        function (){
            checkBalance(Object.keys(userData));
            console.log(`Your balance: ${userData[currency]} ${currency}`);
        },
        function () {
            let actualCurrency = [];
            let bankDataArr = Object.keys(bankData);
            bankDataArr.map(item => {if(bankData[item].max === 0){
                bankDataArr.splice(bankDataArr.indexOf(item), 1);
                };
            });
            Object.keys(userData).map(item => {bankDataArr.forEach(elem => {if(elem===item){
                        actualCurrency.push(item);
                    };
                });
            });
            checkBalance(actualCurrency);
            let quantity = prompt(`Please enter quantity`);
            if(bankData[currency].max<quantity && userData[currency]<quantity){
                let avaliableQuantity =``;
                if(bankData[currency].max>userData[currency]){
                    avaliableQuantity=userData[currency]
                } else{
                    avaliableQuantity=bankData[currency].max
                };
                console.log(`Entered quantity more then avaliable. Maximum ${avaliableQuantity}`);
            }else if(bankData[currency].min>quantity){
                console.log(`Entered quantity less then avaliable. Minimum ${bankData[currency].min}`);
            }else{
                console.log(`Get your money ${quantity} ${currency} ${bankData[currency].img}`);
            };
        }
    )
    .finally (
        () => console.log(`Thanks, have a nice day 😊`)
    )
