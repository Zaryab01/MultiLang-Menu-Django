(function(){
  // Global variables
  const toggle = document.getElementById('toggleLang');
  const grid = document.getElementById('menuGrid');
  const tabs = document.getElementById('categoryTabs');
  const cartButton = document.getElementById('cartButton');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  let arabic = false;
  let cart = [];
  const sections = [...new Set(MENU.map(i => i.section))];

  // Initialize
  function init() {
    setupEventListeners();
    setLang(false);
    updateCartDisplay();
    addScrollIndicatorListener();
  }

  // Event Listeners
  function setupEventListeners() {
    toggle.addEventListener('change', () => setLang(toggle.checked));
    cartButton.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', proceedToCheckout);

    // Close cart with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
        closeCart();
      }
    });
  }

  // Scroll indicator functionality
  function addScrollIndicatorListener() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const categoryTabs = document.querySelector('.category-tabs');
        if (categoryTabs) {
          categoryTabs.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // Language switching
  function setLang(isArabic) {
    arabic = isArabic;
    document.body.classList.toggle('lang-ar', isArabic);
    document.body.classList.toggle('lang-en', !isArabic);
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    // Update all data-en/data-ar elements
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = isArabic ? el.dataset.ar : el.dataset.en;
    });

    renderMenu('All');
    updateCartDisplay();
  }

  // Tab rendering
  function renderTabs(activeSection = 'All') {
    tabs.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.textContent = arabic ? 'الكل' : 'All';
    if (activeSection === 'All') allBtn.classList.add('active');
    allBtn.onclick = () => renderMenu('All');
    tabs.appendChild(allBtn);

    sections.forEach(sec => {
      const btn = document.createElement('button');
      btn.textContent = sec;
      if (activeSection === sec) btn.classList.add('active');
      btn.onclick = () => renderMenu(sec);
      tabs.appendChild(btn);
    });
  }

  // Menu rendering with cart functionality
  function renderMenu(section = 'All') {
    renderTabs(section);
    grid.innerHTML = '';
    let items = section === 'All' ? MENU : MENU.filter(i => i.section === section);

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('data-item-id', index);

      const img = document.createElement('img');
      img.src = `{% static 'menu/images/${item.img}' %}`;
      img.alt = arabic ? item.ar : item.en;
      img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMyMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgNzJIMTc2VjEwNEgxNDRWNzJaIiBmaWxsPSIjRDFEOEUwIi8+CjxwYXRoIGQ9Ik0xNDQgMTA0SDE3NlYxMzZIMTQ0VjEwNFoiIGZpbGw9IiNEMUQ4RTAiLz4KPC9zdmc+';
      };
      card.appendChild(img);

      const content = document.createElement('div');
      content.className = 'content';

      const title = document.createElement('h4');
      title.textContent = arabic ? item.ar : item.en;
      content.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = arabic ? (item.desc_ar || '') : (item.desc_en || '');
      content.appendChild(desc);

      const priceSection = document.createElement('div');
      priceSection.className = 'price-section';

      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = item.price || '';
      priceSection.appendChild(price);

      const addToCartBtn = document.createElement('button');
      addToCartBtn.className = 'add-to-cart-btn';
      addToCartBtn.innerHTML = `
        <span>🛒</span>
        <span>${arabic ? 'أضف للسلة' : 'Add to Cart'}</span>
      `;
      addToCartBtn.onclick = (e) => {
        e.preventDefault();
        addToCart(item, index);
        animateAddToCart(addToCartBtn);
      };
      priceSection.appendChild(addToCartBtn);

      content.appendChild(priceSection);
      card.appendChild(content);
      grid.appendChild(card);
    });
  }

  // Cart functionality
  function addToCart(item, itemId) {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: itemId,
        name: arabic ? item.ar : item.en,
        nameEn: item.en,
        nameAr: item.ar,
        price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
        priceText: item.price,
        img: item.img,
        quantity: 1
      });
    }

    updateCartDisplay();
    saveCartToStorage();
  }

  function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    saveCartToStorage();
  }

  function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeFromCart(itemId);
      } else {
        updateCartDisplay();
        saveCartToStorage();
      }
    }
  }

  function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Update cart items
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>${arabic ? 'السلة فارغة' : 'Your cart is empty'}</p>
          <p>${arabic ? 'أضف بعض العناصر اللذيذة!' : 'Add some delicious items!'}</p>
        </div>
      `;
      checkoutBtn.disabled = true;
    } else {
      cartItems.innerHTML = '';
      cart.forEach(item => {
        const cartItem = createCartItemElement(item);
        cartItems.appendChild(cartItem);
      });
      checkoutBtn.disabled = false;
    }
  }

  function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    cartItem.innerHTML = `
      <img src="{% static 'menu/images/${item.img}' %}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAyNEgzNlYzNkgyNFYyNFoiIGZpbGw9IiNEMUQ4RTAiLz4KPC9zdmc+'">
      <div class="cart-item-info">
        <div class="cart-item-name">${arabic ? item.nameAr : item.nameEn}</div>
        <div class="cart-item-price">${item.priceText}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">${arabic ? 'حذف' : 'Remove'}</button>
        </div>
      </div>
    `;

    return cartItem;
  }

  function animateAddToCart(button) {
    button.style.transform = 'scale(0.95)';
    button.style.background = '#059669';
    button.innerHTML = `
      <span>✓</span>
      <span>${arabic ? 'تم الإضافة!' : 'Added!'}</span>
    `;

    setTimeout(() => {
      button.style.transform = 'scale(1)';
      button.style.background = '';
      button.innerHTML = `
        <span>🛒</span>
        <span>${arabic ? 'أضف للسلة' : 'Add to Cart'}</span>
      `;
    }, 1000);
  }

  function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function proceedToCheckout() {
    if (cart.length === 0) return;

    // Save cart data for checkout page
    saveCartToStorage();

    // Navigate to checkout page
    window.location.href = '/checkout/';
  }

  function saveCartToStorage() {
    localStorage.setItem('darMariamCart', JSON.stringify(cart));
  }

  function loadCartFromStorage() {
    const savedCart = localStorage.getItem('darMariamCart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
      updateCartDisplay();
    }
  }

  // Make functions global for onclick handlers
  window.updateQuantity = updateQuantity;
  window.removeFromCart = removeFromCart;

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    init();
  });

  // Initialize immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadCartFromStorage();
      init();
    });
  } else {
    loadCartFromStorage();
    init();
  }
})();

