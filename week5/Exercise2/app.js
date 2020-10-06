document.querySelector("body").style.fontFamily = "Arial, sans-serif";
document.querySelector("#nickname").innerHTML = "Abbas";
document.querySelector("#favorites").innerHTML = "Kebab";
document.querySelector("#hometown").innerHTML = "somewhere";
let x = document.querySelectorAll("li");
console.log(x.length);
for (let i = 0; i < x.length; i++){
    console.log(i);
    x[i].classList.add("list-item");
}
let me = document.createElement("IMG");
document.body.appendChild(me);
me.setAttribute("src", "pic.jpeg")
me.style.borderRadius = "2000px";