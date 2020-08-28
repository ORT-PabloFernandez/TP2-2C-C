
const simpleArraySum= (arrayNumeros)=> {
    let sumaNumerosArray=0;
    for (const num of arrayNumeros) {
        sumaNumerosArray=sumaNumerosArray+num;
    }
    return sumaNumerosArray;
}

console.log(simpleArraySum([1,2,3])===6);
console.log(simpleArraySum([5,2,3])===10);
console.log(simpleArraySum([100,200,350])===650);
console.log(simpleArraySum([1,2,3,20,40,120])===186);
console.log(simpleArraySum([0,0,0])===0);
