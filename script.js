// script.js

import { fetchAllProducts, fetchProductsByCategory, productsData } from './data.js';
import { submitToCart, displayCart } from './cart.js';

// DOM Elements
const displayDiv = document.getElementById('display');
const navbarButtons = document.querySelectorAll('.nav-link');
const cartButton = document.getElementById('cart-button');

// Event listeners for navbar buttons
navbarButtons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    const category = event.target.textContent;
    await fetchProductsByCategory(category);
    displayProducts();
  });
});

// Event listener for cart button
cartButton.addEventListener('click', () => {
  displayCart();
});

// Function to display products
function displayProducts() {
  displayDiv.innerHTML = ''; // Clear the display

  productsData.forEach((product) => {
    const productCard = createProductCard(product);
    displayDiv.appendChild(productCard);
  });
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.textContent = product.title;

  const price = document.createElement('p');
  price.textContent = `$${product.price.toFixed(2)}`;

  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.classList.add('btn', 'btn-primary');
  addToCartButton.addEventListener('click', () => {
    submitToCart(product);
  });

  cardBody.appendChild(title);
  cardBody.appendChild(price);
  cardBody.appendChild(addToCartButton);

  card.appendChild(cardBody);

  return card;
}

// Initialize the app
function init() {
  fetchAllProducts();
}

// Call the init function when the page loads
window.onload = init;
