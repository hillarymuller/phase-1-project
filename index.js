document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/outfits')
    .then(resp => resp.json())
    .then(outfits => renderOutfit(outfits))
});

const makeElement = element => document.createElement(element);

function renderOutfit(outfits){
    for (let category of outfits){
        makeCategory(category)
        console.log(Object.values(outfits))
        }
        

    
}
function makeCategory(category){
    console.log(category);
    const outfitCategory = makeElement('h3');
    outfitCategory.textContent = Object.keys(category);
    const categoryCard = makeElement('div');
    const container = document.querySelector('.container');
    console.log(container);
    
    categoryCard.append(outfitCategory);
    container.append(categoryCard);

}


//  const classicAndCool = outfits[0];
//  const trendyAndFun = outfits[1];
// const comfyAndCasual = outfits[2];

// const outfitCategory = makeElement('h3');
// const outfitCard = makeElement('div');
//  const outfitImg = makeElement('img');
// const favoriteBttn = makeElement('button');
// outfitCategory.textContent = outfits[i];
// favoriteBttn.className = "favorite-bttn";
// favoriteBttn.textContent = "&#x2661;";