import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from '../data/cart.js';
// import '../data/backend-practice.js';
// import '../data/cart-class.js';

//New Promise layout, using Promise.all()
Promise.all([
  // the Promise class in JS resolves the issue of deep nesting in traditional callbacks
  new Promise((resolve) => {
    loadProducts(() => {
      //Optional: you can pass a parameter in this function and the parameter is automatically passed to "then" method
      resolve(); 
    });
  }), 
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

//Old Promise layout
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve(); 
  });
}).then((value) => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/