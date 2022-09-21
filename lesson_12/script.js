class Bulka {
    constructor (name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`];

    };
    setAdditionalIngredients(...args) {
        for (let i=0; i<args.length; i++) {
            this.ingredients.push(args[i]);
        };
        return this;
    };
};
let Humburger = new Bulka(`Humburger`, `small`);
console.log(Humburger);
console.log(Humburger.setAdditionalIngredients(`egg`, `onion`));
class Cheeseburger extends Bulka {
    constructor (name, size) {
        super (name, size);
        this.ingredients = [`cutlet`, `salada`, `tomato`, `cheese`];
    };
    setAdditionalIngredients(...args) {
        super.setAdditionalIngredients(...args);
        return this;
    };
};
let myCheeseburger = new Cheeseburger (`Cheeseburger`, `small`);
console.log(myCheeseburger);
console.log(myCheeseburger.setAdditionalIngredients(`egg`, `onion`));