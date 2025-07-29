// let input = document.querySelector('input');
// function display(num){
//     input.value += num;
// }

// function res(){
//     let r = eval(input.value)
//     input.value = r;
// }



// function clearr(){
//     input.value = ''
// }

// Select the input element once
let input = document.querySelector('input');

// Function to display numbers/operators
function display(num) {
  input.value += num;
}

// Function to evaluate the expression and show result
function res() {
  try {
    let r = eval(input.value);
    input.value = r;
  } catch {
    input.value = "Error";
  }
}

// Function to clear the input
function clearr() {
  input.value = '';
}
