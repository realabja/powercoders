const prompt = require('prompt-sync')({sigint: true});


let dict ={
    noun : "", 
    verb : "",
    adverb : "",
    adjective : "",
}

 
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
    dict.key = dict[key] + "asd"
    while (!isWord(dict[key])){
        dict[key] = prompt(`please enter a valid word: `);
    }
    console.log(dict.key)
    console.log(dict[key])
}

console.log(dict);

