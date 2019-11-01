function resize(obj) {
    obj.style.height = '1px';
    obj.style.height = `${12 + obj.scrollHeight}px`;
}

const requestText = document.querySelector('.sentence-input');
const requestButton = document.querySelector('#btn-request');
const resultArea = document.querySelector('.result-area');
const resultLoading = document.querySelector('.result-loading');

function toggleLoading(toggle) {
    const { classList } = resultLoading;
    if (toggle) {
        classList.remove('hidden');
        classList.add('show');
        return;
    }

    classList.remove('show');
    classList.add('hidden');
}
async function requestStartListener(event) {
    const text = requestText.value;
    console.log(text);
    const response = await fetch(
        `${document.location.origin}/gcp-lang?text=${text}`,
    );

    toggleLoading(false);

    if (!response.ok) {
        resultArea.innerHTML = 'request fail';
        return;
    }
    const json = await response.json();

    const stringResult = JSON.stringify(json, null, 4);
    console.log(json);
    resultArea.innerHTML = stringResult;
}

requestButton.addEventListener('click', (e) => {
    resultArea.innerHTML = '';
    toggleLoading(true);
    requestStartListener(e);
});
