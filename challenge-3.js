/* 
    Net Salary Calculator
*/


let grossUserSalary=startInput()                                           //Gets a gross salary and stores it
let salaryAfterDeductions =salaryAfterDeductionsCalc(grossUserSalary)     //Gets a gross salary and calls "salaryAfterdeductions()" to deduct NSSF and NHIF contributions
let salaryAfterTax =salaryAfterTaxCalc(salaryAfterDeductions)
console.log("Your Net Salary is " + salaryAfterTax) 

/* 
    Takes in a user salary input and returns a gross salary after deductions
*/

function salaryAfterDeductionsCalc(input){
    let nhifDeduction =nhifDeductionCalc(input);
    let nssfDeduction = nssfDeductionCalc(input);
    let salaryBeforeTax = input - (nhifDeduction + nssfDeduction)
    console.log("NHIF Deduction is " + nhifDeduction )
    console.log("NSSF Deduction is " + nssfDeduction )
    return salaryBeforeTax
}

/* 
    Takes in a user input and converts it to an integer
*/
function startInput(){
    const prompt = require('prompt-sync')();
    let salary = parseInt(prompt('Enter salary' ));
    return salary
}

/* 
    Calculates from a salary input what NHIF deduction applies
*/

function nhifDeductionCalc(input){
    if (input<=5999){
        return deduction = 150
        //return input-(input*taxRate)
    }
    if (input>=6000&&input<8000){
        return deduction = 300
        //return input-(input*taxRate)
    }
    if (input>=8000&&input<12000){
        return deduction = 400
        //return input-(input*taxRate)
    }
    if (input>=12000&&input<15000){
        return deduction = 500
        //return input-(input*taxRate)
    }
    if (input>=15000&&input<20000){
        return deduction = 600
        //return input-(input*taxRate)
    }
    if (input>=20000&&input<25000){
        return deduction = 750
        //return input-(input*taxRate)
    }
    if (input>=25000&&input<30000){
        return deduction = 850
        //return input-(input*taxRate)
    }
    if (input>=30000&&input<35000){
        return deduction = 900
        //return input-(input*taxRate)
    }
    if (input>=35000&&input<40000){
        return deduction = 950
        //return input-(input*taxRate)
    }
    if (input>=40000&&input<45000){
        return deduction = 1000
        //return input-(input*taxRate)
    }
    if (input>=45000&&input<50000){
        return deduction = 1100
        //return input-(input*taxRate)
    }
    if (input>=50000&&input<60000){
        return deduction = 1200
        //return input-(input*taxRate)
    }
    if (input>=60000&&input<70000){
        return deduction = 1300
        //return input-(input*taxRate)
    }
    if (input>=70000&&input<80000){
        return deduction = 1400
        //return input-(input*taxRate)
    }
    if (input>=80000&&input<90000){
        return deduction = 1500
        //return input-(input*taxRate)
    }
    if (input>=90000&&input<100000){
        return deduction = 1600
        //return input-(input*taxRate)
    }
    if (input>=100000){
        return deduction = 1700
        //return input-(input*taxRate)
    }



}

function nssfDeductionCalc(input){
    if(input>=18000){
        deduction = input *0.16
        if (deduction > 2160){
            return 2160
        }
        return deduction
    }

}

function salaryAfterTaxCalc(input){
    let taxCut;
     if (input<=24000){
        let taxRate=0.1
        taxCut= input*taxRate
        //return input-(input*taxRate)
    }
    
    if(input>=24001 && input<32333){
        let taxRate=0.25
        taxCut= input*taxRate
    }
    
    if(input>=32334){
        let taxRate=0.3
        taxCut= input*taxRate
    }
    console.log("Tax deduction is " + taxCut) 
    return input-taxCut
}

//netSalary()


//Net salary calculator process
// 
// 1. Deduct NHIF contribution by salary (Gross Salary)
// 2. Deduct NSSF rate (Gross Salary)
// 3. salaryAfterDeductions(Taxable pay)
// 4. 