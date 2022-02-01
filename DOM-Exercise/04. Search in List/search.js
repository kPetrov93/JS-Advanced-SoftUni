function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let counter = 0;

   for (let town of towns) {
      if (town.textContent.includes(match)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   }
   result.textContent = `${counter} matches found`;
}
