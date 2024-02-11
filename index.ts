import inquirer from "inquirer";
//atm program

    const accountNo:number = 1234;
    const pinIs:number= 8567;
    let accountBalance:number = 1509000;

    async function atm(){
        try{
    let result = await inquirer.prompt([
    {
    type:"number",
    name: "accountNumber",
    message: "Enter your account number? "}])

        if(result.accountNumber==accountNo){
        console.log("the account number is", result.accountNumber);

    let pin = await inquirer.prompt([{
    type:"number",
    name:"accountPin",
    message:"Enter your account pin?",
    mask:"*"}])
        if(pin.accountPin==pinIs){
        console.log('the account pin is', pin.accountPin)
        
    let amount = await inquirer.prompt([
    {
    type:"number",
    name:"balance",
    message:"Enter amount to withdraw?"}])

        if(amount.balance<=accountBalance){
            console.log(`you withdraw amount of ${amount.balance}`);
            accountBalance =accountBalance-amount.balance;
            console.log(`now the balance in your account is ${accountBalance}`);
        }
        else{
            console.log("you have insufficient balance in your account");
        }
    }}
    }

catch(error){
console.log(`something went wrong`);
}
finally{
    console.log(`program has ended`);
}
    }

atm();    
