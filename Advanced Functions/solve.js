function solve(area, vol, input) {
    let parsedInput = JSON.parse(input)
    let result = []

    for (let entrys of parsedInput) {

        let obj = {
            area: area.call(entrys),
            volume: vol.call(entrys)

        }
        result.push(obj)
    }

    return result;

}
function vol() {
    return Math.abs(this.x * this.y * this.z);

};

function area() {
    return Math.abs(this.x * this.y);

};
console.log(solve(area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`))
