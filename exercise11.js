/* [Exercise] What's Your Balance?
Question
Find the account with a balance of 12 and assign it to the variable account.

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];
 */

(() => {
  const ACCOUNTS = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];
  const ACCOUNT = ACCOUNTS.find((account) => account.balance === 12);
  console.log(ACCOUNT);
})();
