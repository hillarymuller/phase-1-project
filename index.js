
const makeEl = element => document.createElement(element);
const BASE_URL = 'http://localhost:3000/outfits'
const newForm = document.querySelector('form');
let newUrl = document.getElementById('newImg');
let newCategory = document.getElementById('category');

document.addEventListener('DOMContentLoaded', () => {
    loadOutfits();
    addOutfit();
})

function loadOutfits(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(outfits => outfits.forEach(renderOutfit))
}
function addOutfit(){
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(newUrl.value, newCategory.value);
        let outfit = {
            img: newUrl.value,
            category: newCategory.value,
        };
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(outfit),
        })
        .then(resp => resp.json())
        .then(newOutfit => renderOutfit(newOutfit))
    
    });
    newForm.reset();
}

function renderOutfit(outfit){
    const outfitCard = makeEl('div');
    const outfitImg = makeEl('img');
    const outfitContainer = document.getElementById(`${outfit.category}`);
    const likeBttn = makeEl('button');
    const deleteBttn = makeEl('button');
    
    outfitCard.id = outfit.id;
    outfitCard.className = outfit.category;
    outfitImg.src = outfit.img;
    outfitImg.alt = outfit.description;
    outfitImg.style.width = '200px';
    outfitImg.style.height = '300px';
    outfitContainer.className = 'row';
    outfitContainer.style.fontFamily = "Optima, sans-serif";
    outfitCard.className = 'col s4';
    outfitCard.style.display = 'flex';
    outfitCard.style.alignItems = 'center';
    outfitCard.style.justifyContent = 'center';
    outfitImg.className = 'center-align';

    likeBttn.className = "likes-bttn";
    likeBttn.textContent = '♡';
    likeBttn.style.width = '50px';
    likeBttn.style.height = '50px';
    likeBttn.style.fontSize = '30px';
    likeBttn.addEventListener('click', () => likeOutfit(likeBttn));

    deleteBttn.className = 'delete-bttn';
    deleteBttn.textContent = 'delete';
    deleteBttn.addEventListener('click', () => deleteOutfit(outfit));
    deleteBttn.style.fontSize = '20px'

    
    outfitCard.append(outfitImg, likeBttn, deleteBttn);
    outfitContainer.append(outfitCard);

    addBackground(trendy, trendyBackground);
    addBackground(classic, classicBackground);
    addBackground(comfy, comfyBackground);
}

const classic = document.getElementById('Classic & Cool');
const trendy = document.getElementById('Trendy & Fun');
const comfy = document.getElementById('Comfy & Casual');

const classicBackground = 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzUyfHxiYWNrZ3JvdW5kJTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60';
const trendyBackground = 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60';
const comfyBackground = 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE2fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60';

function addBackground(category, backgroundImage){
    category.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        e.target.style.backgroundImage = `url('${backgroundImage}')`;
        e.target.style.color = 'white';
    }), 
    category.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        e.target.style.backgroundImage = '';
        e.target.style.color = 'black';
    })
}

function likeOutfit(thing){
    thing.textContent = '♥'
};

function deleteOutfit(outfit){
    fetch(BASE_URL + `/${outfit.id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(item => console.log(item))
};





