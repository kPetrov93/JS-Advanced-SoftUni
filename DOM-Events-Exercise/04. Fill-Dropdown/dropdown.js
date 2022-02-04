function addItem() {
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let text = itemText.value;
    let value = itemValue.value;
  
    let options = document.createElement('option');
    options.textContent = text;
    options.value = value;
    
    document.getElementById('menu').appendChild(options);

    itemText.value = '';
    itemValue.value = '';
}