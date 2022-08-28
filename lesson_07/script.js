const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];
const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];
let tableName = ``;
    arr = ``;
    table = ``;
function getInfo (arr, tableName) {
    let tR = [];
    for(let tr=0; tr<arr.length; tr++){
        let tD = [];
        for(let td=0; td<arr[td].length; td++){
            tD.push(`<td>${arr[tr][td]}</td>`);
        };
        tR.push(`<tr>
            ${tD.join(``)}
        </tr>`);
    };
    return `<table><caption>${tableName} info</caption>${tR.join(``)}</table>`;
};
tableName = `Animals`; 
arr = animals; 
table = getInfo (arr, tableName);
document.write(table);
tableName = `Food`; 
arr = food;
table = getInfo (arr, tableName);
document.write(table);
