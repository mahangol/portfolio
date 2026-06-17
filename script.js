/* ============================================================
   FOLIO LAPTOPS — Main JavaScript
   Cart logic, navigation, animations, utilities
   ============================================================ */

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  { id: 'F20', name: 'Folio F20', price: 799,  originalPrice: 899,  tagline: 'Essential performance for everyday tasks', badge: null,    rating: 4.1, reviews: 128, processor: 'Intel Core i5-1235U', ram: '8GB DDR4', storage: '256GB SSD', display: '14" FHD IPS', battery: '45Wh / ~8hrs', weight: '1.6 kg', os: 'Windows 11 Home', gpu: 'Intel Iris Xe' },
  { id: 'F21', name: 'Folio F21', price: 899,  originalPrice: null, tagline: 'Slim design meets solid everyday power',    badge: null,    rating: 4.2, reviews: 95,  processor: 'Intel Core i5-1235U', ram: '8GB DDR4', storage: '512GB SSD', display: '14" FHD IPS', battery: '50Wh / ~9hrs', weight: '1.55 kg', os: 'Windows 11 Home', gpu: 'Intel Iris Xe' },
  { id: 'F22', name: 'Folio F22', price: 999,  originalPrice: null, tagline: 'More RAM, smoother multitasking',           badge: null,    rating: 4.3, reviews: 211, processor: 'Intel Core i5-1240P', ram: '16GB DDR4', storage: '512GB SSD', display: '15.6" FHD IPS', battery: '54Wh / ~9hrs', weight: '1.8 kg', os: 'Windows 11 Home', gpu: 'Intel Iris Xe' },
  { id: 'F23', name: 'Folio F23', price: 1049, originalPrice: null, tagline: 'Built for students and professionals',      badge: null,    rating: 4.2, reviews: 174, processor: 'AMD Ryzen 5 6600U', ram: '16GB DDR5', storage: '512GB NVMe', display: '14" FHD IPS', battery: '52Wh / ~10hrs', weight: '1.5 kg', os: 'Windows 11 Home', gpu: 'AMD Radeon 660M' },
  { id: 'F24', name: 'Folio F24', price: 1099, originalPrice: 1249, tagline: 'Portable powerhouse with all-day battery',  badge: 'Sale',  rating: 4.4, reviews: 302, processor: 'AMD Ryzen 5 7530U', ram: '16GB DDR4', storage: '512GB NVMe', display: '14" FHD IPS', battery: '60Wh / ~12hrs', weight: '1.45 kg', os: 'Windows 11 Pro', gpu: 'AMD Radeon 660M' },
  { id: 'F25', name: 'Folio F25', price: 1199, originalPrice: null, tagline: 'Vivid display for creative professionals',  badge: null,    rating: 4.5, reviews: 189, processor: 'Intel Core i7-1255U', ram: '16GB DDR5', storage: '512GB NVMe', display: '15.6" 2K IPS', battery: '60Wh / ~10hrs', weight: '1.9 kg', os: 'Windows 11 Pro', gpu: 'Intel Iris Xe' },
  { id: 'F26', name: 'Folio F26', price: 1299, originalPrice: null, tagline: 'Your creative canvas, redefined',          badge: null,    rating: 4.4, reviews: 143, processor: 'Intel Core i7-1255U', ram: '16GB DDR5', storage: '1TB NVMe', display: '14" 2.8K OLED', battery: '65Wh / ~11hrs', weight: '1.4 kg', os: 'Windows 11 Pro', gpu: 'Intel Iris Xe' },
  { id: 'F27', name: 'Folio F27', price: 1349, originalPrice: null, tagline: 'Discrete graphics for light gaming & design', badge: 'New', rating: 4.5, reviews: 67,  processor: 'Intel Core i7-1260P', ram: '16GB DDR5', storage: '1TB NVMe', display: '15.6" FHD 144Hz', battery: '68Wh / ~9hrs', weight: '2.0 kg', os: 'Windows 11 Home', gpu: 'NVIDIA RTX 2050 4GB' },
  { id: 'F28', name: 'Folio F28', price: 1449, originalPrice: null, tagline: 'Speed and elegance in perfect balance',     badge: null,    rating: 4.6, reviews: 221, processor: 'AMD Ryzen 7 6800H', ram: '16GB DDR5', storage: '1TB NVMe', display: '15.6" QHD IPS', battery: '72Wh / ~10hrs', weight: '1.85 kg', os: 'Windows 11 Pro', gpu: 'AMD Radeon RX 6600M 8GB' },
  { id: 'F29', name: 'Folio F29', price: 1499, originalPrice: 1699, tagline: 'Flagship-class performance, mid-range price', badge: 'Sale', rating: 4.6, reviews: 315, processor: 'Intel Core i7-12700H', ram: '32GB DDR5', storage: '1TB NVMe', display: '15.6" 2K IPS 165Hz', battery: '76Wh / ~9hrs', weight: '2.1 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 3060 6GB' },
  { id: 'F30', name: 'Folio F30', price: 1549, originalPrice: null, tagline: 'Razor-thin, titanium-grade durability',     badge: null,    rating: 4.5, reviews: 88,  processor: 'Intel Core i7-1260P', ram: '16GB LPDDR5', storage: '512GB NVMe', display: '13.4" 2.8K OLED', battery: '58Wh / ~11hrs', weight: '1.25 kg', os: 'Windows 11 Pro', gpu: 'Intel Iris Xe' },
  { id: 'F31', name: 'Folio F31', price: 1649, originalPrice: null, tagline: 'Next-gen Ryzen with stunning OLED display',  badge: 'New',   rating: 4.7, reviews: 142, processor: 'AMD Ryzen 9 6900HX', ram: '32GB DDR5', storage: '1TB NVMe', display: '15.6" 4K OLED', battery: '80Wh / ~10hrs', weight: '1.95 kg', os: 'Windows 11 Pro', gpu: 'AMD Radeon RX 6700M 10GB' },
  { id: 'F32', name: 'Folio F32', price: 1749, originalPrice: null, tagline: 'Workstation power in an ultrabook shell',   badge: null,    rating: 4.6, reviews: 76,  processor: 'Intel Core i9-12900H', ram: '32GB DDR5', storage: '1TB NVMe', display: '16" 2.5K IPS 240Hz', battery: '86Wh / ~9hrs', weight: '2.2 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 3070 Ti 8GB' },
  { id: 'F33', name: 'Folio F33', price: 1849, originalPrice: 1999, tagline: 'Uncompromising display & raw performance',  badge: 'Sale',  rating: 4.7, reviews: 193, processor: 'AMD Ryzen 9 7945HX', ram: '32GB DDR5', storage: '2TB NVMe', display: '16" 4K OLED 120Hz', battery: '90Wh / ~10hrs', weight: '2.0 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 4070 8GB' },
  { id: 'F34', name: 'Folio F34', price: 1949, originalPrice: null, tagline: 'Built for architects, engineers, creators', badge: null,    rating: 4.7, reviews: 104, processor: 'Intel Core i9-13900H', ram: '64GB DDR5', storage: '2TB NVMe', display: '17.3" 4K IPS', battery: '99Wh / ~8hrs', weight: '2.5 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 4080 12GB' },
  { id: 'F35', name: 'Folio F35', price: 2099, originalPrice: null, tagline: 'The studio machine for serious designers',  badge: 'New',   rating: 4.8, reviews: 58,  processor: 'AMD Ryzen 9 7940HX', ram: '64GB DDR5', storage: '2TB NVMe', display: '16" Mini-LED 4K', battery: '99Wh / ~9hrs', weight: '2.15 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 4090 16GB' },
  { id: 'F36', name: 'Folio F36', price: 2249, originalPrice: null, tagline: 'Premium ultrabook — zero compromises',       badge: null,    rating: 4.8, reviews: 73,  processor: 'Intel Core Ultra 9 185H', ram: '32GB LPDDR5X', storage: '2TB NVMe', display: '14" 3K OLED 120Hz', battery: '72Wh / ~12hrs', weight: '1.3 kg', os: 'Windows 11 Pro', gpu: 'Intel Arc + NVIDIA RTX 4060' },
  { id: 'F37', name: 'Folio F37', price: 2399, originalPrice: 2599, tagline: 'Silence the competition with this beast',   badge: 'Sale',  rating: 4.8, reviews: 251, processor: 'AMD Ryzen 9 7945HX3D', ram: '64GB DDR5', storage: '4TB NVMe', display: '18" 4K Mini-LED 240Hz', battery: '99Wh / ~8hrs', weight: '3.1 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 4090 24GB' },
  { id: 'F38', name: 'Folio F38', price: 2549, originalPrice: null, tagline: 'Content creation at an unmatched level',   badge: null,    rating: 4.9, reviews: 44,  processor: 'Intel Core Ultra 9 285H', ram: '96GB LPDDR5X', storage: '4TB NVMe', display: '16" 4K OLED 144Hz', battery: '99Wh / ~11hrs', weight: '1.9 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 4090 16GB' },
  { id: 'F39', name: 'Folio F39', price: 2799, originalPrice: null, tagline: 'Elite engineering, extraordinary results',  badge: null,    rating: 4.9, reviews: 37,  processor: 'AMD Ryzen AI 9 HX 375', ram: '128GB LPDDR5X', storage: '4TB NVMe', display: '18" 4K OLED 240Hz', battery: '99Wh / ~9hrs', weight: '2.8 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 5090 24GB' },
  { id: 'F40', name: 'Folio F40', price: 3199, originalPrice: null, tagline: 'The pinnacle of personal computing',        badge: 'New',   rating: 5.0, reviews: 21,  processor: 'Intel Core Ultra 9 285HX', ram: '128GB LPDDR5X', storage: '8TB NVMe RAID', display: '18" 8K OLED 120Hz', battery: '99Wh / ~10hrs', weight: '2.9 kg', os: 'Windows 11 Pro', gpu: 'NVIDIA RTX 5090 32GB' },
];

// ============================================================
// CART MANAGEMENT
// ============================================================
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('folio_cart') || '[]'); }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem('folio_cart', JSON.stringify(items));
    Cart.updateBadge();
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const existing = items.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { items.push({ id: productId, qty }); }
    Cart.save(items);
    showToast('✅', 'Added to cart successfully!');
  },
  remove(productId) {
    const items = Cart.get().filter(i => i.id !== productId);
    Cart.save(items);
  },
  updateQty(productId, qty) {
    const items = Cart.get();
    const item = items.find(i => i.id === productId);
    if (item) { item.qty = Math.max(1, qty); }
    Cart.save(items);
  },
  total() {
    return Cart.get().reduce((sum, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  updateBadge() {
    const count = Cart.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.classList.toggle('visible', count > 0);
    });
  }
};

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(icon, message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// ============================================================
// NAVIGATION — mobile toggle & active link
// ============================================================
function initNav() {
  Cart.updateBadge();

  // Highlight active page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // Mobile hamburger
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Search bar — redirect to products page
  const searchInput = document.querySelector('.nav-search input');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        window.location.href = `products.html?q=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// HOME PAGE — render featured products
// ============================================================
function initHomePage() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  // Pick 6 featured (variety of price ranges)
  const featured = [PRODUCTS[4], PRODUCTS[8], PRODUCTS[12], PRODUCTS[15], PRODUCTS[18], PRODUCTS[20]];
  grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
  grid.classList.add('stagger-children');
}

// ============================================================
// PRODUCTS PAGE — render all + filter/sort
// ============================================================
function initProductsPage() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  const sortEl = document.getElementById('sort-select');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  // Handle search query
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  if (query) {
    const searchInput = document.querySelector('.nav-search input');
    if (searchInput) searchInput.value = query;
  }

  let currentFilter = 'all';
  let currentSort   = 'default';

  function getFiltered() {
    let list = [...PRODUCTS];
    if (query) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (currentFilter === 'under1000') list = list.filter(p => p.price < 1000);
    else if (currentFilter === '1000-1500') list = list.filter(p => p.price >= 1000 && p.price <= 1500);
    else if (currentFilter === '1500-2000') list = list.filter(p => p.price > 1500 && p.price <= 2000);
    else if (currentFilter === 'over2000') list = list.filter(p => p.price > 2000);
    else if (currentFilter === 'sale') list = list.filter(p => p.originalPrice);
    else if (currentFilter === 'new') list = list.filter(p => p.badge === 'New');

    if (currentSort === 'price-asc')  list.sort((a,b) => a.price - b.price);
    if (currentSort === 'price-desc') list.sort((a,b) => b.price - a.price);
    if (currentSort === 'rating')     list.sort((a,b) => b.rating - a.rating);
    if (currentSort === 'reviews')    list.sort((a,b) => b.reviews - a.reviews);
    return list;
  }

  function render() {
    const list = getFiltered();
    if (countEl) countEl.textContent = `${list.length} products`;
    grid.innerHTML = list.length
      ? list.map(p => productCardHTML(p)).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:80px 0;color:var(--gray-mid);">
           <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
           <p>No products match your search.</p>
         </div>`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  if (sortEl) {
    sortEl.addEventListener('change', () => {
      currentSort = sortEl.value;
      render();
    });
  }

  render();
}

// ============================================================
// PRODUCT CARD HTML helper
// ============================================================
function productCardHTML(p) {
  const stars = starsHTML(p.rating);
  const originalPriceHTML = p.originalPrice
    ? `<span class="product-price-original">$${p.originalPrice.toLocaleString()}</span>` : '';
  const badgeHTML = p.badge
    ? `<div class="product-badge">${p.badge}</div>` : '';
  return `
    <div class="product-card" onclick="window.location='product.html?id=${p.id}'">
      <div class="product-img-wrap">
        ${badgeHTML}
        <div class="product-laptop-icon">💻</div>
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-tagline">${p.tagline}</div>
        <div class="product-rating">
          <div class="stars">${stars}</div>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price">$${p.price.toLocaleString()}${originalPriceHTML}</div>
        <div class="product-actions">
          <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">Details</a>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); Cart.add('${p.id}')">Add to Cart</button>
        </div>
      </div>
    </div>`;
}

function starsHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '★';
    else if (rating >= i - 0.5) html += '⭐';
    else html += '☆';
  }
  return html;
}

// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) {
    document.getElementById('detail-root').innerHTML = `
      <div style="text-align:center;padding:100px 32px;">
        <div style="font-size:3rem;margin-bottom:20px;">😕</div>
        <h2>Product not found</h2>
        <a href="products.html" class="btn btn-primary mt-24" style="display:inline-flex;margin-top:24px;">Browse Products</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — Folio Laptops`;

  const root = document.getElementById('detail-root');
  root.innerHTML = `
    <div class="product-detail-grid">
      <!-- Visual -->
      <div class="product-detail-visual">
        <div class="product-detail-img-card">
          <div class="product-detail-laptop-icon">💻</div>
        </div>
        <div class="detail-thumbnails">
          <div class="detail-thumb active">💻</div>
          <div class="detail-thumb">🖥️</div>
          <div class="detail-thumb">⌨️</div>
          <div class="detail-thumb">🔋</div>
        </div>
      </div>

      <!-- Info -->
      <div class="product-detail-info">
        <div class="detail-breadcrumb">
          <a href="index.html">Home</a><span>/</span>
          <a href="products.html">Products</a><span>/</span>
          <span style="color:var(--gray-mid)">${product.name}</span>
        </div>

        <div class="detail-model">${product.id} Series</div>
        <h1 class="detail-name">${product.name}</h1>

        <div class="detail-rating-row">
          <div class="stars" style="font-size:0.9rem">${starsHTML(product.rating)}</div>
          <span style="font-size:0.82rem;color:var(--gray-dark)">${product.rating} · ${product.reviews} reviews</span>
          ${product.badge ? `<span class="tag tag-accent">${product.badge}</span>` : ''}
          <span class="tag tag-success">In Stock</span>
        </div>

        <div class="detail-price-block">
          <div class="detail-price">$${product.price.toLocaleString()}
            ${product.originalPrice ? `<span style="font-size:1.1rem;color:var(--gray-dark);text-decoration:line-through;font-family:var(--font-body);margin-left:12px">$${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="detail-price-sub">Free shipping · 2-year warranty included</div>
        </div>

        <p class="detail-desc">${product.tagline}. The ${product.name} delivers exceptional performance engineered for professionals, students, and power users who demand the best. With its cutting-edge processor and premium display, every interaction feels effortlessly fast and visually stunning.</p>

        <div class="detail-specs">
          <div class="detail-specs-title">Specifications</div>
          <div class="specs-table">
            <div class="spec-row"><span class="spec-key">Processor</span><span class="spec-val">${product.processor}</span></div>
            <div class="spec-row"><span class="spec-key">RAM</span><span class="spec-val">${product.ram}</span></div>
            <div class="spec-row"><span class="spec-key">Storage</span><span class="spec-val">${product.storage}</span></div>
            <div class="spec-row"><span class="spec-key">Display</span><span class="spec-val">${product.display}</span></div>
            <div class="spec-row"><span class="spec-key">GPU</span><span class="spec-val">${product.gpu}</span></div>
            <div class="spec-row"><span class="spec-key">Battery</span><span class="spec-val">${product.battery}</span></div>
            <div class="spec-row"><span class="spec-key">Weight</span><span class="spec-val">${product.weight}</span></div>
            <div class="spec-row"><span class="spec-key">OS</span><span class="spec-val">${product.os}</span></div>
          </div>
        </div>

        <div class="detail-qty-row">
          <div class="qty-control">
            <button class="qty-btn" id="qty-minus">−</button>
            <span class="qty-value" id="qty-val">1</span>
            <button class="qty-btn" id="qty-plus">+</button>
          </div>
          <span style="font-size:0.82rem;color:var(--gray-dark)">Select quantity</span>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <button class="btn btn-primary btn-lg" id="add-to-cart-btn" style="flex:1;min-width:180px">
            🛒 Add to Cart
          </button>
          <a href="cart.html" class="btn btn-outline btn-lg">View Cart</a>
        </div>
      </div>
    </div>`;

  // Qty logic
  let qty = 1;
  const qtyVal = document.getElementById('qty-val');
  document.getElementById('qty-minus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyVal.textContent = qty; }
  });
  document.getElementById('qty-plus').addEventListener('click', () => {
    qty++;
    qtyVal.textContent = qty;
  });
  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    Cart.add(product.id, qty);
  });

  // Thumbnail click (decorative)
  document.querySelectorAll('.detail-thumb').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.detail-thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });
}

// ============================================================
// CART PAGE
// ============================================================
function initCartPage() {
  const root = document.getElementById('cart-root');
  if (!root) return;

  function render() {
    const items = Cart.get();
    if (items.length === 0) {
      root.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything yet.</p>
          <a href="products.html" class="btn btn-primary">Browse Products</a>
        </div>`;
      return;
    }

    const subtotal = Cart.total();
    const shipping = subtotal > 1500 ? 0 : 29;
    const tax      = Math.round(subtotal * 0.08);
    const total    = subtotal + shipping + tax;

    root.innerHTML = `
      <div class="cart-layout">
        <!-- Items -->
        <div>
          <div class="cart-items-panel">
            <div class="cart-panel-header">
              <span>Product</span><span>Price</span><span>Subtotal</span><span></span>
            </div>
            <div id="cart-items-list">
              ${items.map(item => {
                const p = PRODUCTS.find(x => x.id === item.id);
                if (!p) return '';
                return `
                  <div class="cart-item" id="cart-row-${p.id}">
                    <div class="cart-item-info">
                      <div class="cart-item-thumb">💻</div>
                      <div>
                        <div class="cart-item-name">${p.name}</div>
                        <div class="cart-item-model">${p.id} · ${p.processor.split(' ').slice(0,3).join(' ')}</div>
                        <div class="qty-control" style="margin-top:8px;display:inline-flex">
                          <button class="qty-btn" onclick="changeQty('${p.id}',-1)">−</button>
                          <span class="qty-value" id="qty-${p.id}">${item.qty}</span>
                          <button class="qty-btn" onclick="changeQty('${p.id}',1)">+</button>
                        </div>
                      </div>
                    </div>
                    <div class="cart-item-price">$${p.price.toLocaleString()}</div>
                    <div class="cart-item-total">$${(p.price * item.qty).toLocaleString()}</div>
                    <button class="cart-item-remove" onclick="removeFromCart('${p.id}')" title="Remove">✕</button>
                  </div>`;
              }).join('')}
            </div>
          </div>
          <div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap">
            <a href="products.html" class="btn btn-ghost btn-sm">← Continue Shopping</a>
            <button class="btn btn-danger btn-sm" onclick="clearCart()">Clear Cart</button>
          </div>
        </div>

        <!-- Summary -->
        <div class="cart-summary">
          <div class="cart-summary-title">Order Summary</div>
          <div class="summary-row"><span>Subtotal (${Cart.count()} items)</span><span>$${subtotal.toLocaleString()}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:var(--success)">Free</span>' : '$' + shipping}</span></div>
          <div class="summary-row"><span>Estimated Tax (8%)</span><span>$${tax.toLocaleString()}</span></div>
          <div class="summary-row total"><span>Total</span><span class="sum-val">$${total.toLocaleString()}</span></div>

          <div class="promo-input-group">
            <input class="promo-input" id="promo-input" placeholder="Promo code" />
            <button class="btn btn-ghost btn-sm" onclick="applyPromo()">Apply</button>
          </div>

          <button class="btn btn-primary btn-full btn-lg" onclick="checkout()">
            Proceed to Checkout →
          </button>
          <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:16px;font-size:0.75rem;color:var(--gray-dark)">
            🔒 Secure checkout — SSL encrypted
          </div>
        </div>
      </div>`;
  }

  window.changeQty = function(id, delta) {
    const items = Cart.get();
    const item = items.find(i => i.id === id);
    if (!item) return;
    const newQty = item.qty + delta;
    if (newQty < 1) { Cart.remove(id); render(); return; }
    Cart.updateQty(id, newQty);
    render();
  };

  window.removeFromCart = function(id) {
    Cart.remove(id);
    showToast('🗑️', 'Item removed from cart');
    render();
  };

  window.clearCart = function() {
    Cart.save([]);
    showToast('🗑️', 'Cart cleared');
    render();
  };

  window.applyPromo = function() {
    const code = document.getElementById('promo-input').value.trim().toUpperCase();
    if (code === 'FOLIO10') showToast('🎉', '10% discount applied!');
    else showToast('❌', 'Invalid promo code');
  };

  window.checkout = function() {
    showToast('🎉', 'Order placed! Thank you for your purchase.');
    setTimeout(() => { Cart.save([]); render(); }, 1500);
  };

  render();
}

// ============================================================
// LOGIN PAGE
// ============================================================
function initLoginPage() {
  const form = document.getElementById('login-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('#email').value;
    const pass  = form.querySelector('#password').value;
    if (!email || !pass) { showToast('⚠️', 'Please fill in all fields'); return; }
    showToast('✅', `Welcome back! Logging you in…`);
    setTimeout(() => window.location.href = 'index.html', 1500);
  });
}

// ============================================================
// INIT — detect page and run appropriate init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();

  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '')   initHomePage();
  if (page === 'products.html')               initProductsPage();
  if (page === 'product.html')                initProductDetailPage();
  if (page === 'cart.html')                   initCartPage();
  if (page === 'login.html')                  initLoginPage();
});