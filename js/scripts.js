// Business Logic -- everything dealing w/ raw data
// grabbing data from user or showing info to the user - lines 29-31 & 48 = UI

function calcTriangle(event) {
  event.preventDefault(); 
  const sideA = parseInt(document.querySelector("input#sideA").value); // UI
  const sideB = parseInt(document.querySelector("input#sideB").value); // UI
  const sideC = parseInt(document.querySelector("input#sideC").value); // UI

  let result;
  if ((sideB + sideC < sideA) || (sideA + sideC < sideB) || (sideA + sideB < sideC)) {
    result = "Not a triangle!";
  } else if (sideA === sideB && sideA === sideC) {
    result = "Equilateral";
  } else if ((sideA === sideB && sideA !== sideC) || (sideA === sideC && sideA !== sideB) || (sideB === sideC && sideB !== sideA)) {
    result = "Isosceles";
  } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    result = "Scalene";
  }

  document.getElementById("answer").innerText = result; // UI
}

window.addEventListener("load", function() { //anonymous function used for callback for windows load event
  const form = document.getElementById("triangleGenerator");
  form.addEventListener("submit", calcTriangle); // numCalc function dec. used for callback for forms submission event
});

