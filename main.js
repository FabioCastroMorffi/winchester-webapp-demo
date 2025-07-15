function percentageBoolean(percentage) {
    /* Takes a percentage as in "theres a {percentage} chance that ..."
    and returns a boolean*/

    random_num = Math.floor(Math.random()*101);
    if (random_num <= percentage){
        return true;
    }
    return false;
}
function chanceBooster() {
    /* Returns a dictionary with the amount of commons, uncommons, etc
    Note: special guests and anytype are separated from other types*/

    // minimum of 6 commons
    // minimum of 3 uncommons
    // minimum basic or common land

    let d = {'commons': 6, 'uncommons':3, 'common lands':1, 'inset rares':0, 'inset mythic rares':0, 'special guest':0 , 'any type':0}; 
    
    // following the table below Structure in https://mtg.fandom.com/wiki/Play_Booster

    // Common or Special Guest
    
    if (percentageBoolean(2)){
        d['special guest'] += 1
    }
    else{
        d['commons'] += 1
    }
    
    // 2 Random cards of any rarity from the set

    d['any type'] += 2

    // Rare or Mythic card

    if (percentageBoolean(13)){
        d['inset mythic rares'] += 1 
    }
    else {
        d['inset rares'] += 1
    }

    return d; // returns dictionary
}

async function generateBoosterPack(setId = 'ktk'){
    d_types_to_fetchurl = {'commons': "https://api.scryfall.com/cards/random?q=r:common+set:" + setId, 'uncommons':"https://api.scryfall.com/cards/random?q=r:uncommon+set:" + setId, 'common lands':"https://api.scryfall.com/cards/random?q=r:common+t:land+set:" + setId, 'inset rares':"https://api.scryfall.com/cards/random?q=r:rare+set:" + setId, 'inset mythic rares':"https://api.scryfall.com/cards/random?q=r:mythic+set:" + setId, 'special guest':"https://api.scryfall.com/cards/random?q=set:spg" + setId , 'any type':0}; 

    const dict = chanceBooster()
    
    
    

}
generateBoosterPack()

async function makePile(setId='ktk') {
    return;
}





/*function callCommanders(amount=3){
    for (let i = 0; i<amount; i++){
    let img_element = document.getElementById("commander#" + i.toString())
    

    fetch("https://api.scryfall.com/cards/random?q=is:commander")
    .then(response => response.json())
    .then(data => {
         commanderUrl = data.image_uris.large
        img_element.src = commanderUrl

    })
    .catch(error => console.error(error))
    

}
}
*/

