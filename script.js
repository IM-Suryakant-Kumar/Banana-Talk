const textInput = document.querySelector(`#text-input`);
const translator = document.querySelector(`#btn-translator`);
const output = document.querySelector(`#translated-output`);
const url = `https://api.funtranslations.com/translate/minion.json`;

translator.addEventListener("click", () => {
    const text = textInput.value;

    fetch(`${url}?text=${text}`)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(err => console.log(err))
})
