let userName = prompt(`Enter your name`);
while (!userName) {
    userName = prompt(`Enter your name`);
};
if(userName) {
    userName = userName.trim(` `).toLowerCase();
    space = userName.indexOf(` `);
    if(space > 0) {
        userName = userName[0].toUpperCase() + userName.slice(1, space + 1) + userName[space + 1].toUpperCase() + userName.slice(space + 2);
    } else {
        userName = userName[0].toUpperCase() + userName.slice(1);
        }
};
let userSurname = prompt(`Enter your surname`);
while (!userSurname) {
    userSurname = prompt(`Enter your surname`);
};
if(userSurname) {
    userSurname = userSurname.trim(` `).toLowerCase();
    hyphen = userSurname.indexOf(`-`);
    if(hyphen > 0) {
        userSurname = userSurname[0].toUpperCase() + userSurname.slice(1, hyphen + 1) + userSurname[hyphen + 1].toUpperCase() + userSurname.slice(hyphen + 2);
    } else {
        userSurname = userSurname[0].toUpperCase() + userSurname.slice(1);
        }
};
let userEmail = prompt(`Enter your email`);
while (!userEmail || !userEmail.includes(`@`) || userEmail.startsWith(`@`) || userEmail.endsWith(`@`)) {
    userEmail = prompt(`Enter your email`);
};
if(userEmail) {
    userEmail = userEmail.replaceAll(` `).toLowerCase();
};
let userAge = prompt(`Enter your year of birth`);
while (!userAge || isNaN(userAge)) {
    userAge = prompt(`Enter your year of birh`);
};
if(userAge) {
    userAge = new Date().getFullYear() - userAge;
};
document.write(
    `<ul>
        <li> Full name: ${userName + ` ` + userSurname} </li>
        <li> Email: ${userEmail} </li>
        <li> Age: ${userAge} </li>
    </ul>`
    );
