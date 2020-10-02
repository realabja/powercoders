const prompt = require('prompt-sync')({sigint: true});


let dict ={
    noun : "", 
    verb : "",
    adverb : "",
    adjective : "",
}

let template = `long, long time ago near a beatiful ${dict.noun} near some banana tree said: \"I will ${dict.verb} every tree that was not ${dict.adjective} enough while reading book ${dict.adverb}.\"`
 

let wordPattern = /^[a-z]{1,16}/gi;
const isWord = (string) =>{

    let result = string.match(wordPattern);

    if (result) {
        return result[0];
    } 
    else {
        return false; 

    }
}


for (key in dict){

    dict[key] = prompt(`please enter one ${key}: `);
    while (!isWord(dict[key])){
        dict[key] = prompt(`please enter a valid word: `);
    }
    console.log(dict[key])
}
let template = `long, long time ago near a beatiful ${dict.noun} near some banana tree said: \"I will ${dict.verb} every tree that was not ${dict.adjective} enough while reading book ${dict.adverb}.\"`

console.log(template);
