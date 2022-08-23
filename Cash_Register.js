// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  let changeDue = (cash - price)*100;
  let totalCash = Math.round(cid.reduce((a, b) => (a + b[1]), 0)*100)/100;
  let rCid = cid.slice().reverse();
  function returnChange (changeDue, rCid){
    let currency = {
      "ONE HUNDRED": 100, 
      "TWENTY":20, 
      "TEN":10, 
      "FIVE":5, 
      "ONE":1, 
      "QUARTER":0.25, 
      "DIME":0.1, 
      "NICKEL":0.05, 
      "PENNY":0.01
    }
    let arr = [
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0],
    ];

    for (let i = 0; i < rCid.length; i++){
      let remainingCash = rCid[i][1]*100;
      let currencyValue = currency[arr[i][0]]*100;
      while(currencyValue <= changeDue && remainingCash > 0){
        arr[i][1] += currencyValue;
        changeDue -= currencyValue;
        remainingCash -= currencyValue;
      }
    }
    return arr;
  }
  
  if (totalCash === changeDue/100){
    return {status: "CLOSED", change: cid};
  } else {
    let arr = returnChange(changeDue, rCid);
    let adjust = arr.map(items => {
      return [items[0], items[1]/100]
    })
    let change = adjust.filter(items => {
      if (items[1] !== 0){
        return items
      }
    })
    let changeSum = Math.round(change.reduce((a,b) => (a + b[1]),0)*100)/100;
    if (changeSum < changeDue/100){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: change}
    }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
