function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;


    const ChairTotalWood = chairQuantity * perBedWood;
    const tableTottalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;


    const totalWood = ChairTotalWood + tableTottalWood + bedTotalWood;
    return totalWood;

}

const wood = woodQuantity(5, 2, 1);
console.log('wood needed', wood);



// my need

function money(shirt, pant, shoe){
    const perShirtPrice = 500;
    const perPantPrice = 800;
    const perShoePrice = 1500;


    const totalShirt = shirt * perShirtPrice;
    const totalPant = pant * perPantPrice;
    const totalShoe = shoe * perShoePrice;


    const totalPrice = totalShirt + totalPant + totalShoe;
    return totalPrice;

}
const taka = money(2, 3, 1);
console.log('Total price', taka);

