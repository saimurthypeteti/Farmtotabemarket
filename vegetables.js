const prices = {
    carrot: { old: 40.00, new: 30.00 },
    potato: { old: 20.00, new: 15.00 },
    broccoli: { old: 60.00, new: 50.00 },
    cauliflower: { old: 50.00, new: 40.00 },
    spinach: { old: 30.00, new: 25.00 },
    beetroot: { old: 25.00, new: 20.00 },
    lettuce: { old: 15.00, new: 10.00 },
    pumpkin: { old: 45.00, new: 35.00 },
    radish: { old: 20.00, new: 15.00 },
    bellPepper: { old: 40.00, new: 30.00 },
    eggplant: { old: 35.00, new: 30.00 },
    zucchini: { old: 50.00, new: 40.00 }
};

let cart = [];

function addToCart(vegetable) {
    cart.push(vegetable);
    updateCartCount();
    document.getElementById('checkout-btn').style.display = 'block';
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function calculateTotal() {
    return cart.reduce((total, vegetable) => total + prices[vegetable].new, 0).toFixed(2);
}

function viewCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<span class="close-cart" onclick="toggleCart()">X</span><h4>Your Cart</h4>';
    
    if (cart.length === 0) {
        cartDiv.innerHTML += "<p>Your cart is empty.</p>";
        document.getElementById('checkout-btn').style.display = 'none';
        return;
    }

    cart.forEach(vegetable => {
        const vegetableItem = document.createElement('div');
        vegetableItem.className = 'cart-item';
        vegetableItem.innerText = vegetable.charAt(0).toUpperCase() + vegetable.slice(1);
        cartDiv.appendChild(vegetableItem);
    });

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = '<strong>Total: ₹' + calculateTotal() + '</strong>';
    cartDiv.appendChild(totalDiv);

    const checkoutBtn = document.createElement('button');
    checkoutBtn.innerText = 'Checkout';
    checkoutBtn.id = 'checkout-btn';
    checkoutBtn.onclick = checkout;
    cartDiv.appendChild(checkoutBtn);

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