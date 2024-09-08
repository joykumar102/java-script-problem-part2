const prices = [20000, 350000, 480000, 25000, 120000, 12000, 16000];


function getMin(numbers){
    let min  = numbers[0];
    for(const num of numbers){
       if(num < min){
        min = num;
       }

    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is:', cheap);
