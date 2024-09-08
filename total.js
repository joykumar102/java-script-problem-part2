const products = [
    {name: 'shart', price: 600 },
    {name: 'pant', price: 9000 },
    {name: 'shoe', price: 2000 },
    {name: 'glass', price: 500 }
];

function getShopingTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;

    }
    return total;
}

const total = getShopingTotal(products);
console.log('Total shoping korbo ajke:', total);