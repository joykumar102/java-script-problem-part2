const phones = [
    {name: 'xaomi', price: 20000, camera: '16mp', color: 'black'},
    {name: 'samsung', price: 28000, camera: '20mp', color: 'black'},
    {name: 'iPhone', price: 120000, camera: '126mp', color: 'black'},
    {name: 'oneplus', price: 50000, camera: '50mp', color: 'black'},
    {name: 'realme', price: 16000, camera: '66mp', color: 'black'},
    {name: 'blackbary', price: 200000, camera: '6mp', color: 'black'},
    {name: 'googlepixel', price: 800000, camera: '26mp', color: 'black'}
];


function getCheapestPhone(phones){
    let min = phones[0];
   for(const phone of phones){
    if(phone.price < min.price){
        min = phone
    }
}
return min;
   }
const cheap = getCheapestPhone(phones);
console.log('cheapest phone is:',cheap);




// High price phone
function getBigBugetPhone(phones){
    let max = phones[0];
   for(const phone of phones){
    if(phone.price > max.price){
        max = phone
    }
}
return max;
   }
const high = getBigBugetPhone(phones);
console.log('highbuget phone is:', high);