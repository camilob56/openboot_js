let num = 8;

function numeros (num) {
    let arrayNums = [];
    let num1 = 0;
    let num2 = 1;
    for(let i = 0; i < num; i++){
        const num3 = num1 + num2;
        console.log(num1);
        num1 = num2;
        num2 = num3;
        arrayNums = [...arrayNums, num1];
    }
    return arrayNums;

}

const array = numeros(num);

console.log(array);