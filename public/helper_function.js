/* Helper Functions */
function percentageBoolean(percentage) {
    /* Takes a percentage as in "theres a {percentage} chance that ..."
    and returns a boolean*/

    const random_num = Math.floor(Math.random()*101);
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
        d['special guest'] += 1;
    }
    else{
        d['commons'] += 1;
    }
    
    // 2 Random cards of any rarity from the set

    d['any type'] += 2;

    // Rare or Mythic card

    if (percentageBoolean(13)){
        d['inset mythic rares'] += 1 ;
    }
    else {
        d['inset rares'] += 1;
    }

    return d; // returns dictionary
}

async function generateBoosterPack(dict, setId = 'eoe'){
    /* Takes a set id and returns a an array of urls for all 14 images
    of the booster cards*/

    // Issue: 
    // 1- Special guests are taken arbitrarly from their collector number
    // 2- Any type card does not come in foil
    // 3- I'm not supposed to have the same cards between my normal pool, I could have repeated cause of the 'any type' but not otherwise
    
    const d_types_to_fetchurl = {'commons': "https://api.scryfall.com/cards/random?q=r:common+-t:basic+set:" + setId, 'uncommons':"https://api.scryfall.com/cards/random?q=r:uncommon+set:" + setId, 'common lands':"https://api.scryfall.com/cards/random?q=r:common+t:land+set:" + setId, 'inset rares':"https://api.scryfall.com/cards/random?q=r:rare+set:" + setId, 'inset mythic rares':"https://api.scryfall.com/cards/random?q=r:mythic+set:" + setId, 'special guest':"https://api.scryfall.com/cards/random?q=e:spg+cn≥119+cn≤128", 'any type':"https://api.scryfall.com/cards/random?q=set:" + setId}; 
    
    let arr_of_fetches = [];
    
    // populating array with all fetches 
    for (const [key, value] of Object.entries(dict)){
        for(let i =0; i<value;i++){
            arr_of_fetches.push(fetch(d_types_to_fetchurl[key]));
        } 
    }
    
    const response_arr = await Promise.all(arr_of_fetches);
    
    const data_arr = await Promise.all(response_arr.map((res) => res.json()));
    
    //array img urls

    const img_url_arr = data_arr.map((data)=>data.image_uris.normal);
    
    return img_url_arr;
    
}

function mapImagesToHtml(array_of_images) {

    const container = document.getElementById('image_container');
    
    for (let i = 0; i<array_of_images.length; i++){
        const image = document.createElement('img');
        image.src = array_of_images[i];
        container.appendChild(image);
    }
    

}


function main(){
    
}







//document.getElementById('draft_botn').addEventListener('click', startDraft)

const d = chanceBooster();
const array_imgs = await generateBoosterPack(d);//since generate is async, we need to await cause it returns promise
mapImagesToHtml(array_imgs);






