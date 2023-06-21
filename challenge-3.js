getUserSalary=startInput()


/* 
    Takes in a user input and converts it to an integer
*/
function startInput(){
    const prompt = require('prompt-sync')();
    let salary = parseInt(prompt('Enter salary' ));
    return salary
}