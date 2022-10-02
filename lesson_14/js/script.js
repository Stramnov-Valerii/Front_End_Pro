const figure = document.querySelector(`#figure`);
const getRandomIntInclusive = (min=0, max=255) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
const getRandomColor = () => {
        let colors = [];
        for(let i=0; i<=2; i++){
            colors.push(getRandomIntInclusive());
        };
        return `rgb(${colors.join(`,`)})`;
    };
setInterval(() => figure.style.backgroundColor = getRandomColor(), 500);
const STEP = 200;
figure.style.left = 0;
figure.style.top = 0;
const figureMoving = setInterval(() => {
    let figureRightCoordinate = figure.offsetLeft + figure.clientWidth + STEP;
    let  clientWidth = document.body.clientWidth;
    if(figureRightCoordinate > clientWidth){
        figure.style.left = figure.style.left !==`0` ? `${STEP}px` : parseInt(figure.style.left)-STEP+`px`;
    } else {
        figure.style.left = figure.style.left ===`0` ? `${STEP}px` : parseInt(figure.style.left)+STEP+`px`;
    };
    let figureTopCoordinate = figure.offsetTop + figure.clientHeight + STEP;
    let clientHeight = document.body.clientHeight;
    if(figureTopCoordinate > clientHeight){
        figure.style.top = figure.style.top !==`0` ? `${STEP}px` : parseInt(figure.style.top)-STEP+`px`;
    } else {
        figure.style.top = figure.style.top ===`0` ? `${STEP}px` : parseInt(figure.style.top)+STEP+`px`;
    };
}, 1000);