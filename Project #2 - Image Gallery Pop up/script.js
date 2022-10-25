const fullImage = document.querySelector(".full-img");
const smallImage = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");


smallImage.forEach(function(img){
     img.addEventListener("click", function () {
           modal.classList.add("open");
           fullImage.classList.add("open");

           const OriginalQuality = img.getAttribute("alt");
           fullImage.src = `img/full/${OriginalQuality}.jpg`
     });
});
  
modal.addEventListener("click", function(e){
    if(e.target.classList.contains("modal")){
     modal.classList.remove("open");
     fullImage.classList.remove("open")
    }
})