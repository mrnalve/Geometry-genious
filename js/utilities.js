// get the value of first input field
function getFirstInputNumber(firstInput) {
  let firstInputField = document.getElementById(firstInput);
  let firstValueString = firstInputField.value;
  return firstValueString;
}

// get the value of second input field
function getSecondInputNumber(secondInput) {
  let secondInputField = document.getElementById(secondInput);
  let secondValueString = secondInputField.value;
  return secondValueString;
}

// display the value which gets inside the input
function displayValue(
  firstValue,
  secondValue,
  firstValueNumber,
  secondValueNumber
) {
  let triangleFirstValue = document.getElementById(firstValue);
  let triangleSecondValue = document.getElementById(secondValue);
  triangleFirstValue.innerText = firstValueNumber;
  triangleSecondValue.innerText = secondValueNumber;
}

// get the title of card inside the card
function displayTitle(cardTitle) {
  let cardTitleText = document.getElementById(cardTitle).innerText;
  return cardTitleText;
}

function calculationArea(count, triangleTitle, result) {
  let tr = document.createElement("tr");
  let tableBody = document.getElementById("tableBody");
  tr.innerHTML = `
    <th>${count}</th>
    <td class="font-bold px-1">${triangleTitle}</td>
    <td class="font-medium px-1">${result}cm<sup>2</sup></td>
    <td class ="px-1 pr-2"><button class="btn btn-info w-[125px] normal-case text-white text-[14px]">
        Convert to m<sup>2</sup></button>
    </td>
    `;
  tableBody.appendChild(tr);
}

// random color function
function randomColorGenerate() {
  let r = Math.round(Math.random() * 256);
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let rgb = "rgba(" + r + "," + g + "," + b + "," + 0.5 + ")";
  return rgb;
}
