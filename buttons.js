document.getElementById("mainMP").disabled = true;
let total = 0.0;
let discount = 0.0;
let gtotal = 0.0;
updateSecondary();
updateDisplay();
updateSecondaryBtnCA();
updateSecondaryBtnMP();
// MAIN FUNCTIONS START
function unlockCA() {
  if (total >= 200) {
    document.getElementById("mainCA").disabled = false;
    updateSecondaryBtnCA();
  } else {
    document.getElementById("mainCA").disabled = true;
    updateSecondaryBtnCA();
  }
}
function unlockMP() {
  if (total !== 0.0) {
    document.getElementById("mainMP").disabled = false;
    updateSecondaryBtnMP();
  } else {
    document.getElementById("mainMP").disabled = true;
    updateSecondaryBtnMP();
  }
}
//   calling unlockCA
document.getElementById("mainCInput").addEventListener("keyup", unlockCA);
document.getElementById("secondaryCInput").addEventListener("keyup", unlockCA);

// change mainCInput update secondaryCInput
function ChangeFunction1(mainCInput) {
  let secondaryCInput = document.getElementById("secondaryCInput");
  secondaryCInput.value = mainCInput.value;
}
// change secondaryCInput update mainCInput
function ChangeFunction2(secondaryCInput) {
  let mainCInput = document.getElementById("mainCInput");
  mainCInput.value = secondaryCInput.value;
}

// Purchase button clicked
document.getElementById("mainMP").addEventListener("click", function (event) {
  console.log(event);
});

// Apply coupon button clicked
document.getElementById("mainCA").addEventListener("click", function () {
  const code = document.getElementById("mainCInput").value;
  if (code === "SELL200") {
    discount = (total * 20) / 100;
    updateGT();
    document.getElementById(
      "mainTotals"
    ).childNodes[3].childNodes[1].innerHTML = " " + discount.toFixed(2) + "TK";
    updateSecondary();
    updateDisplay();
    document.getElementById("mainCInput").value = "";
    document.getElementById("secondaryCInput").value = "";
  } else {
    window.alert("INCORRECT CODE");
  }
});

function updateSecondaryBtnCA() {
  document.getElementById("secondaryCA").disabled =
    document.getElementById("mainCA").disabled;
}
function updateSecondaryBtnMP() {
  document.getElementById("secondaryMP").disabled =
    document.getElementById("mainMP").disabled;
}
// totals
function updateSecondary() {
  document.getElementById("secondaryTotals").innerHTML =
    document.getElementById("mainTotals").innerHTML;
}
//   displays
function updateDisplay() {
  document.getElementById("secondaryDisplay").innerHTML =
    document.getElementById("mainDisplay").innerHTML;
}
