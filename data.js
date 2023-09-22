// data.js

// Global variables for connecting to API and storing data
const apiUrl = 'https://fakestoreapi.com/products';
let productsData = [];

// Function to fetch data from the API
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to fetch all products
async function fetchAllProducts() {
  productsData = await fetchData('');
}

// Function to fetch products by category
async function fetchProductsByCategory(category) {
  productsData = await fetchData(`category/${category}`);
}

// Export the functions and data
export { fetchAllProducts, fetchProductsByCategory, productsData };
