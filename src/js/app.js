import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const discount = 20;
const prices = document.querySelectorAll('.price-card__price');
const priceToggle = document.getElementById('price-toogle')
document.addEventListener('click', hadledAnnually)

function hadledAnnually(event) {
  const target = event.target

  if (target.classList.contains('oval-checkbox__slider')) {
    if (!priceToggle.checked) {
      prices.forEach(element => {
        const price = element.textContent
        let result;
         result = Math.round((+price)*12/100*(100-discount));
        element.textContent = result
      });
    }
    else {
      prices.forEach(element => {
        element.textContent = element.dataset.monthPrice
      });
    }
  }
}

