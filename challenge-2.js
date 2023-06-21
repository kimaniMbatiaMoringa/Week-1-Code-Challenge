/* 
    Speed Detector Challenge
*/

const getUserSpeedNumber = startInput()                     //saves a inputed speed as a variablue
let getUserPointNumber=pointsCalculator(getUserSpeedNumber) //runs the inputed speed through the pointsCalculator() and saves the returned value                
getLicenseStatus(getUserPointNumber)                        //runs the userpoints through getLicenseStatus() which prints their points and prints if they have been suspended



/* 
    Takes in a user input and converts it to an integer
*/
function startInput(){
    const prompt = require('prompt-sync')();
    let speed = parseInt(prompt('Enter speed' ));
    return speed
}

/* 
    Takes in a speed input and returns an appropriate amount of points
*/

function pointsCalculator(input){
    if(input < 71){
        return 0
    } 
        if(input > 0){
            return Math.floor(input/5-14)
      }
    }

/* 
    Prints out the number of points a user has (if any) and tells them if they are suspended or not
*/    

function getLicenseStatus(input){

    if (input<=0){                                  //Checks if the inputed points are 0
        console.log("Points:","OK") 
    }

    if(input>=12){                                   //Checks if the inputed points are greater than 12
        console.log("Points:", input)                        
        console.log("License suspended")
    }

    else if (input>0&& input<12){
        console.log("Points:", getUserPointNumber)  //Checks if the inputed points are between 0 and 12
    }
}    

