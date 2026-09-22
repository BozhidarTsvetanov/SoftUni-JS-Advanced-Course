function townsToJSON(input) {

    input.shift()
    let obj = {}
    let array = []

    for (let element of input) {
        let [wSpace, townName, latitudeNum, longitudeNum, wSpace2] = element.split('|')
        townName = townName.trim()
        latitudeNum = (latitudeNum).trim()
        longitudeNum = (longitudeNum).trim()
        latitudeNum = Number(Number(latitudeNum).toFixed(2))
        longitudeNum = Number(Number(longitudeNum).toFixed(2))

        obj = {
            Town: townName,
            Latitude: latitudeNum,
            Longitude: longitudeNum 
        }
        array.push(obj)
    }
    let json = JSON.stringify(array)
    console.log(json);
    
}
townsToJSON
(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
