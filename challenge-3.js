/************************** 
    Net Salary Calculator

    Net salary calculator process:
    // 0. Take in Gross salary
    // 1. Deduct NHIF contribution 
    // 2. Deduct NSSF contribution
    // 3. Deduct Tax amount
    // 4. Return Net Salary

***************************/


let grossUserSalary=startInput()                                          //Gets a gross salary from an input and stores it

let salaryAfterDeductions =salaryAfterDeductionsCalc(grossUserSalary)     //Store a gross salary after dedductions by calling "salaryAfterdeductions()"
let salaryAfterTax =salaryAfterTaxCalc(salaryAfterDeductions)             //Stores a net salary by calling salaryAfterTaxCalc()
console.log("Your Net Salary is " + salaryAfterTax)                       //Prints out a user's net salary   


/* 
    Takes in a user input and converts it to an integer
*/
function startInput(){
    const prompt = require('prompt-sync')();
    let salary = parseInt(prompt('Enter salary' ));
    return salary
}


/* 
    Takes in a input and returns a gross salary after deductions
*/

function salaryAfterDeductionsCalc(input){
    let nhifDeduction =nhifDeductionCalc(input);
    console.log("NHIF Deduction is " + nhifDeduction )
    let nssfDeduction = nssfDeductionCalc(input);
    console.log("NSSF Deduction is " + nssfDeduction )
    let salaryBeforeTax = input - (nhifDeduction + nssfDeduction)
    return salaryBeforeTax
}


/* 
    NHIF Calculator which determines what NHIF deduction applies
    and returns the deducted amount
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


/* 
    NSSF Calculator which determines what NHIF deduction applies
    and returns the deducted amount
*/

function nssfDeductionCalc(input){
    if(input>=18000){
        deduction = input *0.08;
        if (deduction > 2160){
            return 2160
        }
        else if(deduction < 2160){
            return deduction
        }
    }

    else if(input<6001){
        deduction = input * 0.08;
        if(deduction > 720){
            return 720
        }
        else if(deduction <720){
            return deduction
        }
    }  
   

}

/* 
    Paye Calculator which determines which tax bracket an input falls into
    and decducts the taxable pay. Returns  salary after tax
*/

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
