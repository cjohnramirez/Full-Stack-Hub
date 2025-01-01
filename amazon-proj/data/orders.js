import { formatCurrency } from "../scripts/utils/money.js";
import { products } from "./products.js";

const fetchOrders = JSON.parse(localStorage.getItem('orders')) || [];

class Orders {
  id;
  orderTime;
  products;
  totalCostCents;

  constructor(orderDetails) {
    this.id = orderDetails.id;
    this.orderTime = orderDetails.orderTime;
    this.products = orderDetails.products;
    this.totalCostCents = orderDetails.totalCostCents;
  }

  getPrice() {
    return `$${formatCurrency(this.totalCostCents)}`
  }
}

export const orders = fetchOrders.map((orderDetails) => {
  return new Orders(orderDetails);
})

//this adds cart to order
export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrderUrl(productId, orderId) {
  const url = new URL(window.location.href);

  const newURL = `${url.origin}/tracking.html?productId=${productId}&orderId=${orderId}`;

  return newURL;
}