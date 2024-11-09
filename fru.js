
const prices = {
    apple: { old: 2.00, new: 1.50 },
    banana: { old: 1.00, new: 0.80 },
    grapes: { old: 3.00, new: 2.50 },
    orange: { old: 1.50, new: 1.20 },
    mango: { old: 2.50, new: 2.00 },
    pineapple: { old: 3.50, new: 3.00 },
    watermelon: { old: 4.00, new: 3.50 },
    strawberry: { old: 2.50, new: 2.00 },
    blueberry: { old: 3.00, new: 2.50 },
    cherry: { old: 5.00, new: 4.50 },
    kiwi: { old: 1.50, new: 1.20 },
    papaya: { old: 2.00, new: 1.80 },
    peach: { old: 1.75, new: 1.50 },
    pomegranate: { old: 3.00, new: 2.80 },
    pear: { old: 1.50, new: 1.20 },
    plum: { old: 2.00, new: 1.75 }
};

let cart = [];

function addToCart(fruit) {
    cart.push(fruit);
    updateCartCount();
    alert(`${fruit.charAt(0).toUpperCase() + fruit.slice(1)} added to cart!`);
    console.log(cart);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

function calculateTotal() {
    return cart.reduce((total, fruit) => total + prices[fruit].new, 0).toFixed(2);
}

function viewCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<span class="close-cart" onclick="toggleCart()">X</span><h4>Your Cart</h4>';
    cart.forEach(fruit => {
        const fruitItem = document.createElement('div');
        fruitItem.className = 'cart-item';
        fruitItem.innerText = fruit.charAt(0).toUpperCase() + fruit.slice(1);
        cartDiv.appendChild(fruitItem);
    });

    const total = calculateTotal();
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
    cartDiv.appendChild(totalDiv);

    toggleCart();
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = (cartDiv.style.display === 'none' || cartDiv.style.display === '') ? 'block' : 'none';
}


function checkout() {
alert('Thank you for your purchase! Total: ₹' + calculateTotal());
cart = []; 
updateCartCount(); 
toggleCart();
document.getElementById('checkout-btn').style.display = 'none';
}