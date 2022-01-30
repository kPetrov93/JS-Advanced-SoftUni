function extractText() {
    let extractElem = document.getElementById('items');
    let result = document.getElementById('result');
    result.textContent = extractElem.textContent;
    console.log(extractElem.textContent);
}