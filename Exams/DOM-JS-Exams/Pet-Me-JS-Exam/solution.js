function solve() {
    let fields = document.querySelectorAll('#container input');
    let addButton = document.querySelector('#container button');


    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let name = fields[0].value;
        let age = fields[1].value;
        let kind = fields[2].value;
        let currentOwner = fields[3].value;

        if (name.length > 0 && age.length > 0 && !Number.isNaN(Number(age)) && kind.length > 0 && currentOwner.length > 0) {

            let placeHolder = document.querySelector('#adoption ul');
            let placeLI = document.createElement('li');
            let paragraph = document.createElement('p');
            let spanElem = document.createElement('span');
            let contactButton = document.createElement('button');

            paragraph.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
            spanElem.textContent = `Owner: ${currentOwner}`;
            contactButton.textContent = `Contact with owner`;

            placeLI.appendChild(paragraph);
            placeLI.appendChild(spanElem);
            placeLI.appendChild(contactButton);
            placeHolder.appendChild(placeLI);

            fields[0].value = '';
            fields[1].value = '';
            fields[2].value = '';
            fields[3].value = '';

            contactButton.addEventListener('click', () => {

                placeLI.removeChild(contactButton);

                let divElem = document.createElement('div');
                let inputField = document.createElement('input');
                inputField.placeholder = 'Enter your names';
                let newButton = document.createElement('button');
                newButton.textContent = 'Yes! I take it!'

                divElem.appendChild(inputField);
                divElem.appendChild(newButton);
                placeLI.appendChild(divElem)

                newButton.addEventListener('click', () => {
                    console.log('Pushed');
                    if (inputField.value.length > 0) {
                        let finalPlace = document.querySelector('#adopted ul');
                        let newSpan = document.createElement('span');
                        let lastButton = document.createElement('button');
                        newSpan.textContent = `New Owner: ${inputField.value}`;
                        lastButton.textContent = `Checked`;

                        let finalLi = document.createElement('li');
                        finalLi.appendChild(paragraph);
                        finalLi.appendChild(newSpan);
                        finalLi.appendChild(lastButton);

                        finalPlace.appendChild(finalLi);
                        placeHolder.removeChild(placeLI);

                        lastButton.addEventListener('click', () => {
                            finalPlace.removeChild(finalLi);
                        })
                    }
                })
            })
        }
    })
}