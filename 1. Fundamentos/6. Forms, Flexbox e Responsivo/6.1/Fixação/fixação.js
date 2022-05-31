
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//1 
HREF_LINK.addEventListener('click', stopWork)

//2
INPUT_CHECKBOX.addEventListener('click', stopWork)


//3
INPUT_TEXT.addEventListener('keypress', stopWork)


function stopWork(event) {
    if (event.key !== 'a') {
        event.preventDefault()
    }
}