//document.addEventListener('DOMContentLoaded', (category) => {
  //  fetch(`http://localhost:3000/${category}`)
    //.then(resp => resp.json())
    //.then(category => console.log(category))
//});

//function fetchCategory(category) {
  //  fetch(`http://localhost:3000/${category}`)
    //.then(resp => resp.json())
    //.then(category => console.log(category))
//}






const makeEl = element => document.createElement(element);
const BASE_URL = 'http://localhost:3000/outfits'

function loadOutfits(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(outfits => outfits.forEach(renderOutfit))
}
loadOutfits();

function renderOutfit(outfit){
    const outfitCard = makeEl('div');
    const outfitImg = makeEl('img');
    const outfitContainer = document.getElementById(`${outfit.category}`);
    outfitCard.id = outfit.id;
    outfitCard.className = outfit.category;
    outfitImg.src = outfit.img;
    outfitImg.alt = outfit.description;

    outfitCard.append(outfitImg);
    outfitContainer.append(outfitCard);

}






//function renderOutfit(outfits){
  //  for (let category of outfits){
    //    makeCategory(category)
      //  console.log(Object.values(outfits))
        //}
        

    
//}
//function makeCategory(category){
    
  //  const outfitCategory = document.getElementById(`${category}`);
    //console.log(outfitCategory);
    //const categoryCard = makeElement('div');
    //const container = document.querySelector('.container');
    //console.log(container);
    
    //categoryCard.append(outfitCategory);
    //container.append(categoryCard);

//}


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