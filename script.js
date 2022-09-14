let bill;
let numOfPeople;
let activeTip = 0;

$(".btn").click(function () {
  let percent = parseInt($(this).attr("id"));
  activeTip = percent / 100;
  // console.log(activeTip);
  return activeTip;
});

$("#compute").click(function () {
  bill = parseInt($("#bill").val());
  numOfPeople = parseInt($("#people").val());

  calculateTip(bill, activeTip, numOfPeople);
  calculateTotal(bill, activeTip, numOfPeople);
});

$("#reset").click(function () {
  document.querySelector("#bill").value = "0";
  document.querySelector("#people").value = "0";
  $("#tip-amount").text(`$0.00`);
  $("#total-amount").text(`$0.00`);
  activeTip = 0;
});

function calculateTip(money, tip, people) {
  // console.log(money);
  // console.log(tip);
  // console.log(people);
  let tipAmount = (money * tip) / people;
  // limiting the decimal places to 2
  let fixedTip = tipAmount.toFixed(2);
  $("#tip-amount").text(`$${fixedTip}`);
}

function calculateTotal(money, tip, people) {
  let totalAmount = (money * tip + money) / people;
  let fixedTotal = totalAmount.toFixed(2);
  $("#total-amount").text(`$${fixedTotal}`);
}

// while(numOfPeople == 0){
//  $('#error').innerHTML = "Can't be zero";
// }

// function toggle() {
//  $("#invisible").classList.toggle("invisible");
// }
