import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1: successful account creation
const account = bank.createAccount("John Doe", 29, "2938298");
if (account.accountNumber === "2938298") {
  console.log("Scenario 1 passed");
} else {
  console.log("Scenario 1 failed");
}

//scenario 2: failed account creation
try {
  bank.createAccount("John Doe", 29, "2938298");
  console.log("Scenario 2 failed");
} catch (_) {
  console.log("Scenario 2 passed");
}
