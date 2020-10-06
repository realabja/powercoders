var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
   ];
for(let i in books){
    
    let p = document.createElement("P");
    for (let j in books[i]){
        console.log(j)
        string = `book ${j} is ${books[i][j]}, `;
        if (typeof books[i][j] === "boolean"){
            break;
        }
        p.innerHTML = p.innerHTML + string;
    }
    document.body.appendChild(p)
}