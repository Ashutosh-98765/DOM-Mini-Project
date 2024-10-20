const moveAllToRight = document.querySelector('.move-all-to-right');

const moveToRight = document.querySelector('.move-to-right');

const moveToLeft = document.querySelector('.move-to-left');

const moveAllToLeft = document.querySelector('.move-all-to-left');

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const container = document.querySelector('.transfer-list');

moveToRight.disabled = true;
moveToLeft.disabled = true;
function disableButtons() {
    moveAllToLeft.disabled = rightBox.querySelectorAll('label').length === 0;
    moveAllToRight.disabled = leftBox.querySelectorAll('label').length === 0;
    moveToLeft.disabled = rightBox.querySelectorAll('input:checked').length === 0;
    moveToRight.disabled = leftBox.querySelectorAll('input:checked').length === 0;
}

container.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.className === 'move-all-to-right') {
            moveAllItems(leftBox, rightBox);
        }
        else if (e.target.className === 'move-all-to-left') {
            moveAllItems(rightBox, leftBox);
        }
        else if (e.target.className === 'move-to-left') {
            moveSelectedItems(rightBox, leftBox);
        }
        else if (e.target.className === 'move-to-right') {
            moveSelectedItems(leftBox, rightBox);
        }
    }
    else {
        if (e.target.parentNode.className === 'left' || e.target.parentNode.className === 'right') {
            disableButtons();
        }
    }
})
function moveAllItems(sourceBox, targetBox) {
    const allItems = sourceBox.querySelectorAll('input');
    allItems.forEach((item) => {
        targetBox.appendChild(item.parentNode);
        item.checked = false;
    })
    disableButtons();
}
function moveSelectedItems(sourceBox, targetBox) {
    const selectedItems = sourceBox.querySelectorAll('input:checked');
    selectedItems.forEach((item) => {
        targetBox.appendChild(item.parentNode);
        item.checked = false;
    })
    disableButtons();
}