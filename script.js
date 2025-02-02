const button = document.querySelectorAll('.box')
const body= document.querySelector("body")


button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === "box1"){
            body.style.backgroundColor="#85A98F";
        }
        if(color.target.id === "box2"){
            body.style.backgroundColor= "#FCF596";
        }
        if(color.target.id === "box3"){
            body.style.backgroundColor="#48A6A7";
        }
        if(color.target.id === "box4"){
            body.style.backgroundColor="#FFBF61";
        }
        if(color.target.id === "box5"){
            body.style.backgroundColor="#F0C1E1";
        }
    })
})
