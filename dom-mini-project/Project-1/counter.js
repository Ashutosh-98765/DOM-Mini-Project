let counterValue = document.querySelector('#counter-value');

let container = document.querySelector('.container');

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;

counterValue.innerText = counter;

container.addEventListener('click', (e) => {
    const number = document.querySelector("#increment-decrement-box").value;

    if (e.target.id === "increment") {
        counter += Number(number);
    }
    else if (e.target.id === "decrement") {
        counter -= Number(number);
    }
    else if (e.target.id === "reset") {
        counter = 0;
    }
    localStorage.setItem('counter', counter);
    counterValue.innerText = counter;
})
