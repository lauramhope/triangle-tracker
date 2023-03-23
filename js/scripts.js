// Business Logic

// function compare(sideA, sideB, sideC) {
//   return sideA + sideB + sideC;
// }

// function compareABC(sideA, sideB, sideC) {
//   return sideA === sideB === sideC;
// }

// function compareAB(sideA, sideB) {
//   return sideA === sideB && sideA !== sideC;
// }

// function compareAC(sideA, sideC) {
//   return sideA === sideC && sideA !== sideB;
// }

// function compareBC(sideB, sideC) {
//   return sideB === sideC && sideB !== sideA;
// }


// everything dealing w/ raw data = business logic
// grabbing data from user or showing info to the user - lines 29-31 & 48 = UI

function calcTriangle(event) {
  event.preventDefault(); 
  const sideA = parseInt(document.querySelector("input#sideA").value);
  const sideB = parseInt(document.querySelector("input#sideB").value);
  const sideC = parseInt(document.querySelector("input#sideC").value); 
  // console.log("side A", sideA);
  // console.log("sibe B", sideB);
  // console.log("side C", sideC);
  // const  = document.getElementById("result").value;

  let result;
  if (sideA === sideB && sideA === sideC) {
    result = "Equilateral";
  } else if ((sideA === sideB && sideA !== sideC) || (sideA === sideC && sideA !== sideB) || (sideB === sideC && sideB !== sideA)) {
    result = "Isosceles";
  } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    result = "Scalene";
  } else if ((sideB + sideC < sideA) || (sideA + sideC < sideB) || (sideA + sideB < sideC)){
    result = "Not a triangle!";
  }

  document.getElementById("answer").innerText = result;
  // console.log(result);
}

window.addEventListener("load", function() { //anonymous function used for callback for windows load event
  const form = document.getElementById("triangleGenerator");
  form.addEventListener("submit", calcTriangle); // numCalc function dec. used for callback for forms submission event
});

