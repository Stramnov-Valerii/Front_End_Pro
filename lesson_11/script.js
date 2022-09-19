const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];
const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
let finalPrice = ``;
let product = {
    getPrice(){
        this.season === true ? finalPrice = this.price * this.seasonKoef : finalPrice = this.price;
        return finalPrice;
    },
    getInfo(){
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: ${finalPrice}.`;
    }
};
let Vegetable = Object.create(product)
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;
let Fruit = Object.create(product)
Fruit.type = `Fruit`;
Fruit.seasonKoef = 2;
function makePrototype(arr, objectProto) {
    return arr.map (item => {
        let newObj = Object.create(objectProto);
        Object.assign(newObj, item);
        return newObj;
    });
};
let newVagetables = makePrototype(vegetables, Vegetable);
console.log(newVagetables);
let newFruits = makePrototype(fruits, Fruit);
console.log(newFruits);
function renderList(arr) {
    return arr.map (item => {
        item.getPrice();
        return item.getInfo();
    });
};
console.log(renderList(newVagetables));
console.log(renderList(newFruits));