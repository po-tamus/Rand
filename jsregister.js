function checkCashRegister(price, cash, cid) {
    let changeLeft = cash - price;
    let change = [];
    let reserves = 0;
    const values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], 
    ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

    for (let val in cid) {
        reserves += (cid[val][1]);
    }

    reserves = Math.round((reserves + Number.EPSILON) * 100) / 100

    if (reserves == changeLeft) {
        return {status: "CLOSED", change: cid};
    } else if (reserves < changeLeft) {
        return {status: "INSUFFICIENT_FUNDS", change};
    }

    for (let i = values.length - 1; i >= 0; i--) {

        if (changeLeft/values[i][1] >= 1) {

            change.push([values[i][0], 0])

            while (cid[i][1] >= values[i][1] && changeLeft > 0 && changeLeft/values[i][1] >= 1) {
                
                change[change.length - 1][1] += values[i][1];
                cid[i][1] -= values[i][1];
                changeLeft -= values[i][1];
                changeLeft = Math.round((changeLeft + Number.EPSILON) * 100) / 100;
                
            }
        }
    }

    if (changeLeft != 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return {status: "OPEN", change};
}
  

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));