function calculator() {
    let first
    let second
    let result
    return{
        init,
        add,
        subtract
    }

    function init(selector1, selector2, resultSelector){
        first = document.querySelector(selector1)
        second = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    }

    function add(){
        result.value = Number(first.value) + Number(second.value);
    }

    function subtract(){
        result.value = Number(first.value) - Number(second.value);
    }
     
}
let calculate = calculator();
calculate.init('#num1', '#num2', '#result');
calculate.add();
