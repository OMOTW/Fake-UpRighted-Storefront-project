// cart.js

// Global variable to store the shopping cart
let cart = [];

// Function to add an item to the cart
function submitToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // Item already in cart, update quantity
    existingItem.quantity += 1;
  } else {
    // Item not in cart, add it
    cart.push({ ...item, quantity: 1 });
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartModal = document.getElementById('cart-modal');
  const cartBody = cartModal.querySelector('.modal-body');
  const cartTotal = cartModal.querySelector('.cart-total');

  // Clear the current cart display
  cartBody.innerHTML = '';

  // Loop through cart items and display them
  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const itemName = document.createElement('p');
    itemName.textContent = `${item.title} x${item.quantity}`;

    cartItem.appendChild(itemName);
    cartBody.appendChild(cartItem);
  });

  // Calculate and display the cart total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;

  // Implement logic to display the cart modal
  // You'll need to toggle the modal's visibility
}

// Export the functions and data
export { cart, submitToCart, updateCartDisplay };
