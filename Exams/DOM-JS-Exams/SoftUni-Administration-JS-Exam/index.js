function solve() {
    let addButton = document.querySelector('div:nth-child(4)');

    addButton.addEventListener('click',(e) => {
        e.preventDefault();
        
        let lectureElem = document.querySelector('input[name="lecture-name"]');
        let dateElem = document.querySelector('input[name="lecture-date"]');
        let moduleElem = document.querySelector('select[name="lecture-module"]')

        if(lectureElem.value.length > 0 && dateElem.value.length > 0 && moduleElem.value != 'Select module' ){
            
            let trainingLocation = document.querySelector('section.user-view.section-view > div');
            let divElem = document.createElement('div');
            let h3Text = document.createElement('h3');
            let ulElem = document.createElement('ul');
            let liElem = document.createElement('li');
            let h4Elem = document.createElement('h4');
            let delButton = document.createElement('button');

            let yearMonth = dateElem.value.split('-');
            let dayHour = yearMonth[2].split('T');

            delButton.classList='red';
            delButton.textContent='Del';
            h4Elem.textContent = `${lectureElem.value} - ${yearMonth[0]}/${yearMonth[1]}/${dayHour[0]} - ${dayHour[1]}`;
            liElem.classList = 'flex';
            divElem.classList = 'module';
            h3Text.textContent = `${(moduleElem.value).toUpperCase()}-MODULE`;

            liElem.appendChild(h4Elem);
            liElem.appendChild(delButton);
            ulElem.appendChild(liElem);
            divElem.appendChild(h3Text);
            divElem.appendChild(ulElem);
            trainingLocation.appendChild(divElem);

        }
    })
};