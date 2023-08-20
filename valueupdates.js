let c = 1;
function divClicked(e) {
  const name = e.childNodes[3].childNodes[3].innerText;
  price = parseFloat(e.childNodes[3].childNodes[5].innerText.split(" ")[0]);
  total = total + price;
  gtotal = total - discount;
  console.log(total);
  document.getElementById("mainTotals").childNodes[1].childNodes[1].innerHTML =
    " " + total.toFixed(2) + "TK";
  updateGT();
  unlockMP();
  updateSecondary();
  console.log(document.getElementById("mainDisplay").innerHTML);
  document.getElementById(
    "mainDisplay"
  ).innerHTML += `<h3 class="font-semibold">${c}. ${name}</h3>`;
  c++;
  updateDisplay();
}

function updateGT() {
  gtotal = total - discount;
  document.getElementById("mainTotals").childNodes[5].childNodes[1].innerHTML =
    " " + gtotal.toFixed(2) + "TK";
  updateSecondary();
  updateDisplay();
}
