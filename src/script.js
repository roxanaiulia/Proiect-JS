function setHamburgerMenu() {
    const icon = document.getElementById("hamburgerIcon");
    const x = document.getElementById("hamburgerMenu");
    
    icon.addEventListener("click", () => {
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    });
  }
  
  function setBackToTopButton() {
    const button = document.getElementById("backToTop");
  
    document.addEventListener("scroll", () => {
      if(document.documentElement.scrollTop == 0)
        button.style.display = "none";
      else
        button.style.display = "block";
    })
  
    button.addEventListener("click", () => {
      // document.documentElement.scrollTop = 0;
      window.scrollTo({top: 0, behavior: 'smooth'});
    })
  }
  
  window.onload = function() {
    setHamburgerMenu();
    setBackToTopButton();
  };


  const form = document.getElementById("the-form");

form.addEventListener ("submit", (event) => {

    event.preventDefault();

    console.log(event.currentTarget);
});