import { getProduct, loadProductsFetch, products } from "../data/products.js";
import { getOrder } from "../data/orders.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

async function loadOrderPage() {
  console.log('Start loading...');
  await loadProductsFetch();

  console.log('Products loaded');
  renderTrackOrder();
}
loadOrderPage();

function renderTrackOrder() {
  let trackOrderHTML = '';

  const params = new URL(window.location.href).searchParams;
  const productId = params.get('productId');
  const orderId = params.get('orderId');

  const matchingOrder = getOrder(orderId);
  const matchingOrderProduct = matchingOrder.getOrderProduct(productId);
  const matchingProduct = getProduct(productId);

  const deliveryTime = dayjs(matchingOrderProduct.estimatedDeliveryTime);
  const currentTime = dayjs();
  const orderTime = dayjs(matchingOrder.orderTime);

  const currentMinusOrderTime = currentTime.diff(orderTime, 'minute');
  const deliveryMinusOrderTime = deliveryTime.diff(orderTime, 'minute')
  const deliveryPercentage = (currentMinusOrderTime / deliveryMinusOrderTime) * 100;

  trackOrderHTML += `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${deliveryTime.format('dddd, MMMM D')}
    </div>

    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${matchingOrderProduct.quantity}
    </div>

    <img class="product-image" src="${matchingProduct.image}">

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width:${deliveryPercentage}%"></div>
    </div>
  ` 

  document.querySelector('.order-tracking').innerHTML = trackOrderHTML;
}