function solve() {
  let textToConvert = document.getElementById('text').value;
  let caseToDo = document.getElementById('naming-convention').value
  let result = document.getElementById('result')

  if (caseToDo === "Camel Case") {

    result.textContent = toCamelCase(textToConvert)
    function toCamelCase(text) {
      let words = text.split(' ');

      return words[0].toLowerCase() +
        words.slice(1)
          .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join('');

    }
  } else if (caseToDo === "Pascal Case") {
    result.textContent = toPascalCase(textToConvert)
    function toPascalCase(text) {
      let words = text.split(' ');

      return words
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('');
    }
  } else {
    result.textContent = 'Error!'
  }
}
