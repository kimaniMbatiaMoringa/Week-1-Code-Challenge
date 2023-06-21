let grossUserSalary=startInput()
console.log(payeeTax(grossUserSalary))


/* 
    Takes in a user input and converts it to an integer
*/
function startInput(){
    const prompt = require('prompt-sync')();
    let salary = parseInt(prompt('Enter salary' ));
    return salary
}



function nhifDeduction(salaryInput){
    
}

function payeeTax(input){
     if (input<=24000){
        let taxRate=0.1
        return input*taxRate
        //return input-(input*taxRate)
    }
    
    if(input>=24001 && input<32333){
        let taxRate=0.25
        return input*taxRate
    }
    
    if(input>=32334){
        let taxRate=0.3
        return input*taxRate
    } 

}

//netSalary()


//Net salary calculator
// 
// 1. Deduct NSSF rate (Gross Salary)
// 2. Deduct NHIF contribution by salary (Gross Salary)
// 3. salaryAfterDeductions(Taxable pay)
// 4. 