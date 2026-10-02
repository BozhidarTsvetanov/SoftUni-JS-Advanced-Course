function listProcessor(input) {

    let commandObj = {}
    let modifiedArray = []
    let key;
    let value;

    for (let command of input) {
        [key, value] = command.split(' ')
        commandObj[key] = value

        if (key === 'add') {
            modifiedArray.push(commandObj[key])

        }else if (key === 'remove') {
            modifiedArray = modifiedArray.filter(element => element !== value);

        }else if (key === 'print') {
            console.log(modifiedArray.join(','));
            
        }
        
    }

}
