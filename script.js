//Ajoute un écouteur d'événement de clic sur l'élément ".header__navbar-toggle".
//Lorsque l'élément est cliqué, la classe "is-open" est ajoutée ou supprimée de l'élément ".header__navbar".

document
  .querySelector(".header__navbar-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".header__navbar").classList.toggle("is-open");
  });
