function checkCashRegister(price, cash, cid) {
  let  change = (cash - price) * 100;
  let currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let changeArray = [];

  let response = {
    status : "",
    change : []
  }

  // fix floating points
  cid.forEach(el => el[1] = Math.round(el[1] * 100));

    // get total of cid
  let count = cid.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue[1];
  }, 0);

console.log(change);

  // response if cid is less than change due
  for (let i = cid.length - 1; i > -1; i--) {
    let changeGiven = 0;
    while (cid[i][1] > 0 && change >= currency[i]) {
      change -= currency[i];
      cid[i][1] -= currency[i];
      changeGiven += currency[i];
      response.status = "OPEN";
    }
    if (changeGiven)
      changeArray.push([cid[i][0], changeGiven]);
  }

  if (change > 0) {
      response.status = "INSUFFICIENT_FUNDS";
  }

  if (change == cid) {
    response.status = "CLOSED";
  }

  changeArray.forEach(el => el[1] = (el[1] / 100));
  response.change = changeArray;

  console.log(response.status);
  console.log(change);

  // Here is your change, ma'am.
   return response;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
