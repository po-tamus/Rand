/*simple bank simulator in js*/
const Account = {
    name: "",
    balance: 0
};

function useAccount() {
    const holder = prompt("Enter an account name: ");
    Account.name = holder
    let response = "";
    while (response != q) {
        console.log("\nInput d to deposit an amount\nInput w to withdraw an amount\nEnter v to view your balance\n")
        response = prompt("What would you like to do: ")
        if (response == "d") {
            deposit = parseInt(prompt("Enter a deposit amount: "));
            Account.balance += deposit;
        } else if (response == "w") {
            withdrawal = parseInt(prompt("Enter a withdrawal amount: "));
            if (Account.balance >= withdrawal) {
                Account.balance -+ withdrawal;
            } else {
                console.log("Insufficient funds");
            }
        } else if (response == "v") {
            console.log("");
        } else {
            console.log("Invalid input");
        };
        console.log("Total balance: " + Account.balance.toString())
    }
};

useAccount();