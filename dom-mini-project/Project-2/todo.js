let inputBox = document.querySelector('.input-box');
let mainContainer = document.querySelector('main');

let emptyListMessage = document.createElement('p');
emptyListMessage.innerText = "Oops! List is empty";
emptyListMessage.style.fontSize = "25px";
emptyListMessage.style.fontWeight = "bold";
mainContainer.appendChild(emptyListMessage);


function checkEmpty() {
    emptyListMessage.style.display = (mainContainer.children.length > 1) ? 'none' : 'block';
}

function addTask(inputValue) {
    let container = document.createElement('div');
    container.className = 'task-container';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
   
    let textValue = document.createElement('p');
    textValue.innerHTML = inputValue;
    textValue.style.fontSize = "25px";
    textValue.style.fontWeight = "bold";
    textValue.style.marginRight = "20px";
    container.appendChild(textValue);

    let editMark = document.createElement('div');
    editMark.className = 'edit-mark';
    editMark.innerHTML = `<img src="./edit.svg" alt="Edit Icon" width="25px" height="25px">`;
    editMark.style.marginRight = "20px";
    editMark.style.cursor = "pointer";
    container.appendChild(editMark);

    let saveMark = document.createElement('div');
    saveMark.className = 'save-mark';
    saveMark.innerHTML = `<img src="./save.svg" alt="Save Icon" width="25px" height="25px">`;
    saveMark.style.marginRight = "20px";
    saveMark.style.cursor = "pointer";
    saveMark.style.display = "none";
    container.appendChild(saveMark);

    let deleteMark = document.createElement('div');
    deleteMark.className = 'delete-mark';
    deleteMark.innerHTML = `<img src="./bin.svg" alt="Delete Icon" width="25px" height="25px">`;
    deleteMark.style.cursor = "pointer";
    container.appendChild(deleteMark);
    
    mainContainer.appendChild(container);
    checkEmpty();
}

mainContainer.addEventListener('click', (e) => {

    let container = e.target.closest('.task-container');

    if (!container) return;

    let textValue = container.querySelector('p');
    let editMark = container.querySelector('.edit-mark');
    let saveMark = container.querySelector('.save-mark');

    if (e.target.closest('.edit-mark')) {
        let editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = textValue.innerHTML;
        
        editInput.style.fontSize = "25px";
        editInput.style.marginRight = "20px";

        container.replaceChild(editInput, textValue);

        editMark.style.display = 'none';
        saveMark.style.display = 'block';

        saveMark.onclick = () => {

            if (editInput.value.trim() !== "") {
                textValue.innerHTML = editInput.value;
                container.replaceChild(textValue, editInput);
                saveMark.style.display = 'none';
                editMark.style.display = 'block';
            }
        };
    } else if (e.target.closest('.delete-mark')) {
        mainContainer.removeChild(container);
        checkEmpty();
    }
});

inputBox.addEventListener('keydown', function (e) {
    if (e.key === "Enter" && inputBox.value.trim() !== "") {
        addTask(inputBox.value);
        inputBox.value = "";
    }
});

checkEmpty();
