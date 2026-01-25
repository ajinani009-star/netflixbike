// ====================================
// DATA: MODELS & CONFIGURATION
// ====================================
const models = [
    {
        id: 'breaking-bad',
        name: 'Breaking Bad',
        image: 'images/breaking-bad.jpeg.jpeg',
        price: '₹1,18,000',
        priceInt: 118000,
        series: 'elite',
        quote: "I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!",
        accessories: [
            { id: 'bb-bottle', name: 'Heisenberg Blue Bottle', image: 'images/breakingbottle.png', price: '₹4,500', priceInt: 4500, rating: '5.0' },
            { id: 'bb-helmet', name: 'Meth Blue Aero Helmet', image: 'images/breakinghelmet.png', price: '₹7,000', priceInt: 7000, rating: '5.0' }
        ],
        description: 'Inspired by the legendary series that redefined television. The Breaking Bad model combines raw power with precision engineering, just like Walter White\'s meticulous approach to chemistry. This bike is built for those who demand perfection and aren\'t afraid to push boundaries.',
        reviews: [
            "The engineering here is pure chemistry. Precise, dangerous, and absolutely flawless.",
            "I've never ridden anything this potent. It demands respect on every turn.",
            "Say my name. This bike is the one who knocks."
        ]
    },
    {
        id: 'peaky-blinders',
        name: 'Peaky Blinders',
        image: 'images/peaky-blinders.jpeg.jpeg',
        price: '₹95,000',
        priceInt: 95000,
        series: 'premium',
        quote: "By order of the Peaky Blinders. This isn't just a bike, it's a declaration of power. Ride like you own the streets.",
        accessories: [
            { id: 'pb-bottle', name: 'Shelby Bottle', image: 'images/peakybottle.png', price: '₹3,500', priceInt: 3500, rating: '4.9' },
            { id: 'pb-helmet', name: 'Razor Cap Helmet', image: 'images/peakyhelmet.png', price: '₹6,000', priceInt: 6000, rating: '4.9' }
        ],
        description: 'Channel the sophistication and grit of the Shelby family. The Peaky Blinders edition features classic styling with modern performance, embodying the perfect balance between elegance and power. Ride with the confidence of a true leader.',
        reviews: [
            "This machine runs Birmingham. Dark, handsome, and commands authority.",
            "A proper weapon for the streets. No fuss, just raw power and class.",
            "Rides like a Shelby. Sharp, dangerous, and untouchable."
        ]
    },
    {
        id: 'one-piece',
        name: 'One Piece',
        image: 'images/one-piece.jpeg.jpeg',
        price: '₹72,000',
        priceInt: 72000,
        series: 'standard',
        quote: "I'm going to be King of the Pirates! Leave your worries on the shore and ride into the freedom of the open seas.",
        accessories: [
            { id: 'op-bottle', name: 'Grand Line Bottle', image: 'images/onepiecebottle.png', price: '₹2,500', priceInt: 2500, rating: '4.8' },
            { id: 'op-helmet', name: 'Straw Hat Aero', image: 'images/onepiecehelmet.png', price: '₹4,500', priceInt: 4500, rating: '4.8' }
        ],
        description: 'Adventure awaits with the One Piece model. Built for those who seek freedom and adventure on the open road. This bike embodies the spirit of exploration and the thrill of discovering new horizons, just like Luffy and his crew.',
        reviews: [
            "Freedom! That's what this bike feels like. A true companion for the Grand Line.",
            "The spirit of adventure is built into every gear. I feel like the King of the Road!",
            "Nakama for life. This bike will take you anywhere you dream to go."
        ]
    },
    {
        id: 'all-of-us-are-dead',
        name: 'All Of Us Are Dead',
        image: 'images/all-of-us-are-dead.jpeg.jpeg',
        price: '₹68,000',
        priceInt: 68000,
        series: 'standard',
        quote: "Even if the world ends today, we ride. Survival isn't a choice, it's an instinct. Outrun everything.",
        accessories: [
            { id: 'aoud-bottle', name: 'Survival Canteen', image: 'images/allofusbottle.png', price: '₹2,500', priceInt: 2500, rating: '4.8' },
            { id: 'aoud-helmet', name: 'Bio-Hazard Helmet', image: 'images/allofushelmet.png', price: '₹4,500', priceInt: 4500, rating: '4.8' }
        ],
        description: 'Survive and thrive with the All Of Us Are Dead edition. This model is designed for endurance and resilience, built to handle any challenge that comes your way. Perfect for riders who never give up, no matter the odds.',
        reviews: [
            "Outrun everything. This bike is built for survival when seconds count.",
            "Resilient and fast. Perfect for when the world is falling apart behind you.",
            "Adrenaline rush! Feels like I'm escaping a horde every time I sprint."
        ]
    },
    {
        id: 'netflix-premium',
        name: 'Netflix Premium',
        image: 'images/classic-premium.jpeg.jpeg',
        price: '₹50,000',
        priceInt: 50000,
        series: 'standard',
        quote: "See what's next. A classic ride for a modern world. The story starts when you start pedaling.",
        accessories: [
            { id: 'np-bottle', name: 'N-Series Bottle', image: 'images/netflixbottle.png', price: '₹2,500', priceInt: 2500, rating: '4.8' },
            { id: 'np-helmet', name: 'Streamline Helmet', image: 'images/netflixhelmet.png', price: '₹4,000', priceInt: 4000, rating: '4.8' }
        ],
        description: 'The classic Netflix Premium model represents timeless elegance and premium quality. This is our signature bike, combining the best of design and performance. A true classic that never goes out of style.',
        reviews: [
            "Binge-worthy performance. Smooth, reliable, and always ready for the next episode.",
            "The classic choice. Never buffers, always delivers high definition speed.",
            "Simply premium. The interface between rider and road is seamless."
        ]
    },
    {
        id: 'stranger-things',
        name: 'Stranger Things',
        image: 'images/stranger-things.jpeg.jpeg',
        price: '₹1,05,000',
        priceInt: 105000,
        series: 'elite',
        quote: "Friends don't lie. But this speed? It's unreal. Enter the Upside Down and ride where no one else dares.",
        accessories: [
            { id: 'st-bottle', name: 'Upside Down Flask', image: 'images/strangerbottle.png', price: '₹4,500', priceInt: 4500, rating: '5.0' },
            { id: 'st-helmet', name: 'Hawkins Aero', image: 'images/strangerhelmet.png', price: '₹7,000', priceInt: 7000, rating: '5.0' }
        ],
        description: 'Venture into the unknown with the Stranger Things edition. This bike features cutting-edge design and mysterious aesthetics, perfect for riders who love the thrill of adventure and the excitement of the unexpected.',
        reviews: [
            "This bike is a portal to another dimension. Absolutely mind-bending speed.",
            "Strange things happen when you ride this fast. Pure supernatural power.",
            "Hawkins lab technology on two wheels. Beware the Upside Down."
        ]
    },
    {
        id: 'money-heist',
        name: 'Money Heist',
        image: 'images/money-heist.jpeg.jpeg',
        price: '₹98,000',
        priceInt: 98000,
        series: 'premium',
        quote: "First rule of the heist: stick to the plan. But on this bike? There are no rules. Bella Ciao to the competition.",
        accessories: [
            { id: 'mh-bottle', name: 'Dali Mask Bottle', image: 'images/moneybottle.png', price: '₹3,500', priceInt: 3500, rating: '4.9' },
            { id: 'mh-helmet', name: 'Professor\'s Mind', image: 'images/moneyhelmet.png', price: '₹6,000', priceInt: 6000, rating: '4.9' }
        ],
        description: 'Plan your perfect ride with the Money Heist model. This bike is all about precision, strategy, and flawless execution. Built for riders who think ahead and execute their plans with perfection, just like the Professor\'s crew.',
        reviews: [
            "Execution is everything. This bike follows the plan perfectly.",
            "Rebellion on wheels. For those who don't follow the rules.",
            "Bella Ciao! This is the ultimate escape vehicle."
        ]
    },
    {
        id: 'squid-game',
        name: 'Squid Game',
        image: 'images/squid-game.jpeg.jpeg',
        price: '₹88,000',
        priceInt: 88000,
        series: 'premium',
        quote: "There is no turning back. You either ride to win, or you get eliminated. Green light... GO!",
        accessories: [
            { id: 'sg-bottle', name: 'Player 456 Bottle', image: 'images/squidbottle.png', price: '₹3,500', priceInt: 3500, rating: '4.9' },
            { id: 'sg-helmet', name: 'Frontman Helmet', image: 'images/squidhelmet.png', price: '₹6,000', priceInt: 6000, rating: '4.9' }
        ],
        description: 'Survive the competition with the Squid Game edition. This model is designed for peak performance under pressure, built for riders who thrive in challenging situations and always come out on top.',
        reviews: [
            "Red light... GREEN LIGHT! The acceleration is terrifyingly good.",
            "Play to win. There is no second place with this machine.",
            "High stakes performance. Do you have what it takes to ride it?"
        ]
    }
];

const REVIEW_NAMES_POOL = [
    "Roshan Raji", "Adhan Binoy", "Ajax K Sunil", "Eben Biju",
    "Alan Biju", "Adhel Ealias", "Alen Sunny", "Alfey Reji",
    "Anugrah Vibi", "Ajin Ani", "Milan Mathews", "Johan Jommy"
];



const SPEC_DETAILS = {
    'frame': {
        title: 'Carbon Fiber Monocoque Frame',
        content: 'Our frames are constructed using high-modulus carbon fiber, utilizing a monocoque molding process that eliminates joints and weak points. This results in a frame that is incredibly stiff for power transfer, yet compliant enough to absorb road vibrations. The aerodynamic profile is sculpted in a virtual wind tunnel to reduce drag at high speeds.'
    },
    'geometry': {
        title: 'Track Racing Geometry',
        content: 'The geometry is aggressive and purely focused on speed. With a steep head tube angle and short wheelbase, steering is razor-sharp and responsive. The rider position is optimized for aerodynamics, keeping you low and efficient. This is not a casual cruiser; it is a precision instrument for the track.'
    },
    'handlebars': {
        title: 'Integrated Aero Cockpit',
        content: 'The handlebars and stem are integrated into a single carbon fiber unit, reducing weight and drag. The airfoil shape cuts through the wind, while the internal cable routing keeps the front end clean. The drops are shaped for maximum leverage during sprints.'
    },
    'wheels': {
        title: 'Carbon Deep Section Wheels',
        content: 'Featuring 60mm deep carbon rims, these wheels are designed to slice through the air and maintain momentum. They are laced with aero spokes to high-quality sealed bearing hubs. The braking surface is treated for consistent stopping power in dry and wet conditions.'
    },
    'drivetrain': {
        title: 'Precision Drivetrain',
        content: 'Equipped with a top-tier group set featuring electronic shifting for instant, precise gear changes under load. The crankset is ultra-stiff to ensure every watt of your power pushes you forward. Ceramic bearings in the bottom bracket reduce friction to a minimum.'
    },
    'brakes': {
        title: 'Hydraulic Disc Brakes',
        content: 'Stopping power is just as important as speed. Our hydraulic disc brake system offers modulation and power that rim brakes simply cannot match. With 140mm rotors and flat-mount calipers, you have confidence and control in every corner and descent.'
    }
};

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', function () {
    // Index Page
    if (document.getElementById('modelsGrid')) {
        initializeIndexPage();
    }

    // Product Page
    if (document.getElementById('productName')) {
        initializeProductPage();
    }

    // Checkout Page
    if (document.getElementById('checkoutForm')) {
        initializeCheckoutPage();
    }

    // Common
    initializeEmailSubscription();
    initializeSmoothScrolling();
    initializeKCart(); // Initialize Global KCART
    initializeSpecModal(); // Initialize Spec Modal
    initializeCreatorsModal(); // Initialize Creators Modal
});


// ====================================
// CART SYSTEM (Global)
// ====================================
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('netflixBikesCart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('netflixBikesCart', JSON.stringify(cart));
    updateKCartUI(); // Update UI whenever cart is saved
}

function addToCart(item, type, btnElement = null, silent = false) {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        existingItem.priceInt = item.priceInt;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            priceInt: item.priceInt,
            type: type,
            seriesQuote: item.quote,
            model: type === 'accessory' ? sessionStorage.getItem('selectedModel') : item.id,
            quantity: 1
        });
    }

    saveCart(cart);

    // Silent mode for "Buy Now"
    if (silent) return;

    // Visual feedback for "Add to Cart"
    if (btnElement) {
        const originalText = btnElement.textContent;
        const originalColor = btnElement.style.backgroundColor;
        const originalBorder = btnElement.style.borderColor;
        const originalColorText = btnElement.style.color;

        btnElement.textContent = "Added ✓";
        btnElement.style.backgroundColor = "#46d369";
        btnElement.style.borderColor = "#46d369";
        btnElement.style.color = "#ffffff";
        btnElement.disabled = true;

        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.style.backgroundColor = "";
            btnElement.style.borderColor = "";
            btnElement.style.color = "";
            btnElement.disabled = false;
        }, 1500);
    }

    // Open KCART to show added item
    openKCart();
}

function clearCart() {
    localStorage.removeItem('netflixBikesCart');
    updateKCartUI();
}

function updateQuantity(itemId, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = (item.quantity || 1) + change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart(cart);
        }
    }
}

function removeFromCart(itemId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== itemId);
    saveCart(cart);
}



// ====================================
// KCART (Floating Logic)
// ====================================
function initializeKCart() {
    // Create KCART elements
    const kcartBtn = document.createElement('div');
    kcartBtn.id = 'kcart-btn';
    kcartBtn.className = 'kcart-btn';
    kcartBtn.innerHTML = `
        <span class="kcart-icon">🛒</span>
        <span id="kcart-count" class="kcart-count">0</span>
    `;

    const kcartDrawer = document.createElement('div');
    kcartDrawer.id = 'kcart-drawer';
    kcartDrawer.className = 'kcart-drawer';
    kcartDrawer.innerHTML = `
        <div class="kcart-header">
            <h3>Your Cart</h3>
            <button id="kcart-close" class="kcart-close">&times;</button>
        </div>
        <div id="kcart-items" class="kcart-items">
            <!-- Items injected here -->
        </div>
        <div class="kcart-footer">
            <div class="kcart-total">
                <span>Total:</span>
                <span id="kcart-total-price">₹0</span>
            </div>
            <button id="kcart-checkout-btn" class="kcart-checkout-btn">Checkout</button>
        </div>
    `;

    document.body.appendChild(kcartBtn);
    document.body.appendChild(kcartDrawer);

    // Event Listeners
    kcartBtn.addEventListener('click', toggleKCart);
    document.getElementById('kcart-close').addEventListener('click', closeKCart);
    document.getElementById('kcart-checkout-btn').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    // Initial Update
    updateKCartUI();
}

function toggleKCart() {
    const drawer = document.getElementById('kcart-drawer');
    drawer.classList.toggle('open');
}

function openKCart() {
    document.getElementById('kcart-drawer').classList.add('open');
}

function closeKCart() {
    document.getElementById('kcart-drawer').classList.remove('open');
}

function updateKCartUI() {
    const cart = getCart();

    // Update Badge
    const countEl = document.getElementById('kcart-count');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        countEl.textContent = totalItems;
        countEl.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update Drawer Items
    const itemsEl = document.getElementById('kcart-items');
    const totalEl = document.getElementById('kcart-total-price');
    const checkoutBtn = document.getElementById('kcart-checkout-btn');

    if (itemsEl && totalEl) {
        itemsEl.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            itemsEl.innerHTML = '<p class="kcart-empty">Cart is empty</p>';
            checkoutBtn.disabled = true;
        } else {
            checkoutBtn.disabled = false;
            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'kcart-item';
                div.innerHTML = `
                    <div class="kcart-item-info">
                        <span class="kcart-item-name">${item.name}</span>
                        <span class="kcart-item-price">${item.price}</span>
                        <div class="kcart-qty-controls">
                            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                            <span class="qty-val">${item.quantity || 1}</span>
                            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="kcart-item-remove" data-item-id="${item.id}" title="Remove item">✕</button>
                `;

                // Add remove button click handler
                const removeBtn = div.querySelector('.kcart-item-remove');
                removeBtn.addEventListener('click', () => removeFromCart(item.id));

                // Note: inline onclick handlers for qty buttons need global scope or event delegation
                // Let's attach them properly via delegation or closure if possible, but for simplicity here we rely on global Exposure or delegation
                // To be safe, let's attach event listeners to the buttons manually since strict modules might block inline
                const minusBtn = div.querySelectorAll('.qty-btn')[0];
                const plusBtn = div.querySelectorAll('.qty-btn')[1];
                minusBtn.onclick = () => updateQuantity(item.id, -1);
                plusBtn.onclick = () => updateQuantity(item.id, 1);

                itemsEl.appendChild(div);
                if (item.priceInt) total += item.priceInt * (item.quantity || 1);
            });
        }
        totalEl.textContent = '₹' + total.toLocaleString('en-IN');
    }
}


// ====================================
// INDEX PAGE
// ====================================
function initializeIndexPage() {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;

    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.onclick = () => navigateToProduct(model.id);

        card.innerHTML = `
            <img src="${model.image}" alt="${model.name}" class="model-image">
            <div class="model-info">
                <h3 class="model-name">${model.name}</h3>
                <p class="model-price">${model.price}</p>
            </div>
        `;
        modelsGrid.appendChild(card);
    });

    initShowcaseAnimation();
}

function navigateToProduct(modelId) {
    sessionStorage.setItem('selectedModel', modelId);
    const loader = document.getElementById('loader-overlay');
    const video = document.getElementById('loader-video');

    if (loader && video) {
        loader.classList.add('active');
        video.currentTime = 0;
        video.play().catch(() => window.location.href = 'product.html');
        video.onended = () => {
            loader.classList.remove('active');
            window.location.href = 'product.html';
        };
        setTimeout(() => { if (loader.classList.contains('active')) window.location.href = 'product.html'; }, 3000);
    } else {
        window.location.href = 'product.html';
    }
}

// ====================================
// PRODUCT PAGE
// ====================================
function initializeProductPage() {
    const selectedModelId = sessionStorage.getItem('selectedModel');
    const model = models.find(m => m.id === selectedModelId) || models[0];

    const ids = ['productImage', 'productName', 'productPrice', 'productDescription'];
    const textMapping = {
        'productName': model.name,
        'productPrice': model.price,
        'productDescription': model.description
    };

    if (document.getElementById('productImage')) {
        document.getElementById('productImage').src = model.image;
        document.getElementById('productImage').alt = model.name;

        // Inject Quote
        const quoteContainer = document.getElementById('productQuote');
        if (quoteContainer) {
            quoteContainer.innerHTML = `"${model.quote}"`;
            quoteContainer.style.opacity = '0';
            setTimeout(() => {
                quoteContainer.style.transition = 'opacity 1s ease';
                quoteContainer.style.opacity = '1';
                quoteContainer.style.color = '#E50914';
                quoteContainer.style.fontSize = '24px';
                quoteContainer.style.fontStyle = 'italic';
                quoteContainer.style.textAlign = 'center';
                quoteContainer.style.marginTop = '20px';
                quoteContainer.style.padding = '20px';
                quoteContainer.style.borderLeft = '3px solid #E50914';
                quoteContainer.style.background = 'rgba(0,0,0,0.5)';
            }, 500);
        }
    }

    for (const [id, text] of Object.entries(textMapping)) {
        if (document.getElementById(id)) document.getElementById(id).textContent = text;
    }

    document.title = `${model.name} - Netflix Bikes`;

    const accContainer = document.getElementById('accessoriesContainer');
    if (accContainer && model.accessories) {
        accContainer.innerHTML = '';
        model.accessories.forEach(acc => {
            const el = document.createElement('div');
            el.className = 'accessory-card';
            el.innerHTML = `
                <div class="acc-content-wrapper">
                    ${acc.image ? `<img src="${acc.image}" alt="${acc.name}" class="accessory-img">` : ''}
                    <div class="accessory-info">
                        <h4>${acc.name}</h4>
                        <div class="accessory-meta">
                            <span class="acc-price">${acc.price}</span>
                            <span class="acc-rating">⭐ ${acc.rating}</span>
                        </div>
                    </div>
                </div>
                <button class="add-acc-btn" data-id="${acc.id}">Add to Cart</button>
            `;
            el.querySelector('button').addEventListener('click', (e) => {
                addToCart(acc, 'accessory', e.target);
            });
            accContainer.appendChild(el);
        });
    }

    renderReviews(model);

    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');

    if (addToCartBtn) {
        const newAdd = addToCartBtn.cloneNode(true);
        addToCartBtn.parentNode.replaceChild(newAdd, addToCartBtn);
        newAdd.addEventListener('click', (e) => addToCart(model, 'bike', e.target));
    }

    if (buyNowBtn) {
        const newBuy = buyNowBtn.cloneNode(true);
        buyNowBtn.parentNode.replaceChild(newBuy, buyNowBtn);
        newBuy.addEventListener('click', () => {
            addToCart(model, 'bike', null, true);
            window.location.href = 'checkout.html';
        });
    }
}

function renderReviews(model) {
    const container = document.querySelector('.reviews-container');
    if (!container) return;

    container.innerHTML = '<h2>Customer Reviews</h2><div class="reviews-grid" style="display:grid; gap:20px; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));"></div>';
    const grid = container.querySelector('.reviews-grid');

    let seed = 0;
    for (let i = 0; i < model.id.length; i++) seed += model.id.charCodeAt(i);
    const seededRandom = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    let pool = [...REVIEW_NAMES_POOL];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Use model specific reviews if available, else generic as fallback (though all have specific now)
    const reviewTexts = model.reviews || [
        "Incredible performance.", "Worth every penny.", "Stunning design."
    ];

    for (let i = 0; i < 3; i++) {
        let name;
        if (i < pool.length) {
            name = pool[i];
        } else {
            name = `Reviewer ${Math.floor(seededRandom() * 1000)}`;
        }

        // Loop through model reviews, ensure unique 3 if possible
        const template = reviewTexts[i % reviewTexts.length];

        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <div class="reviewer-name">${name}</div>
                <div class="review-rating" style="color:#FFD700">★★★★★</div>
            </div>
            <p class="review-text">"${template}"</p>
            <p class="review-date">Verified Purchase</p>
        `;
        grid.appendChild(card);
    }
}

// ====================================
// CHECKOUT PAGE
// ====================================
function initializeCheckoutPage() {
    const cart = getCart();
    const cartItemsDiv = document.getElementById('cartItems');
    const totalDisplay = document.getElementById('cartTotalDisplay');
    const form = document.getElementById('checkoutForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="empty-cart-message visible" style="color:white; text-align:center;">Your cart is empty. <a href="index.html" style="color:red;">Go Shopping</a></div>';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Cart is Empty";
        }
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            const qtyStr = item.quantity > 1 ? ` x${item.quantity}` : '';
            div.innerHTML = `
                <span class="item-name">${item.name} <span style="font-size:12px; color:#888;">(${item.type}${qtyStr})</span></span>
                <span class="item-price">${item.price}</span>
            `;
            cartItemsDiv.appendChild(div);
            if (item.priceInt) total += item.priceInt * (item.quantity || 1);
        });

        if (submitBtn) submitBtn.disabled = false;
    }

    if (totalDisplay) {
        totalDisplay.textContent = '₹' + total.toLocaleString('en-IN');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (cart.length === 0) return;

        document.getElementById('checkoutContent').style.display = 'none';
        const successScreen = document.getElementById('successScreen');
        if (successScreen) {
            successScreen.style.display = 'block';
            const reversed = [...cart].reverse();
            const bike = reversed.find(i => i.type === 'bike');
            const quoteEl = document.getElementById('quoteDisplay');
            if (quoteEl) {
                if (bike && bike.seriesQuote) {
                    quoteEl.textContent = `"${bike.seriesQuote}"`;
                } else {
                    quoteEl.textContent = `"Every story has a hero. Every hero needs a ride."`;
                }
            }
        }
        clearCart();
    });
}

// ====================================
// UTILITIES
// ====================================
function initializeEmailSubscription() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
    const subscribeMessage = document.getElementById('subscribeMessage');

    if (subscribeBtn && emailInput) {
        const handle = () => {
            const email = emailInput.value.trim();
            if (!email || !email.includes('@')) {
                if (subscribeMessage) {
                    subscribeMessage.textContent = "Please enter a valid email.";
                    subscribeMessage.className = 'subscribe-message error';
                }
                return;
            }
            if (subscribeMessage) {
                subscribeMessage.textContent = "Thank you for subscribing!";
                subscribeMessage.className = 'subscribe-message success';
                setTimeout(() => subscribeMessage.textContent = '', 3000);
            }
            emailInput.value = '';
        };

        subscribeBtn.addEventListener('click', handle);
        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handle();
        });
    }
}

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initShowcaseAnimation() {
    const showcase = document.querySelector('.showcase-section');
    if (!showcase) return;

    window.addEventListener('scroll', () => {
        const video = document.querySelector('.showcase-video');
        const content = document.querySelector('.showcase-content');
        if (!video || !content) return;

        const rect = showcase.getBoundingClientRect();
        const winH = window.innerHeight;

        if (rect.top <= 0 && rect.bottom >= 0) {
            const progress = Math.abs(rect.top) / (rect.height - winH);
            const clamped = Math.max(0, Math.min(1, progress));

            video.style.transform = `scale(${0.8 + (0.4 * clamped)})`;
            video.style.opacity = 0.5 + (0.5 * clamped);

            if (clamped > 0.3 && clamped < 0.8) {
                content.style.opacity = 1;
                content.style.transform = 'translateY(0)';
            } else {
                content.style.opacity = 0;
            }
        }
    });
}

function initializeSpecModal() {
    const modal = document.getElementById('spec-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modal-body-content');

    if (!modal || !modalBody) return;

    // Open Modal
    document.querySelectorAll('.spec-card').forEach(card => {
        card.addEventListener('click', () => {
            const specType = card.getAttribute('data-spec');
            if (SPEC_DETAILS[specType]) {
                modalBody.innerHTML = `
                    <h2>${SPEC_DETAILS[specType].title}</h2>
                    <p>${SPEC_DETAILS[specType].content}</p>
                `;
                modal.style.display = 'block';
            }
        });
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function initializeCreatorsModal() {
    const modal = document.getElementById('globalCreatorsModal');
    const btn = document.getElementById('globalCreatorsBtn');
    const closeBtn = document.getElementById('closeGlobalCreators');

    if (btn && modal) {
        btn.onclick = function () {
            modal.style.display = "flex";
        }
    }

    if (closeBtn && modal) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
    }

    if (modal) {
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

