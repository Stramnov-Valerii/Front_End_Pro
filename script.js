let hamburgerPrice = 10;
    cheeseburgerPrice = 15;
    doubleCheesePrice = 5;
    potatoSmallPrice = 10;
    potatoMiddlePrice = 15;
    potatoBigPrice = 20;
    ketchupPrice = 2;
    mayonnaisePrice = 3;
    bulka = prompt(`Would you like Humburger or Cheeseburger?`);
if(bulka == null || bulka != `cheeseburger`) {
    bulkaPrice = hamburgerPrice;
    bulkaType = `Hamburger`;
} else if(bulka == `cheeseburger`) {
    bulka = confirm(`Would you like to add double cheese?`);
    if(bulka) {
        bulkaPrice = cheeseburgerPrice + doubleCheesePrice;
        bulkaType = `Doble Cheeseburger`;
    } else {
        bulkaPrice = cheeseburgerPrice;
        bulkaType = `Cheeseburger`;
    };
};
let potato = confirm(`Would you like potato?`);
    if(potato) {
        potato = prompt(`Choose potato size: small/middle/big`);
        if(potato == `small`) {
            potatoType = `small`;
            potatoPrice = potatoSmallPrice;
        } else if(potato == `middle`) {
            potatoType = `middle`;
            potatoPrice = potatoMiddlePrice;
        } else if(potato == `big`) {
            potatoType = `big`;
            potatoPrice = potatoBigPrice;
        };
    } else {
        potatoType = null;
        potatoPrice = 0;
    };
let sause = confirm(`Would you like sauce?`);
    if(sause) {
        sause = prompt(`Choose sauce: ketchup/mayonnaise`);
        if(sause == `mayonnaise`) {
            if(potatoType != null) {
                let sauseType = `mayonnaise`;
                sausePrice = mayonnaisePrice;
                document.write(`<h2>Your order:</h2>
                <ul>
                    <li>Bulka 🍔: ${bulkaType} </li>
                    <li>Potato 🍟: ${potatoType} </li>
                    <li>Sauce 🧂: ${sauseType} </li>
                </ul>
    
                <p>Price: $ ${mayonnaisePrice + potatoPrice + bulkaPrice} </p>`);
            } else if(potatoType === null) {
                let sauseType = `mayonnaise`;
                sausePrice = mayonnaisePrice;
                document.write(`<h2>Your order:</h2>
                <ul>
                    <li>Bulka 🍔: ${bulkaType} </li>
                    <li>Sauce 🧂: ${sauseType} </li>
                </ul>
    
                <p>Price: $ ${mayonnaisePrice + potatoPrice + bulkaPrice} </p>`);
            };
        }else if(sause == null || sause != `mayonnaise`) {
            let sauseType = `ketchup`;
            sausePrice = ketchupPrice;
            document.write(`<h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${bulkaType} </li>
                <li>Potato 🍟: ${potatoType} </li>
                <li>Sauce 🧂: ${sauseType} </li>
            </ul>

            <p>Price: $ ${ketchupPrice + potatoPrice + bulkaPrice} </p>`);
        }
    } else { 
        if(potatoType === null) {
            document.write(`<h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${bulkaType} </li>
            </ul>

            <p>Price: $ ${ketchupPrice + bulkaPrice} </p>`);
        } else {
            document.write(`<h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${bulkaType} </li>
                <li>Potato 🍟: ${potatoType} </li>
            </ul>

            <p>Price: $ ${ketchupPrice + potatoPrice + bulkaPrice} </p>`);
        }
    };  