import Bank from "../src/bank";

// setup
const bank = new Bank();

// scenario 1: successful account creation
try {
  const account = bank.createAccount("John Doe", 29, "2938298");
  if (account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
  }
} catch (e) {
  console.log("Scenario 1 failed");
}

// scenario 2: failed account creation
try {
  bank.createAccount("John Doe", 29, "2938298");
  console.log("Scenario 2 failed");
} catch (e) {
  console.log("Scenario 2 passed");
}

// scenario 3: successful deposit when account exists
try {
  bank.deposit("2938298", 100);
  console.log("Scenario 3 passed");
} catch (e) {
  console.log("Scenario 3 failed");
}

// scenario 4: failed deposit when account does not exist
try {
  bank.deposit("9999999", 100);
  console.log("Scenario 4 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account not found") {
    console.log("Scenario 4 passed");
  } else {
    console.log("Scenario 4 failed");
  }
}

// scenario 5: successful withdrawal when account exists and balance is sufficient
try {
  bank.withdraw("2938298", 50);
  console.log("Scenario 5 passed");
} catch (e) {
  console.log("Scenario 5 failed");
}

// scenario 6: failed withdrawal when account exists but balance is insufficient
try {
  bank.withdraw("2938298", 100);
  console.log("Scenario 6 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Insufficient balance") {
    console.log("Scenario 6 passed");
  } else {
    console.log("Scenario 6 failed");
  }
}

// scenario 7: failed withdrawal when account does not exist
try {
  bank.withdraw("9999999", 50);
  console.log("Scenario 7 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account not found") {
    console.log("Scenario 7 passed");
  } else {
    console.log("Scenario 7 failed");
  }
}

// scenario 8: successful balance check when account exists
try {
  const balance = bank.getBalance("2938298");
  console.log(balance === 50 ? "Scenario 8 passed" : "Scenario 8 failed");
} catch (e) {
  console.log("Scenario 8 failed");
}

// scenario 9: failed balance check when account does not exist
try {
  bank.getBalance("9999999");
  console.log("Scenario 9 failed");
} catch (e) {
  if (e instanceof Error && e.message === "Account not found") {
    console.log("Scenario 9 passed");
  } else {
    console.log("Scenario 9 failed");
  }
}
