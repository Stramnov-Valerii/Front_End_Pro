const figure = document.querySelector(`#figure`);
figure.style.left = 0;
figure.style.top = 0;
const STEP = 10;
const SITHEIGHT = 0.6;
const SITWIDTH = 1.25;
function comment () {
    figure.innerHTML = `BEMS!`;
    setTimeout (() => figure.innerHTML = ``, 2000);
};
const movingTop = () => {
    figure.style.top = parseInt(figure.style.top) - STEP + `px`;
    if (figure.offsetTop < 0) {
        figure.style.top = parseInt(figure.style.top) + STEP*2 + `px`;
        comment();
    };
};
const movingBottom = () => {
    figure.style.top = parseInt(figure.style.top) + STEP + `px`;
    if (figure.offsetTop > document.body.clientHeight-parseInt(figure.clientHeight)) {
        figure.style.top = parseInt(figure.style.top) - STEP*2 + `px`;
        comment();
    };
};
const movingRight = () => {
    figure.style.left = parseInt(figure.style.left) + STEP + `px`;
    if (figure.offsetLeft+figure.clientWidth > document.body.clientWidth) {
        figure.style.left = parseInt(figure.style.left) - STEP*2 + `px`;
        comment();
    };
};
const movingLeft = () => {
    figure.style.left = parseInt(figure.style.left) - STEP + `px`;
    if (figure.offsetLeft < 0) {
        figure.style.left = parseInt(figure.style.left) + STEP*2 + `px`;
        comment();
    };
};
const jump = () => {
    figure.style.top = parseInt(figure.style.top) - 10 + `px`;
    setTimeout (() => figure.style.top = parseInt(figure.style.top) + 10 + `px`, 50);
};
const sit = () => {
    const ORIGINHEIGHT = figure.style.height;
    const ORIGINWIDTH = figure.style.width;
    const TOPDIFF = parseInt(figure.clientHeight)*(1-SITHEIGHT)/2;
    figure.style.top = parseInt(figure.style.top) + TOPDIFF + `px`;
    figure.style.height = figure.clientHeight * SITHEIGHT + `px`;
    figure.style.width = figure.clientWidth * SITWIDTH + `px`;
    setTimeout(() => {
        figure.style.top = parseInt(figure.style.top) - TOPDIFF + `px`;
        figure.style.height = ORIGINHEIGHT;
        figure.style.width = ORIGINWIDTH;
    }, 100);
};
const ACTIONS = {
    38: movingTop,
    40: movingBottom,
    39: movingRight,
    37: movingLeft,
    17: sit,
    32: jump,
};
document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());