function notify(message) {
  let element = document.getElementById('notification');
  element.innerText = message;
  element.style.display = 'block';

  element.addEventListener('click', (event) =>{
    event.target.style.display = 'none';
  })
}