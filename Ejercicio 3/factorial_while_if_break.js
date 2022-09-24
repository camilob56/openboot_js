let i = 1; 
let max = 10;
let num = 1;

while(i >= 1) {
    num = num * i;   
    i++;
    if (i >= max) {   
        break;    
    }
}

console.log(`El factorial de ${max} es: ${num}`);