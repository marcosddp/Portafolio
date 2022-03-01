
window.onload = init;

function init() {
  const closeIcon = document.getElementById("close-icon");
  const menuIcon = document.getElementById("menu-icon");
  const navDropdown =document.querySelector(".nav-dropdown");
  const fog = document.querySelector(".fog");

  function activeMenu(active) {
    navDropdown.classList.toggle('hide');
    fog.classList.toggle('hide');
    if (active) {
      closeIcon.style.display = "block";
      
      menuIcon.style.display = "none";
      
    } else {
      closeIcon.style.display = "none";
      
      menuIcon.style.display = "block";
     
    }
  }

  


  menuIcon.addEventListener("click", (event) => {
    activeMenu(true);
  
    

    
  });

  


  closeIcon.addEventListener("click", (event) => {
    activeMenu(false);
   
  });

  fog.addEventListener("click", (event) => {
    activeMenu(false);
  
  });
}
