(function(){
    const sliders = [...document.querySelectorAll(".resources_body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;
    buttonNext.addEventListener("click", ()=>{
        changePosition(1)

    });
    buttonBefore.addEventListener("click", ()=>{
        changePosition(-1)
    });
    
    const changePosition = (add)=>{
        const currentResources = document.querySelector(".resources_body--show").dataset.id;
        value = Number( currentResources);
        value+= add;

        sliders[Number(currentResources)-1].classList.remove("resources_body--show")
        if(value=== sliders.length+1 || value===0){
            value= value === 0 ? sliders.length : 1;
            

        }
        sliders[value-1].classList.add("resources_body--show");
    }
})();