function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let people = document.querySelectorAll('tbody tr');
   let search = document.getElementById('searchField');

   function onClick() {
      for(person of people){
         person.classList.remove('select');
         if(person.textContent.includes(search.value) && search.value !== ''){
            person.className = 'select';
         }
      }
      search.value = '';
   }
}