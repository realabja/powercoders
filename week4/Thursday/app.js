var current_age = "";
var age_of_reteirment = "" ;

// insisting on getting a valid input
// insisting on getting a valid input
// insisting on getting a valid input

while( !Number.isInteger(current_age) && !Number.isInteger(age_of_reteirment) && !(age_of_reteirment.length == 2) ){
  
    current_age = prompt("please enter how old you are ( positive integer)");
    age_of_reteirment = prompt("please enter the age that you want to retire (positive integer)") ;
}


// calculating the stuff
// calculating the stuff
// calculating the stuff

const total_years_left = age_of_reteirment - current_age;
const the_year_of_reteirment = new Date().getFullYear() + total_years_left;


// outputting corresponding text
// outputting corresponding text
// outputting corresponding text

if (total_years_left>0){

    document.write(`you have ${total_years_left} years till retirment in ${the_year_of_reteirment}`)
}

else if( total_years_left = 0){

    document.write(`Congratulations, you are already retired this is the year ${the_year_of_reteirment}`)
}

else{

    document.write(`you have already retiered in ${the_year_of_reteirment}`)
}