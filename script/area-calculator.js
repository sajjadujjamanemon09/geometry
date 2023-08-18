// triangle field
function calculateTriangleArea() {
  //  get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  //   get triangle height value
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

 // validate input
 if (isNaN(base) || isNaN(height)) {
  alert("Please insert a number");
  return;
}


  const area = 0.5 * base * height;
  console.log(area);

  //   show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;

  addToCalculationEntry("Triangle", area);
}

// rectangle field
function calculateRectangleArea() {
  // get rectangle width value
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  //  get rectangle length value
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

  // validate input
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }

  // calculate area
  const area = width * length;
  console.log(area);

  //   show rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;

  addToCalculationEntry("Rectangle", area);
}




// 
// reuseable function --> reduce repeatable code

// parallelogram field
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }
  const area = base * height;
  setElementInnerText("parallelogram-area", area);

  // add to calculation entry
  addToCalculationEntry("Parallelogram", area);
}


// ellipse field
function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");

   // validate input
   if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("Please insert a number");
    return;
  }


  const area = 3.14 * majorRadius * minorRadius;
  const areaToDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaToDecimal);

  addToCalculationEntry("Ellipse", areaToDecimal);
}


// rhombus field
function calculateRhombusArea(){
  const d1Side = getInputValue('rhombus-d1-side')
  const d2Side = getInputValue('rhombus-d2-side')

  // validate input
  if (isNaN(d1Side) || isNaN(d2Side)) {
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * d1Side * d2Side
  const areaToDecimal = area.toFixed(2)
  setElementInnerText('rhombus-area', areaToDecimal)
  addToCalculationEntry ('Rhombus-area', areaToDecimal)
}



// pentagon field
function calculatePentagonArea(){
  const pSide = getInputValue('pentagon-p-side')
  const dSide = getInputValue('pentagon-d-side')

  // validate input
  if (isNaN(pSide) || isNaN(dSide)) {
    alert("Please insert a number");
    return;
  }
  const area = 0.5 * pSide * dSide
  const areaToDecimal = area.toFixed(2)
  setElementInnerText('pentagon-area', areaToDecimal)
  addToCalculationEntry ('Pentagon-area', areaToDecimal)
}



// 
// reusable get input field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reuseable set span, p, div, etc text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// add to calculation entry

/*
1. get the element where you want to add the dynamic HTML
2. create an element you want to add
3. if needed add some class
4. set inner Html . it could dbe dynamic Template string
5. append the create element as a child of the element
*/
function addToCalculationEntry(areaType, area) {
  console.log(areaType + " " + area);
  const calculationEntry = document.getElementById("calculation-entry");

  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `${
    count + 1
  } ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
  calculationEntry.appendChild(p);
}

// DATA VALIDATION

/*
 1. set the proper type of the input field. (number, data , email)
 2. check type using typeof
 3. isNaN : Not a Number. isNaN checking whether the input is not a number or not
 4.
 */
