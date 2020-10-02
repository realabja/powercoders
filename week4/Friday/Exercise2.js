const prompt = require('prompt-sync')({sigint: true});


const randomPositiveNumber = (high) => {
    return Math.floor(Math.random() * high);
}


const make_fortuneTeller = (()=>{
    this.partnerName = [prompt("add partner names: ")];
    this.geographic  = [prompt("add location: ")];
    this.job = [prompt("add job title: ")];
    let filling = prompt("now you can add more partner name oer location or job please type y for no or n for yes:");
    while (filling == "y"){
        this.partnerName.push(prompt("add partner names: "));
        this.geographic.push(prompt("add location: "));
        this.job.push(prompt("add job title: "));
        filling = prompt("now you can add more partner name oer location or job please type y for no or n for yes:");
    }
    this.tell_the_fortune = ()=>{ 
        let theTime = randomPositiveNumber(80);    
        let theNumberOfChildren = randomPositiveNumber(20);
        console.log(`You will be a ${this.job[randomPositiveNumber(this.job.length)]} in ${theTime} years, and married to ${thsi.partnerName[randomPositiveNumber(this.partnerName.length)]} with ${theNumberOfChildren} kids`);
    }
})();
