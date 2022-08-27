const sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
    for (let i=0; i<sports.length; i++) {
        sportsItem = sports[i];
        sports[i] = sportsItem.join(`:`);
    };
let winterSports = sports.slice(0, 5);
    summerSports = sports.slice(5);
    fruits = winterSports.splice(2, 1).concat(summerSports.splice(2, 2));
console.log(`***Winter Sports***`);
for (i=0; i<winterSports.length; i++) {
	console.log(winterSports[i]);
};
console.log(`***Summer Sports***`);
for (i=0; i<summerSports.length; i++) {
	console.log(summerSports[i]);
};
console.log(`***Fruits***`);
for (i=0; i<fruits.length; i++) {
	console.log(fruits[i]);
};