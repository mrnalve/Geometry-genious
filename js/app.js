// click blog
document.getElementById("blog").addEventListener("click", () => {
  window.location.href = "../blog.html";
});
let count = 0;
// Calculation for the triangle
document.getElementById("triangleButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("triangleFirstInput");
  let secondValueString = getSecondInputNumber("triangleSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("triangleFirstInput");
  let secondInputField = document.getElementById("triangleSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "triangleFirstValue",
    "triangleSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("triangleTitle");
  // get the calculation result
  let result =
    0.5 * parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Calculation for Rectangle
document.getElementById("rectangleButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("rectangleFirstInput");
  let secondValueString = getSecondInputNumber("rectangleSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("rectangleFirstInput");
  let secondInputField = document.getElementById("rectangleSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "rectangleFirstValue",
    "rectangleSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("rectangleTitle");
  // get the calculation result
  let result = parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Calculation for Parallelogram
document.getElementById("parallelogramButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("parallelogramFirstInput");
  let secondValueString = getSecondInputNumber("parallelogramSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("parallelogramFirstInput");
  let secondInputField = document.getElementById("parallelogramSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "parallelogramFirstValue",
    "parallelogramSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("parallelogramTitle");
  // get the calculation result
  let result = parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Calculation for the Rhombus
document.getElementById("rhombusButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("rhombusFirstInput");
  let secondValueString = getSecondInputNumber("rhombusSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("rhombusFirstInput");
  let secondInputField = document.getElementById("rhombusSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "rhombusFirstValue",
    "rhombusSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("rhombusTitle");
  // get the calculation result
  let result =
    0.5 * parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Calculation for the Pentagon
document.getElementById("pentagonButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("pentagonFirstInput");
  let secondValueString = getSecondInputNumber("pentagonSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("pentagonFirstInput");
  let secondInputField = document.getElementById("pentagonSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "pentagonFirstValue",
    "pentagonSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("pentagonTitle");
  // get the calculation result
  let result =
    0.5 * parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Ellipse for the Ellipse
document.getElementById("ellipseButton").addEventListener("click", () => {
  // function for the get input value
  let firstValueString = getFirstInputNumber("ellipseFirstInput");
  let secondValueString = getSecondInputNumber("ellipseSecondInput");
  // condition for the check number
  let firstInputField = document.getElementById("ellipseFirstInput");
  let secondInputField = document.getElementById("ellipseSecondInput");
  if (
    isNaN(firstValueString) ||
    isNaN(secondValueString) ||
    firstValueString === "" ||
    secondValueString === ""
  ) {
    alert("please provide valid input value");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  } else if (firstValueString < 0 || secondValueString < 0) {
    alert("Please provide positive number");
    firstInputField.value = "";
    secondInputField.value = "";
    return;
  }
  // display the value
  displayValue(
    "ellipseFirstValue",
    "ellipseSecondValue",
    firstValueString,
    secondValueString
  );
  // get the title of card inside the card
  let cardTitle = displayTitle("ellipseTitle");
  // when clicked show the multiplication icon
  let multiplicationEllipse = document.getElementsByClassName(
    "multiplicationEllipse"
  );
  for (const cross of multiplicationEllipse) {
    cross.style.display = "inline-block";
  }
  // get the calculation result
  let result =
    3.14 * parseFloat(firstValueString) * parseFloat(secondValueString);
  result = result.toFixed(2);
  // show the full result inside the calculation area
  count++;
  calculationArea(count, cardTitle, result);
});

// Hover effect in all cards
let allCards = document.getElementsByClassName("cards");
for (const card of allCards) {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = randomColorGenerate();
  });
}
