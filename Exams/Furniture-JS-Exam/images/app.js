window.addEventListener('load', solve);

function solve() {


    let addBtn = document.getElementById('add');
    let list = document.getElementById('furniture-list');

    addBtn.addEventListener('click', (e) => {

        e.preventDefault();

        let modelElement = document.getElementById('model');
        let yearElement = document.getElementById('year');
        let descriptionElement = document.getElementById('description');
        let priceElement = document.getElementById('price');
        let price = Number(priceElement.value);

        if (modelElement.value.length > 0 && descriptionElement.value.length > 0 && yearElement.value.length > 0 &&
            Number(yearElement.value) > 0 && priceElement.value.length > 0 && Number(priceElement.value) > 0) {

            let modelTD = document.createElement('td');
            let priceTD = document.createElement('td');
            let actionTD = document.createElement('td');
            let infoTR = document.createElement('tr');
            let moreInfo = document.createElement('tr');
            let yearTD = document.createElement('td');
            let descriptionTD = document.createElement('td');
            let totalPriceElement = document.querySelector('.total-price');

            infoTR.classList = 'info';
            moreInfo.classList = 'hide';
            moreInfo.style.display = 'none';
            descriptionTD.colSpan = 3;

            let moreBtn = document.createElement('button');
            let buyBtn = document.createElement('button');
            moreBtn.classList = 'moreBtn';
            buyBtn.classList = 'buyBtn';

            modelTD.textContent = modelElement.value;
            priceTD.textContent = Number(priceElement.value).toFixed(2);
            moreBtn.textContent = 'More Info';
            buyBtn.textContent = 'Buy it';
            yearTD.textContent = `Year: ${yearElement.value}`;
            descriptionTD.textContent = `Description: ${descriptionElement.value}`;

            actionTD.appendChild(moreBtn);
            actionTD.appendChild(buyBtn);
            infoTR.appendChild(modelTD);
            infoTR.appendChild(priceTD);
            infoTR.appendChild(actionTD);
            list.appendChild(infoTR);
            
            moreInfo.appendChild(yearTD);
            moreInfo.appendChild(descriptionTD);
            list.appendChild(moreInfo);

            modelElement.value = '';
            yearElement.value = '';
            descriptionElement.value = '';
            priceElement.value = '';
            
            moreBtn.addEventListener('click',(e) => {
                
                if(e.currentTarget.textContent == 'More Info'){
                    moreBtn.textContent = 'Less Info'
                    moreInfo.style.display = 'contents'
                }else if(e.currentTarget.textContent == 'Less Info'){
                    moreBtn.textContent = 'More Info'
                    moreInfo.style.display = 'none'
                }
                
            })

            buyBtn.addEventListener('click',() =>{

                let currentTotalPrice = Number(totalPriceElement.textContent);
                let totalPrice = currentTotalPrice + price;
                totalPriceElement.textContent = totalPrice.toFixed(2);

                infoTR.remove();
                moreInfo.remove();
            })
        }

    })
}