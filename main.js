
var link = document.getElementById("links")

function Menu(){
    if(link.style.display == 'flex'){
  
      link.style.display = 'none'
    }
    else{
         link.style.display = 'flex'
        link.style.flexDirection ='column'
    }
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});