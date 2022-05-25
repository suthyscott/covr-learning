var button = document.querySelector('button');
var input1 = document.getElementById('num1'); //tell TS that we're sure this will select a valid input element
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
