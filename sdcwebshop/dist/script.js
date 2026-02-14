// Enhanced script.js with real product images and prices
const ShopModule = (function () {
    // Private variables
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let observers = [];

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Observer pattern methods
    function subscribe(observer) {
        observers.push(observer);
    }

    function unsubscribe(observer) {
        observers = observers.filter(obs => obs !== observer);
    }

    function notify(data) {
        observers.forEach(observer => observer.update(data));
    }

    // Product database with actual fashion images
    const products = [
        {
            id: 1,
            name: 'Vintage Denim Jacket',
            price: 850,
            image: 'https://tse1.mm.bing.net/th/id/OIP.YnkB45Af8h_KgUJeOQF8eQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Classic vintage denim jacket, like leon kennedy in resident evil.',
            category: 'Jackets'
        },
        {
            id: 2,
            name: 'Preloved White Sneakers',
            price: 650,
            image: 'https://img01.ztat.net/article/spp-media-p1/2a7c4e5702c14d2db89e3b24c4c9888b/d77c203297d0425994dd85125bfda67a.jpg?imwidth=500',
            description: 'Clean white sneakers in excellent condition.',
            category: 'Shoes'
        },
        {
            id: 3,
            name: 'Pretty Crop Top',
            price: 350,
            image: 'https://images.summitmedia-digital.com/spotph/images/2021/05/11/hm-1-1620695271.jpeg',
            description: 'Fashionable crop top for summer or any occasion.',
            category: 'Tops'
        },
        {
            id: 4,
            name: 'Designer Leather Bag',
            price: 1200,
            image: 'https://cdn.notonthehighstreet.com/fs/6b/8a/e8d4-64c3-4933-8cc6-29efe8539db6/original_leather-crossbody-messenger-bag-distressed-brown.jpg',
            description: 'Genuine leather designer handbag.',
            category: 'Bags'
        },
        {
            id: 5,
            name: 'Classic Watch',
            price: 950,
            image: 'https://sothebys-com.brightspotcdn.com/dims4/default/3a36eb0/2147483647/strip/true/crop/2000x2000+0+0/resize/2880x2880!/quality/90/?url=http:%2F%2Fsothebys-brightspot-migration.s3.amazonaws.com%2F5f%2F6b%2F86%2Fa3c021c540dd0050de6912911f8b914b20097ae7867bc7f50bf9c56143%2Fslideshow-2000x2000-113hk0772-9lnjz-1.jpg',
            description: 'Elegant vintage-style watch.',
            category: 'Accessories'
        },
        {
            id: 6,
            name: 'Summer Dress',
            price: 750,
            image: 'https://tse4.mm.bing.net/th/id/OIP.Z96BbkD1tTKaTC2ZAYvkyAHaIb?rs=1&pid=ImgDetMain&o=7&rm=3',
            description: 'Light and comfortable summer dress.',
            category: 'Dresses'
        },
        {
            id: 7,
            name: 'Casual Joggers',
            price: 550,
            image: 'https://i5.walmartimages.com/seo/qucoqpe-Women-s-High-Waisted-Sweatpants-Workout-Active-Joggers-Pants-Baggy-Lounge-Bottoms_feb98e2c-aa6f-409e-9298-055ac43a537d.e33971c20c7c125b308e2956adca5945.jpeg?odnHeight=576&odnWidth=576&odnBg=FFFFFF',
            description: 'Comfortable casual jogger pants.',
            category: 'Bottoms'
        },
        {
            id: 8,
            name: 'Earrings',
            price: 250,
            image: 'https://m.media-amazon.com/images/I/71z1cRgEZ8L._SL1500_.jpg',
            description: 'Beautiful statement earrings.',
            category: 'Jewelry'
        },
        {
            id: 9,
            name: 'Winter Sweater',
            price: 680,
            image: 'https://cdn.mos.cms.futurecdn.net/whowhatwear/posts/304575/sweater-styling-304575-1671257667806-main-1920-80.jpg',
            description: 'Warm and cozy winter sweater.',
            category: 'Sweaters'
        }
    ];

    // Add item to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }
        
        cart.push({...product});
        saveCart();
        notify({ action: 'add', product });
        alert(`✅ ${product.name} added to cart!`);
        updateCartDisplay();
    }

    // Remove item from cart
    function removeFromCart(index) {
        if (index < 0 || index >= cart.length) return;
        
        const removed = cart.splice(index, 1)[0];
        saveCart();
        notify({ action: 'remove', product: removed });
        updateCartDisplay();
    }

    // Clear cart
    function clearCart() {
        cart = [];
        saveCart();
        updateCartDisplay();
    }

    // Get cart total
    function getCartTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    // Update cart display
    function updateCartDisplay() {
        const cartItems = document.getElementById('cart-items');
        const subtotalEl = document.getElementById('subtotal');
        const totalEl = document.getElementById('total');
        const shippingEl = document.getElementById('shipping');
        const emptyCartMsg = document.getElementById('empty-cart-message');
        const checkoutBtn = document.getElementById('checkout-btn');
        
        if (!cartItems) return;

        // Calculate shipping
        const subtotal = getCartTotal();
        const shipping = subtotal > 0 ? 50 : 0;
        const total = subtotal + shipping;

        if (cart.length === 0) {
            if (emptyCartMsg) emptyCartMsg.style.display = 'block';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            
            // Remove all existing cart items
            const items = cartItems.querySelectorAll('.cart-item');
            items.forEach(item => item.remove());
            
            // Show empty message if it exists
            if (!emptyCartMsg) {
                cartItems.innerHTML = '<p id="empty-cart-message">Your cart is empty. <a href="catalog.html">Browse products</a></p>';
            }
        } else {
            if (emptyCartMsg) emptyCartMsg.style.display = 'none';
            if (checkoutBtn) checkoutBtn.style.display = 'block';
            
            // Update cart items
            cartItems.innerHTML = '';
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'product cart-item';
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="category">${item.category}</p>
                    </div>
                    <div class="cart-actions">
                        <span class="price">₱${item.price}</span>
                        <button onclick="ShopModule.removeFromCart(${index})">Remove</button>
                    </div>
                `;
                cartItems.appendChild(itemDiv);
            });
        }

        // Update totals
        if (subtotalEl) subtotalEl.textContent = subtotal;
        if (shippingEl) shippingEl.textContent = shipping;
        if (totalEl) totalEl.textContent = total;
    }

    // Display products in catalog
    function displayProducts() {
        const productList = document.getElementById('product-list');
        if (!productList) return;

        productList.innerHTML = '';
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="category">${product.category}</p>
                <p class="price">₱${product.price}</p>
                <button onclick="ShopModule.addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(div);
        });
    }

    // Observer class
    function CartObserver(name) {
        this.name = name;
    }
    CartObserver.prototype.update = function(data) {
        console.log(`${this.name} notified: ${data.action} - ${data.product.name} (₱${data.product.price})`);
    };

    // Initialize observer
    const cartObserver = new CartObserver('CartTracker');
    subscribe(cartObserver);

    // Return public methods
    return {
        addToCart,
        removeFromCart,
        clearCart,
        displayProducts,
        updateCartDisplay,
        getCartTotal,
        getCart: () => [...cart],
        subscribe,
        unsubscribe
    };
})();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-list')) {
        ShopModule.displayProducts();
    }
    if (document.getElementById('cart-items')) {
        ShopModule.updateCartDisplay();
    }
});