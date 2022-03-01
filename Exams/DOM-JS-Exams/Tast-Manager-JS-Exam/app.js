function solve() {
    
    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dateElement = document.getElementById('date');
    let addButton = document.getElementById('add');

    addButton.addEventListener('click', (f)=>{
        f.preventDefault();

        if(taskElement.value.length > 0 && descriptionElement.value.length > 0 && dateElement.value.length > 0){
            
            let openElement = document.querySelector('section:nth-child(2) > div:nth-child(2)');
            let articleElement = document.createElement('article');
            let h3Element = e('h3',taskElement.value)
            let pDescription = document.createElement('p');
            let pDate = document.createElement('p');
            let divElement = document.createElement('div');
            let startButton = e('button','Start','green');
            let deleteButton = e('button','Delete','red');

            pDescription.textContent = `Description: ${descriptionElement.value}`
            pDate.textContent = `Due Date: ${dateElement.value}`
            divElement.className = 'flex';
            divElement.appendChild(startButton);
            divElement.appendChild(deleteButton);

            articleElement.appendChild(h3Element);
            articleElement.appendChild(pDescription);
            articleElement.appendChild(pDate);
            articleElement.appendChild(divElement);

            openElement.appendChild(articleElement);

            taskElement.value ='';
            descriptionElement.value ='';
            dateElement.value ='';

            deleteButton.addEventListener('click', ()=>{
                openElement.removeChild(articleElement);
            })

            startButton.addEventListener('click', ()=> {

                let inProgressElement = document.getElementById('in-progress');
                let secondDivElem = document.createElement('div');
                secondDivElem.className = 'flex';
                let secondDeleteButton = e('button','Delete','red');
                let finishButton = e('button','Finish','orange');

                secondDivElem.appendChild(secondDeleteButton);
                secondDivElem.appendChild(finishButton);

                openElement.removeChild(articleElement);

                articleElement.removeChild(divElement);
                articleElement.appendChild(secondDivElem);
                inProgressElement.appendChild(articleElement);

                secondDeleteButton.addEventListener('click', () => {
                    inProgressElement.removeChild(articleElement);
                })

                finishButton.addEventListener('click', () => {

                    let completeElement = document.querySelector('section:nth-child(4) > div:nth-child(2)');
                    articleElement.removeChild(secondDivElem);
                    inProgressElement.removeChild(articleElement);
                    completeElement.appendChild(articleElement);
                })
            })
        }
    })

    function e(type,content,className){
        let element = document.createElement(type);
        element.textContent = content;
        if(className){
            element.className = className;
        }
        return element;
    }

}