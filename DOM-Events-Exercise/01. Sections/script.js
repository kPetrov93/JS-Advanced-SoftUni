function create(words) {
   let input = words;
   let divElement = document.getElementById('content');

   for(let i=0; i<input.length; i++){
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text =document.createTextNode(input[i]);
      
      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);
      divElement.appendChild(div);
   }

   function makeVisiable(ev){
      ev.target.children[0].style.display = 'block';
      
   }

   divElement.addEventListener('click', makeVisiable)
   
}