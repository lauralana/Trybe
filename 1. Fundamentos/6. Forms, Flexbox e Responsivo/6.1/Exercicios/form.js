const submit = document.getElementById('submit-btn')
const clear = document.getElementById('clear-btn')
const textArea = document.getElementById('myText');

submit.addEventListener('click', dontWork)

function dontWork(event) {
    event.preventDefault()
}

clear.addEventListener('click', deleteAll)

function deleteAll() {
    const inputsOfForms = document.querySelectorAll('input');
    for (let i = 0; i < inputsOfForms.length; i += 1) {
        const inputs = inputsOfForms[i]
        inputs.value = '';
        inputs.checked = false;
    }
    textArea.value = '';
}

//bonus
const name = document.getElementById('myName').value.length;
const email = document.getElementById('myEmail').value.length;

function testInfo() {
    if (name < 10 || name > 40) {
        alert('Dados inválidos! Quantidade de caracteres inválida no campo nome.');
    } else if (email < 8 || email > 50) {
        alert('Dados inválidos! Quantidade de caracteres inválida no campo e-mail.')
    } else if (textArea.value.length < 100 || textArea.value.length > 500) {
        alert('Dados inválidos! Verifique a quantidade de caracteres do seu texto.')
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
}
