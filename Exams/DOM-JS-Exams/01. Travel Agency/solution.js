window.addEventListener('load', solution);

function solution() {

  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  let infoWindow = document.getElementById('infoPreview');

  submitBtn.addEventListener('click', () => {

    let nameElement = document.getElementById('fname');
    let emailElement = document.getElementById('email');
    let phoneElement = document.getElementById('phone');
    let addressElement = document.getElementById('address');
    let postalCodeElement = document.getElementById('code');

    let arr = [];
    arr.push(nameElement.value, emailElement.value,phoneElement.value,addressElement.value,postalCodeElement.value);
 
    if (nameElement.value.length == 0 || emailElement.value.length == 0) {
      return;
    }

    let nameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    let phoneLi = document.createElement('li');
    let addressLi = document.createElement('li');
    let postalCodeLi = document.createElement('li');

    nameLi.textContent = `Full Name: ${nameElement.value}`;
    emailLi.textContent = `Email: ${emailElement.value}`;
    phoneLi.textContent = `Phone Number: ${phoneElement.value}`;
    addressLi.textContent = `Address: ${addressElement.value}`;
    postalCodeLi.textContent = `Postal Code: ${postalCodeElement.value}`;

    infoWindow.appendChild(nameLi);
    infoWindow.appendChild(emailLi);
    infoWindow.appendChild(phoneLi);
    infoWindow.appendChild(addressLi);
    infoWindow.appendChild(postalCodeLi);

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    nameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    addressElement.value = '';
    postalCodeElement.value = '';

    editBtn.addEventListener('click', () => {

      nameElement.value = arr[0];
      emailElement.value = arr[1];
      phoneElement.value = arr[2];
      addressElement.value = arr[3];
      postalCodeElement.value = arr[4];

      infoWindow.removeChild(nameLi);
      infoWindow.removeChild(emailLi);
      infoWindow.removeChild(phoneLi);
      infoWindow.removeChild(addressLi);
      infoWindow.removeChild(postalCodeLi);

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

    })

    continueBtn.addEventListener('click', () => {

      let block = document.getElementById('block');
      let massage = document.createElement('h3');
      massage.innerText='Thank you for your reservation!';
      block.innerHTML = '';
      block.appendChild(massage);
      
    })
  })
}
