const products = [
    {name: 'shart', price: 600, quantity: 2 },
    {name: 'pant', price: 900, quantity: 3 },
    {name: 'shoe', price: 2000, quantity: 1 },
    {name: 'glass', price: 500, quantity: 2 }
];

function cardTotal (products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;

        total = total + thisProductCost;
    }
    return total;
}

const shopingCost = cardTotal(products);
console.log(shopingCost);