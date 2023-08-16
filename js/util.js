
// get value from an element by id
function getValueById(id) {
    const element = document.getElementById('old-price');
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}