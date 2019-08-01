function dropMenu(){
  var menuListElement = document.getElementById("menu-items");
  var menuButton = document.getElementById("mobile-menu-icon");

  menuListElement.classList.toggle("responsive");
  menuButton.classList.toggle("close-button");
}

document.getElementById("mobile-menu-icon").addEventListener("click", dropMenu);
