function checkCashRegister(price, cash, cid) {
  let  change = cash - price;
  let currency = [10000, 2000, 500, 100, 25, 10, 5, 1];
  let response = {
    status : "CLOSED",
    change : [change]
  }


  // fix floating points
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  console.log(cid);

    // get total of cid
  let count = cid.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue[1] / 100;
  }, 0);

  console.log(count);
  console.log(change);



  // response if cid is less than change due
  if (count < change) {
    response.status = "INSUFFICIENT_FUNDS";
    response.change = [];
  }

  console.log(response.status);

  // use a recursive function

  //   while (change > 0) {
  //     if (change > 100) {
  //   response.change = ["ONE HUNDRED", (Math.floor(change / 100))];
  //   return change = change - (100 * (Math.floor(change / 100)));
  //   } if (change > 20) {
  //   response.change = ["TWENTY", (Math.floor(change / 20))];
  //   change = change - (20 * (Math.floor(change / 20)));
  // }




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

checkCashRegister(19.5, 200, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
