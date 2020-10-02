// tip calculator
// tip calculator
// tip calculator
// tip calculator

let bill = "";
let tip_percentage = "";


bill = prompt("please enter the amount of the bill");

while(!(Number(bill) > 0 )){
    bill = prompt("please enter a positive number for the bill");
}

tip_percentage = prompt("please enter the tip percentage")
while(!(Number(tip_percentage) >= 0 )){
    bill = prompt("please enter a positive number for the percentage");
}

const tip = bill * (tip_percentage/100);


console.log(`the amount of bill is ${bill} (what ever currency that you are using) and tip is ${tip} (what ever currency that you are using)`)

