const navTrigger = document.querySelector(".nav-trigger");
const nav = document.querySelector(".stretchy-nav");

navTrigger.addEventListener("click",function(){
    nav.classList.toggle("nav-is-visible");
})
const ahref = document.querySelector(".links").children;

for(let i=0; i<ahref.length; i++){
    const a=ahref[i].querySelector("a");
    a.addEventListener("click", function(){
        // remove active class from all lists
        for(let j=0; j<ahref.length; j++){
            ahref[j].querySelector('a').classList.remove("active")
        }
        //add classes active to clicked list
        this.classList.add("active");
    })
}

// hide stretchy new when clicked anywhere outside of navTrigger
window.onclick=function(event){
    if(event.target!=navTrigger && event.target!=navTrigger.querySelector("span")){
        nav.classList.remove("nav-is-visible");
    }
    
}
