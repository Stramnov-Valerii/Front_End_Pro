const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];
function getPrice (products, seasonFunc) {
    let copiedProducts = JSON.parse(JSON.stringify(products));
    if (typeof seasonFunc === `function`) {
        return seasonFunc(copiedProducts);
    } else {
        let sum = 0;
        for (let i=0; i<copiedProducts.length; i++) {
            sum += copiedProducts[i][1];
        };
        return sum;
    };
};
function summerPrice (products) {
    let seasonPrice = 0;
    for (let i=0; i<products.length; i++) {
        seasonPrice += products[i][1] * 0.8;
    };
    return seasonPrice;
};
function winterPrice (products) {
    let seasonPrice = 0;
    for (let i=0; i<products.length; i++) {
        seasonPrice += products[i][1] * 2;
    };
    return seasonPrice;
};
console.log(getPrice (products, summerPrice));
console.log(getPrice (products, winterPrice));
console.log(getPrice (products));