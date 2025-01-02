import { orders } from "../data/orders.js";
import { getProduct, loadProductsFetch } from "../data/products.js";
import { addToCart } from "../data/cart.js";
import { getOrderUrl } from "../data/orders.js";

async function loadOrderPage() {
  console.log('Start loading...');
  await loadProductsFetch();

  console.log('Products loaded');
  renderPlaceOrder();
}
loadOrderPage();

function renderPlaceOrder() {
  let orderSummaryHTML = '';

  orders.forEach((order) => {
    orderSummaryHTML += `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed</div>
              <div>${order.orderTime}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>${order.getPrice()}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>
        ${renderOrderProducts(order.products, order.id)}
        </div>
      </div>
    `
  })

  function renderOrderProducts(orderProducts, orderId) {
    let orderProductsSummary = '';

    orderProducts.forEach((item) => {
      const productId = item.productId;
      const matchingProduct = getProduct(productId);

      orderProductsSummary += `
      <div class="order-details-grid">
        <div class="product-image-container">
          <img src="${matchingProduct.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${item.estimatedDeliveryTime}
          </div>
          <div class="product-quantity">
            Quantity: ${item.quantity}
          </div>
          <button class="buy-again-button button-primary" data-product-id="${matchingProduct.id}">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions"> 
          <a>
            <button class="track-package-button button-secondary" data-product-id="${matchingProduct.id}" data-order-id="${orderId}">
              Track package
            </button>
          </a>
        </div>
      </div>
    `
    })

    return orderProductsSummary;
  }

  document.querySelector('.orders-grid').innerHTML = orderSummaryHTML;

  document.querySelectorAll('.buy-again-button')
    .forEach((addButton) => {
      addButton.addEventListener('click', () => {
        const productId = addButton.dataset.productId;
        addToCart(productId);
      })
    })

  document.querySelectorAll('.track-package-button')
    .forEach((trackButton) => {
      trackButton.addEventListener('click', () => {
        const productId = trackButton.dataset.productId;
        const orderId = trackButton.dataset.orderId;
        window.location.replace(
          getOrderUrl(productId, orderId)
        )
      })
    })
} 