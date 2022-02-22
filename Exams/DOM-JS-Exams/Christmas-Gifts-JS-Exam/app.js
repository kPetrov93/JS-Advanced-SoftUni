function solution() {
    let [gifts, send, discard] = document.querySelectorAll('section ul');
    let inputElem = document.querySelector('input');

    document.querySelector('button').addEventListener('click', addGifts);

    function addGifts() {

        let giftName = inputElem.value;
        inputElem.value = '';

        let liElement = e('li', giftName, 'gift');
        let sendButton = e('button', 'Send', 'sendButton');
        let discardButton = e('button', 'Discard', 'discardButton');

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);
        gifts.appendChild(liElement);

        sendButton.addEventListener('click', sentGifts);
        discardButton.addEventListener('click', discardGifts);

        sortGifts();
        function sentGifts() {
            liElement.removeChild(sendButton);
            liElement.removeChild(discardButton);
            send.appendChild(liElement);

        }

        function discardGifts() {
            liElement.removeChild(sendButton);
            liElement.removeChild(discardButton);
            discard.appendChild(liElement);
        }
    }


    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => gifts.appendChild(g));
    }

    function e(type, content, className) {
        let result = document.createElement(type);
        result.textContent = content;
        if (className) {
            result.className = className;
        }
        return result;
    }
}