const data = new XMLHttpRequest();
data.open(`GET`, `js/data.json`, false);
data.send();
let dataResponse = JSON.parse(data.response);
const data2 = new XMLHttpRequest ();
data2.open(`GET`, `js/data2.json`, false);
data2.send();
let data2Response = JSON.parse(data2.response);
let arr = [];
arr.push(dataResponse, data2Response)
let finalArr = [];
arr.forEach(arrItem => {
    let dataArr = ``;
    for (let key in arrItem){
        dataArr = arrItem[key];
    };
    dataArr.map(item => finalArr.push(item));
});
console.log(JSON.stringify(finalArr));