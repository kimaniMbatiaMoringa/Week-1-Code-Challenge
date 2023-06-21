/* 
    Speed Detector
*/

const speedNumber=startInput()
inputValidator()

function startInput(){
    const prompt = require('prompt-sync')();
    let numberGrade = parseInt(prompt('What is your grade?'));
    console.log(`So you got ${numberGrade}`);
    return numberGrade
}


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