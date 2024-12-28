import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import {deliveryOptions} from '../data/deliveryOptions.js';
//named export
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
//default export

let cartSummaryHTML = '';

hello();

const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'));

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId){
      matchingProduct = product;
    }
  });

  const deliveryOptionId = cartItem.deliveryOptionId;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOptions = option;
    }
  });

  const today = dayjs();
  const deliveryDate = today.add(
    deliveryOptions.deliveryDays,
    'days'
  );
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  cartSummaryHTML += `
    <div class="cart-item-container cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString};
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div>
  `
});

function deliveryOptionsHTML(matchingProduct, cartItem) {
  let html = '';

  deliveryOptions.forEach((deliveryOptions) => {
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOptions.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    const isChecked = deliveryOptions.id === cartItem.deliveryOptionId;

    const priceCents = deliveryOptions.priceCents === 0 
      ? 'FREE' 
      : `$${formatCurrency(deliveryOptions.priceCents)} -`;
    
    html += `<div class="delivery-option">
      <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          $4.99 - Shipping
        </div>
      </div>
    </div>`
  });

  return html;
}

document.querySelector('.order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.delete-quantity-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.cart-item-container-${productId}`
      );
      container.remove();
    });
  })