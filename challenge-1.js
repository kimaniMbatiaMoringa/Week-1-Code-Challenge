/* 
    Student Grade Generator
*/

const numberGrade=startInput()  //runs startInput() and stores the result
inputValidator()                //Starts function that checks for valid input


/* 
    Takes in a user input and converts it to an integer
*/

function startInput(){                                        
    const prompt = require('prompt-sync')();
    let numberGrade = parseInt(prompt('What is your grade?'));  //Converts input from string to int
    console.log(`So you got ${numberGrade}`);
    return numberGrade
}


/* 
    Checks if input is valid i.e below 100. Returns error message if not
*/

function inputValidator(){                             
    if (numberGrade>100){
        console.log("invalid mark, please reenter")
        startInput()
    }
    
    if(numberGrade<=100){
        console.log("valid mark found")
        let letterGrade=studentGrader(numberGrade)
        console.log(letterGrade)
    
    }
    
}

/* 
    Takes in a number input and returns an appropriate grade
*/

function studentGrader(input){
    console.log(input)
        if(input > 79){
            return "A"
        }
        if(input > 60&& input<79){
            return "B"

        }
        if(input > 49&& input<59){
            return "C"
        }
        if(input > 40&& input<49){
            return "D"
        }
        if(input<40){
            return "E"
        }
      }