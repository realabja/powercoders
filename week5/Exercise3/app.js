let box = document.querySelector(".box");
window.addEventListener("scroll", (e) =>{
    let y = document.querySelector(".start").getBoundingClientRect().top;
    console.log(y);
    box.style.transform = `translateX(${-y/document.body.offsetHeight*document.body.offsetWidth}px)`;
})