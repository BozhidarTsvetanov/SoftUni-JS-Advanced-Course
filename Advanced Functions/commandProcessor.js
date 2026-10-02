function solution() {
    let modifiedStr = ''

    return{
        append,
        removeStart,
        removeEnd,
        print
    }
    
    function append(string) {
        modifiedStr += string
    }
    function removeStart(num) {
       modifiedStr = modifiedStr.slice(num)
    }
    function removeEnd(num) {
       modifiedStr = modifiedStr.slice(0, -num)
    }
    function print() {

        console.log(modifiedStr);
        
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print()
