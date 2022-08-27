const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];
const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `purple`];
let rainbow = [];
rainbow = destination.concat(native, hero)
                     .reverse();
rainbow.splice(0,1,`Richard`);
rainbow.splice(3,0,`Gave`, `Battle`);
rainbow.splice(6,1,`Vain`);
document.write(`<div style="display: flex; justify-content: space-between;">`);
for (let i=0; i<rainbow.length; i++) {
    document.write(`<div style="display: flex; flex-direction: column; align-items: center;">
    <div style="background: ${colors[i]}; width: 30px; height: 30px; border-radius: 50%"></div>
    <span>${rainbow[i]}</span>
    </div>`);
}
document.write(`</div>`);