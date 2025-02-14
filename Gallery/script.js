let images = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let closeBtn = document.querySelector(".view-image span");

for(let images){
    image.addEventListner("click",function(e){
        viewImage.computedStyleMap.display = "flex";
    })
}

    closeBtn.addEventListener('click',function(){
        viewImage.style.display = "none";
    })