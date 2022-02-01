function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ');
  let input = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let converted = '';
  
  if (input == 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      let current = text[i];
      if (i == 0) {
        converted += current;
      } else {
        current = current.charAt(0).toUpperCase() + current.slice(1);
        converted += current;
      }
      result.textContent = converted;
    }
  } else if (input == 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      let current = text[i];
      current = current.charAt(0).toUpperCase() + current.slice(1);
      converted += current;
    }
    result.textContent = converted;
  } else {
    result.textContent = 'Error!';
  }
}