function calculate(x,y, operation) {
    let answer = 0;
    if(operation === 'add') {
        answer = (x+y)
    } else if(operation === 'subtract') {
        answer = (x-y)
    } else if(operation === 'multiply') {
        answer = (x*y)
    } else if(operation === 'divide') {
        answer = (x/y)
    }

    return answer
}

console.log(calculate(5,6,'multiply'))
console.log(calculate(10,5,'divide'))
console.log(calculate(6,7,'add'))
console.log(calculate(4,3,'subtract'))