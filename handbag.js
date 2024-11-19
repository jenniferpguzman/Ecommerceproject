let handBags = [{
    "image": "/images/white_bag.png",
    "bagName": "Medium Flap Convertible Crossbody",
    "price": "$99"
},
{
     "image": "/images/brownwhite_bag.avif",
    "bagName": "Medium Flap Shoulder Bag",
    "price": "$155"
},
{
     "image": "/images/bigbrownbag.avif",
    "bagName": "Small Sullivan Satchel",
    "price": "$125"
},
{
    "image": "/images/pink_bag.avif",
    "bagName": "Micro Flap Crossbody",
    "price": "$89"
},
{
     "image": "/images/pink_crossbody.avif",
    "bagName": "Small Convertible Crossbody",
    "price": "$139"
},
{
     "image": "/images/bear_bag.avif",
    "bagName": "3D Teddy Bear Crossbody",
    "price": "$269"
},
{
     "image": "/images/burgandy.avif",
    "bagName": "Medium Flap Convertible Crossbody",
    "price": "$99"
},
{
    "image": "/images/blackmediumflap_bag.avif",
    "bagName": "Flap Convertible Crossbody",
    "price": "$99"
},
{
    "image": "/images/saddle_bag.avif",
    "bagName": "Reegan Colorblock Saddle Bag",
    "price": "$140"
},
{
     "image": "/images/lepoard_bag.avif",
    "bagName": "Leopard Medium Convertible ",
    "price": "$87"
},
{
    "image": "/images/minnie_bag.avif",
    "bagName": "Minnie 3D Crossbody",
    "price": "$139"
},
{
    "image": "/images/pearl_bag.avif",
    "bagName": "Pearl Medium Convertible Crossbody",
    "price": "$115"
}
]

console.log(handBags);

function displayHandBags(){
    const container = document.getElementById('handbag_container');

    handBags.forEach(bag => {
        const bagDiv = document.createElement('div');
        bagDiv.classList.add('handbag');

        bagDiv.innerHTML = `
            <h2>${bag.bagName}</h2>
            <p>Price: ${bag.price}</p>
            <img src="${bag.image}" alt="${bag.bagName}" />
        `;
        container.appendChild(bagDiv);

    });
}

displayHandBags();