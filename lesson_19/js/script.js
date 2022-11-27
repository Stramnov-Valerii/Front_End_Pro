const API = `https://63693f7228cd16bba71904e4.mockapi.io/heroes`;
const API_Universe = `https://63693f7228cd16bba71904e4.mockapi.io/universes`;
const selectUniverse = document.querySelector(`#select-universe`);
const table = document.querySelector(`#table`);
const favourite = document.querySelector(`#favourite`);
const addButton = document.querySelector(`#add-button`);
const form = document.querySelector(`#form`);
// const deleteButton = document.querySelector(`#delete-button`)
// console.log(favourite)
// let xhr = new XMLHttpRequest();

// fetch(API)
//     .then(data => data.json())
//     .then(data =>{ 
//         console.log(data)})

// CHANGE


const getUniverse = () =>{
    fetch(API_Universe)
    .then((data) => data.json())
    .then((data) => {
        const typeOfUniverse = data
        .map(item => `<option value="${item.name}">${item.name}</option>`)
        .join(``)
        // console.log(typeOfUniverse)
        selectUniverse.innerHTML = typeOfUniverse
        }
    )
}
getUniverse();

(async() => {
    let heroArr = await fetch(API)
    .then(heroArr => heroArr.json())
    .then((heroArr) => {
        table.innerHTML = `<tr><th>Name</th><th>Comics</th><th>Favourite</th><th>Actions</th></tr>` + heroArr
        .map(item => `<tr id="${item.id}"><td>${item.name}</td><td>${item.comics}</td><td>${item.favourite}</td><td><button id="delete${item.id}" type="button">Delete</button></td></tr>`)
        .join(``)
        console.log(heroArr)
        return heroArr
        }
    )
    .then(form.addEventListener(`submit`, e => {
        e.preventDefault();
    
        let newHero = ``;
        let heroName = heroArr.map(item => {
            for(let key in item){
                if(item[key]===document.querySelector(`#hero-name`).value){
                    newHero = item[key];
                    console.log(`"${newHero}" Have been declared`);
                    return newHero
                }
            }
        })
        console.log(`newHero: `, newHero)
        if(!newHero){
            // favourite.addEventListener(`change`, e=>{
            //     console.log(e.target.checked)
            // })
            newHero = document.querySelector(`#hero-name`).value;
            let comicsValue = document.querySelector(`#select-universe`).value;
            let favouriteValue = document.querySelector(`#favourite`).checked;
            heroArr = fetch(API, {
                method: `POST`,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    id: `${heroArr.length+1}`, 
                    name: `${newHero}`, 
                    comics: `${comicsValue}`, 
                    favourite: `${favouriteValue}`
                })
            })
        }
        })

    )
    // let deleteButton = await fetch(API)
    // .then(deleteButton => deleteButton.json())
    .then((heroArr) => {
        // console.log(heroArr)
        

            heroArr.map(item => {
                let deleteButton = document.querySelector(`#delete${item.id}`)
                let deleteId = item.id
                console.log(deleteButton)
                console.log(deleteId)
                deleteButton.addEventListener(`click`, e=>{
                    for(let key in item) {
                        // if(item[key]===)
                        // console.log(item[key])
                        // console.log(deleteButton)
                        // if(item[key]===)
                }
            })
        })
    })

    // let deleteButton = document.querySelector(`#${item.id}`);
    // deleteButton.addEventListener(`click`, e=>{

    //     heroArr.map()

    //     e.preventDefault()
    //     let heroId = ``;
    //     console.log(deleteButton.id)
    //     let deleteHero = fetch(API+`/${heroId}`,
    //     // .then(deleteHero => deleteHero.json())
    //     // .then((deleteHero) =>
    //     //     console.log(deleteHero)
    //     // )
    //     {method: `DELETE`
    //     }).then()

    // })
///////////////////
    // .then(
        // const deleteButton = document.querySelector(`#delete-button`)
    //     console.log(deleteButton))
    // .then(deleteButton.addEventListener(`click`, e=>{
    //     let deleteHero = fetch(API, {
    //         method: `DELETE`,
    //     })
    // }))
////////////////////////
    
        
    // }).then(const deleteButton = document.querySelector(`#delete-button`)
    // console.log(deleteButton))
    
    
    
})()
