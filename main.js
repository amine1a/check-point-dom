// Sélectionner tous les boutons "-" et "+" de quantité
const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");

minusBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const quantity = btn.nextElementSibling;
    if (quantity.innerText > 1) {
      quantity.innerText = parseInt(quantity.innerText) - 1;
    }
  });
});

plusBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const quantity = btn.previousElementSibling;
    quantity.innerText = parseInt(quantity.innerText) + 1;
  });
});

const removeBtns = document.querySelectorAll(".remove-btn");

removeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
    updateTotal();
  });
});


const likeBtns = document.querySelectorAll(".like-btn");

