function pizzaSplit () {
  let slices = prompt('Please enter the amount of pizza slices');
  let people = prompt('Please enter the amount of people sharing the pizza');

  let result = slices / people;

  alert(`Each person gets ${result} slices of pizza; from our ${slices} slice pizza`);
}

pizzaSplit();