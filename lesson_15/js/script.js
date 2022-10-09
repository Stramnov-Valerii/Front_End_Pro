const figure = document.querySelector(`#figure`);
const bems = document.querySelector(`#bems`);
const actionKeys = {
    39: "ArrowRight",
    37: "ArrowLeft",
    key: "Control",
    32: "Space",
};
function comment () {
    bems.style.display = "block";
    setTimeout (() => bems.style.display = "none", 2000);
};
figure.style.left = 0;
figure.style.top = 0;
const figureMoving = () => {  
    if (event.code === actionKeys[39]) {
        figure.style.left = parseInt(figure.style.left) + 10 + `px`;
        if (figure.offsetLeft === parseInt(document.body.clientWidth) - figure.clientWidth || figure.offsetLeft > parseInt(document.body.clientWidth) - figure.clientWidth) {
            figure.style.left = parseInt(figure.style.left) - 30 + `px`;
            comment();
        };
    } else if (event.code === actionKeys[37]) {
        figure.style.left = parseInt(figure.style.left) - 10 + `px`;
        if (figure.offsetLeft === 0 || figure.offsetLeft < 0) {
            figure.style.left = parseInt(figure.style.left) + 30 + `px`;
            comment();
        };
    } else if (event.code === actionKeys[32]) {
        figure.style.top = parseInt(figure.style.top) - 10 + `px`;
        setTimeout (() => figure.style.top = 0, 50);
    } else if (event.key === actionKeys[`key`]) {
        figure.style.top = 0;
        figure.style.height = "60px";
        figure.style.width = "125px";
        figure.style.top = parseInt(figure.style.top) + 20 + `px`;
    };
};
document.addEventListener(`keydown`, figureMoving);