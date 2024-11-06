
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the secind number"));
let action = prompt("Chose the action summary - 1, substraction - 2, multiplation - 3, dividing - 4");
if (action == 1 ) {
  summary = a + b;
  alert("summary = " + summary);
}
else if (action == 2) {
  substraction = a - b;
  alert("substraction = " + substraction);
}
else if (action == 3) {
  multiplation = a * b;
  alert("multiplation" + multiplation);
}
else if(action == 4) {
  if (b == 0) {
    alert("Dividing by 0, not working");
    }
  else {
    dividing = a/b;
  alert("dividing = "+ dividing);
  }
}
else {
  alert("This is not the rigth option(");
}
