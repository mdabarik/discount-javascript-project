
function getValueById(id) {
    const element = document.getElementById('old-price');
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextById(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
}