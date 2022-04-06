function reveal() {
    var reveals = document.querySelectorAll(".animato");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      
      var elementVisible = 0;
      console.log("win height",windowHeight);
      console.log("element top",elementTop);

      if (elementTop < 900) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
      var cliparts=document.querySelectorAll(".clip-art");
      for (var i = 0; i <cliparts.length; i++) {
        var elementTop = cliparts[i].getBoundingClientRect().top;
        if (elementTop < 900) {
            cliparts[i].classList.add("animateclipart");
          } else {
            cliparts[i].classList.remove("animateclipart");
          }

    }
  }

  window.addEventListener("scroll", reveal);



  const img1=document.getElementById("image1");
  const img2=document.getElementById("image2");
  const img3=document.getElementById("image3");
  const img4=document.getElementById("image4");
  const img5=document.getElementById("image5");
  const text =document.getElementById("product-desc");
  
  console.log(text);

  img1.addEventListener("click",()=>{
      text.innerHTML=arr[0];
  });
  img2.addEventListener("click",()=>{
    text.innerHTML=arr[1];
});
img3.addEventListener("click",()=>{
    text.innerHTML=arr[2];
});
img4.addEventListener("click",()=>{
    text.innerHTML=arr[3];
});
img5.addEventListener("click",()=>{
    text.innerHTML=arr[4];
});