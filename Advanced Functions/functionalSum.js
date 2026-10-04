function functionalSum(num) {
    let sum = num;

    function add(nextNum) {
        sum += nextNum;
        return add;
    }

    add.toString = function () {
        return String(sum);
    };

    return add;
}
let sum = functionalSum(1);
console.log(sum(6)(-3).toString());
