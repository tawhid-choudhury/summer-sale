document.getElementById("mainMP").disabled = false;

function mpclicked() {
  console.log("hello");
}

document.getElementById("mainMP").addEventListener("click", mpclicked);

document.getElementById("secondaryCA").disabled =
  document.getElementById("mainCA").disabled;

document.getElementById("secondaryMP").disabled =
  document.getElementById("mainMP").disabled;

document.getElementById("secondaryTotals").innerHTML =
  document.getElementById("mainTotals").innerHTML;
document.getElementById("secondaryDisplay").innerHTML =
  document.getElementById("mainDisplay").innerHTML;
