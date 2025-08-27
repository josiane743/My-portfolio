const productGrid = document.getElementById('product-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const cartIcon = document.querySelector('.cart-icon');
const quickViewButtons = document.getElementsByClassName('quick-view');

const products = [
  { img: 'images/product5.jpg', title: 'Stylish Jumpsuit', price: 'R 950.00' },
  { img: 'images/product6.jpg', title: 'Silver Drop Earrings', price: 'R 250.00' },
  { img: 'images/product7.jpg', title: 'Classic Handbag', price: 'R 1,200.00' },
  { img: 'images/product8.jpg', title: 'Casual Sneakers', price: 'R 1,050.00' },
  { img: 'images/product9.jpg', title: 'Gold Bracelet', price: 'R 750.00' },
  { img: 'images/product10.jpg', title: 'Elegant Dress', price: 'R 1,500.00' }
];

let loadedIndex = 2;
let cart = [];

// Quick View function
function quickView(product) {
  alert(`Quick View:\n${product.title}\nPrice: ${product.price}`);
}

// Add product dynamically
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}" class="product-image">
    <h3 class="product-title">${product.title}</h3>
    <p class="product-price">${product.price}</p>
    <button class="add-to-cart-button quick-view">Quick View</button>
  `;
  card.querySelector('.quick-view').addEventListener('click', () => quickView(product));
  return card;
}

// Load more products
loadMoreBtn.addEventListener('click', () => {
  const nextProducts = products.slice(loadedIndex, loadedIndex + 2);
  nextProducts.forEach(product => productGrid.appendChild(createProductCard(product)));
  loadedIndex += 2;
  if (loadedIndex >= products.length) {
    loadMoreBtn.textContent = 'No More Products';
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.background = '#777';
  }
});

// Cart icon click
cartIcon.addEventListener('click', () => {
  alert(cart.length ? `Cart: ${cart.map(item => item.title).join(', ')}` : 'Your cart is empty!');
});

// Assign Quick View to initial products
Array.from(quickViewButtons).forEach((button, index) => {
  button.addEventListener('click', () => quickView(products[index]));
});
