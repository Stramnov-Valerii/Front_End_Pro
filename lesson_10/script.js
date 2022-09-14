const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};
let newObj = ``;
function convert(obj) {
    let copyObj = JSON.parse(JSON.stringify(obj));
        finalObj = ``;
    for (let key in obj) {
        if (typeof obj[key] === `object`) {
            delete copyObj[key];
            let nextObj = JSON.parse(JSON.stringify(obj[key]));
            let sumOfObj = Object.assign(copyObj, nextObj);
            finalObj = Object.assign(sumOfObj, nextObj);
        };
    };
    return finalObj;
};
newObj = convert(obj);
console.log (newObj);