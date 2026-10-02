function solution(num) {
    
    function add5(numToAdd) {

       return num +  numToAdd
    }
    return add5
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));
