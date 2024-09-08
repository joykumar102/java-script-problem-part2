const  disha = 50;
const salman = 70;

if(disha > salman){
    console.log('Disha will eat the mango')
}
else{
    console.log('Sharukh will eat the mango')
}


// inside a function

function getmax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getmax(56, 80);
const max2 = getmax(96, 85);
const maxUnder = getmax(max1, max2);


console.log('max of tow is:', maxUnder);
