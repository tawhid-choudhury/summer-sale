document.getElementById("mainMP").disabled = true;
let total = 0.0;
let discount = 0.0;
let gtotal = 0.0;

// MAIN FUNCTIONS START
function unlockCA() {
  const code = document.getElementById("mainCInput").value;
  if (code === "SELL200") {
    document.getElementById("mainCA").disabled = false;
    document.getElementById("secondaryCA").disabled =
      document.getElementById("mainCA").disabled;
  } else {
    document.getElementById("mainCA").disabled = true;
    document.getElementById("secondaryCA").disabled =
      document.getElementById("mainCA").disabled;
  }
}
function unlockMP() {
  if (total !== 0.0) {
    document.getElementById("mainMP").disabled = false;
    document.getElementById("secondaryMP").disabled =
      document.getElementById("mainMP").disabled;
  } else {
    document.getElementById("mainMP").disabled = true;
    document.getElementById("secondaryMP").disabled =
      document.getElementById("mainMP").disabled;
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
  discount = (total * 20) / 100;
  updateGT();
  document.getElementById("mainTotals").childNodes[3].childNodes[1].innerHTML =
    " " + discount.toFixed(2) + "TK";
  updateSecondary();
});
// MAIN FUNCTIONS END
//
//
//
document.getElementById("secondaryCA").disabled =
  document.getElementById("mainCA").disabled;

document.getElementById("secondaryMP").disabled =
  document.getElementById("mainMP").disabled;

// totals
function updateSecondary() {
  document.getElementById("secondaryTotals").innerHTML =
    document.getElementById("mainTotals").innerHTML;
}
//   displays
document.getElementById("secondaryDisplay").innerHTML =
  document.getElementById("mainDisplay").innerHTML;
