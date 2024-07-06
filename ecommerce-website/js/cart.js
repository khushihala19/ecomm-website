document.addEventListener("DOMContentLoaded", () => {
    displayCart();
});

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let finalPrice = document.getElementById('final-price');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: 
                <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                ${item.quantity}
                <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
            </p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItemDiv);
    });

    finalPrice.innerHTML = `Total: $${total}`;
}

function updateQuantity(productId, action) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === productId);

    if (action === 'increase') {
        product.quantity++;
    } else if (action === 'decrease') {
        product.quantity--;
        if (product.quantity === 0) {
            cart = cart.filter(item => item.id !== productId);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
