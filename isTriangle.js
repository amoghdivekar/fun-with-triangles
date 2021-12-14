const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  // console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles (Number(angle1.value), Number(angle2.value), Number(angle3.value));
  if (sumOfAngles === 180) {
    outputBox.innerText = "YAY! Its a triangle"
  } else {
    outputBox.innerText = "Its not an triangle"
  }
}

isTriangleBtn.addEventListener('click', isTriangle);