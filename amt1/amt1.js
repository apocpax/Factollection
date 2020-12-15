let count;
let value = document.querySelector('value')
let input = document.querySelector('input')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
console.log(input)

plus.addEventListener('click', userClick1);
minus.addEventListener('click', userClick2);



function render() {
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red"
    }



}

function userClick1() {
    count += parseInt(input.value);

    render()
}

function userClick2() {
    count -= parseInt(input.value);

    render()
}

function init() {
    count = 0
    input.value = 1
    render()
}
init()