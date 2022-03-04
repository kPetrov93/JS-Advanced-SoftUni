function solve() {

    let firstNameElem = document.getElementById('fname');
    let lastNameElem = document.getElementById('lname');
    let emailElem = document.getElementById('email');
    let birthdayElem = document.getElementById('birth');
    let positionElem = document.getElementById('position');
    let salaryElem = document.getElementById('salary');

    let hireButton = document.getElementById('add-worker');

    hireButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (firstNameElem.value.length > 0 && lastNameElem.value.length > 0 && emailElem.value.length > 0
            && birthdayElem.value.length > 0 && positionElem.value.length > 0 && salaryElem.value.length > 0) {

            let sum = document.getElementById('sum');
            let placeToSum = Number(sum.textContent);
            placeToSum += Number(salaryElem.value);
            sum.textContent = placeToSum.toFixed(2);

            let windowElem = document.getElementById('tbody');
            let trElem = document.createElement('tr');
            let tdFirstName = document.createElement('td');
            tdFirstName.textContent = firstNameElem.value;
            let tdLastName = document.createElement('td');
            tdLastName.textContent = lastNameElem.value;
            let tdEmail = document.createElement('td');
            tdEmail.textContent = emailElem.value;
            let tdBirth = document.createElement('td');
            tdBirth.textContent = birthdayElem.value;
            let tdPositon = document.createElement('td');
            tdPositon.textContent = positionElem.value;
            let tdSalary = document.createElement('td');
            tdSalary.textContent = salaryElem.value;

            let firedButton = document.createElement('button');
            firedButton.classList = 'fired';
            firedButton.textContent = 'Fired'
            let editButton = document.createElement('button');
            editButton.classList = "edit";
            editButton.textContent = 'Edit';
            let tdButton = document.createElement('td');
            tdButton.appendChild(firedButton);
            tdButton.appendChild(editButton);

            trElem.appendChild(tdFirstName);
            trElem.appendChild(tdLastName);
            trElem.appendChild(tdEmail);
            trElem.appendChild(tdBirth);
            trElem.appendChild(tdPositon);
            trElem.appendChild(tdSalary);
            trElem.appendChild(tdButton);

            windowElem.appendChild(trElem);

            firstNameElem.value = '';
            lastNameElem.value = '';
            emailElem.value = '';
            birthdayElem.value = '';
            positionElem.value = '';
            salaryElem.value = '';

            editButton.addEventListener('click', () => {

                firstNameElem.value = tdFirstName.textContent;
                lastNameElem.value = tdLastName.textContent;
                emailElem.value = tdEmail.textContent;
                birthdayElem.value = tdBirth.textContent;
                positionElem.value = tdPositon.textContent;
                salaryElem.value = tdSalary.textContent;

                windowElem.removeChild(trElem);

                let sum = document.getElementById('sum');
                let placeToSum = Number(sum.textContent);
                placeToSum -= Number(salaryElem.value);
                sum.textContent = placeToSum.toFixed(2);

            })

            firedButton.addEventListener('click', () => {

                let sum = document.getElementById('sum');
                let placeToSum = Number(sum.textContent);
                placeToSum -= Number(tdSalary.textContent);
                sum.textContent = placeToSum.toFixed(2);

                windowElem.removeChild(trElem);
            })
        }
    })
}
solve()