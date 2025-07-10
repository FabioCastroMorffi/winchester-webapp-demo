// array of images
let imgArray = []

for (let i = 0; i<3; i++){
    imgArray.push(document.getElementById("commander" + i.toString())

    fetch("https://api.scryfall.com/cards/random?q=is:commander")
    .then(response => response.json())
    .then(data => {
        const commanderUrl = data.image_uris.border_crop
        imgElement.src = commanderUrl

    })
    .catch(error => console.error(error))
}


