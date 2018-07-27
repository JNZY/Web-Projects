document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.querySelector("#calculateTip").addEventListener("click", function() {
  console.log("clicked"); //debug

  var originalBill = document.getElementById("originalBill").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numberPeople = document.getElementById("numberPeople").value;

  if (numberPeople == "" || numberPeople <= 1) {
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }

  var calculatedTip = (serviceQuality * originalBill) / numberPeople;

  document.getElementById("totalTip").style.display = "block";
  document.querySelector("#tips").innerHTML = calculatedTip;
});
