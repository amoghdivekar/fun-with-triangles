const areaSides = document.querySelector(".side-input");
const areaBtn = document.querySelector("#area-btn");
const areaOutput = document.querySelector("#output");

function calculateAreaOfTriangle() {
    if(areaSides.value === "") {
        areaOutput.innerText = "Please enter both the fields";
    } else if(Number(areaSides.value <= 0)) {
        areaOutput.innerText = "Both values should be greater than zero";
    } else {
        calculateArea(Number(areaSides.value), Number(areaSides.value));
    }
}

function calculateArea(base, height) {
    const areaOfTriangle = (base * height) / 2;
    // return areaOfTriangle;
    areaOutput.innerText = "The area of tiangle is " + areaOfTriangle;
}

// function calculateAreaOfTriangle() {
//     const areaOfTriangle = areaOfTriangle(Number(areaSides[0].value), Number(areaSides[1].value));
//     areaOutput.innerText = "The area of tiangle is " + areaOfTriangle;
// }

// console.log(calculateArea);

// function clickHandler() {
//     console.log(calculateArea);
// }

areaBtn.addEventListener("click", calculateAreaOfTriangle);