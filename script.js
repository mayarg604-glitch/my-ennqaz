const menuItems = [
  { id: 1, name: "بيتزا فودايس الخاصة", category: "pizza", image : "pp.jpg ", price: 30, badge: "الأكثر طلباً", desc: "بيتزا بعجينة طازجة مع صلصة خاصة وجبنة موزاريلا", rating: 5 },
  { id: 2, name: "بيتزا تن", category: "pizza", image : "pp3.jpg", price: 22, badge: "جديد", desc: "مزيج رائع من 4 أنواع جبن مختلفة", rating: 5 },
  { id: 3, name: "بيتزا خضار", category: "pizza", image: "pp2.jpg", price: 14, badge: null, desc: "خضار طازجة مع صلصة طماطم وجبن", rating: 4 },
  { id: 4, name: "باقيت دجاج", category: "pastry", image : "hh.jpg", price: 23 , badge: "مميز", desc:"وصف ", rating: 5 },
  { id: 5, name: " برجر اللحم", category: "pastry", image: "pr1.jpg", price: 12, badge: null, desc: "برجر اللحم المشوي", rating: 5 },
  { id: 6, name: "برجر فودايس", category: "pastry", image: "pr2.jpg", price: 15, badge: "عرض", desc: " برجر الدجاج", rating: 4 },
  { id: 7, name: "شورما اكسترا", category: "arabic", image: "s1.jpg", price: 13, badge: null, desc: "شورما الخاصة بـ فودايس", rating: 5 },
  { id: 8, name: "شاورما دبل فطيرة ", category: "arabic", image: "s2.jpg", price: 9, badge: "مميز", desc: "شاورما اللحم الطازج", rating: 5 },
  { id: 9, name: "شاورما جبنة", category: "arabic", image: "s3.jpg", price: 10, badge: null, desc: "شاورما الدجاح السحري", rating: 4 },
  { id: 10, name: "وجبة دجاج", category: "shaabi", image: "s4.jpg", price: 35, badge: "الأفضل", desc: "مشاوي دجاج مع الارز و السلطة", rating: 5 },
  { id: 11, name: "وجبة شيش", category: "shaabi", image: "s5.jpg", price: 75, badge: null, desc: " مشاوي لحم مع الارز و السلطة", rating: 4 },
  { id: 12, name: "تشاركة فودايس", category: "shaabi", image: "s6.jpg", price: 95, badge: "للمجموعة", desc: "طبق مشترك يكفي 3-4 أشخاص بكل الأصناف", rating: 5 },
  { id: 13, name: "مشروب ببسي", category: "drink", image: "pip.jpg", price: 5, badge: "المفضل", desc: "مشروب بارد ومنعش", rating: 5},
  { id: 13, name: "مشروب كولا", category: "drink", image: "co.jpg", price: 5 ,badge: null, desc: "مشروب بارد ومنعش", rating: 3},
  { id: 13, name: "مشروب ماريندا", category: "drink", image: "ma.jpg", price: 5 ,badge: null, desc: "مشروب بارد ومنعش", rating: 4},
  { id: 13, name: "مشروب FOR YOU", category: "drink", image: "ta.jpg", price: 5,badge: null, desc: "مشروب بارد ومنعش", rating: 1},
];
// ===== CART =====
let cart = [];

// ===== CHATBOT RESPONSES =====
const botResponses = {
  "مرحبا": "أهلاً وسهلاً! 👋 كيف أقدر أساعدك؟",
  "اهلا": "أهلاً بك في فودايس! 🍕",
  "السلام عليكم": "وعليكم السلام ورحمة الله! 😊",
  "المنيو": "يمكنك مشاهدة المنيو الكامل في قسم 'منيونا' 🍽️",
  "الاسعار": "الأسعار تبدأ من 150  وتجد كل التفاصيل في المنيو 💰",
  "التوصيل": "نوصلك في أقل من 30 دقيقة! 🚀",
  "الوقت": "نعمل من 8 صباحاً حتى منتصف الليل ⏰",
  "بيتزا": "عندنا تشكيلة رائعة من البيتزا! 🍕 شوفها في المنيو",
  "معجنات": "معجناتنا طازجة يومياً! 🥐",
  "default": "شكراً على سؤالك! 😊 للمزيد تواصل معنا على الرقم الموجود في قسم التواصل"
};

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initAnimations();
  }, 2200);
});
// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initAnimations();
  }, 2200);
});

// ===== NAVBAR =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    if (window.scrollY > 400) scrollTop.classList.add('visible');
    else scrollTop.classList.remove('visible');
  }
  revealElements();
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});
// ===== DARK / LIGHT MODE =====
const themeBtn = document.getElementById('themeBtn');
let isLight = false;

themeBtn.addEventListener('click', () => {
  isLight = !isLight;
  document.body.classList.toggle('light-mode');
  themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.5 });

const heroSection = document.getElementById('home');
if (heroSection) heroObserver.observe(heroSection);

// ===== RENDER MENU =====
function renderStars(rating) { return '⭐'.repeat(rating); }

function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  if (items.length === 0) {
    grid.innerHTML = '<div class="no-results">😔 لم يتم العثور على نتائج</div>';
    return;
  }
 grid.innerHTML = items.map(item => `
    <div class="menu-card reveal" data-id="${item.id}">
      <div class="card-img">
  ${item.image ?` <img src="${item.image}" alt="${item.name}">` : item.emoji}
  ${item.badge ?` <div class="card-badge">${item.badge}</div> `: ''}
</div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-stars">${renderStars(item.rating)}</div>
        <div class="card-footer">
          <span class="card-price">${item.price} LD </span>
          <button class="add-to-cart" onclick="addToCart(${item.id})">+ أضف</button>
        </div>
      </div>
    </div>
  `).join('');
  revealElements();
}

renderMenu(menuItems);

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderMenu(filter === 'all' ? menuItems : menuItems.filter(i => i.category === filter));
  });
});

// ===== SEARCH =====
document.getElementById('searchInput')
addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  renderMenu(menuItems.filter(item =>
    item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
  ));
});

// ===== CART FUNCTIONS =====
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCart();
  showToast(`✅ تمت إضافة ${item.name}`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCart();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `${total} LD`;

const cartItems = document.getElementById('cartItems');
  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="empty-cart"><span>🛒</span><p>سلتك فارغة</p></div>`;
    return;
  }
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-image" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.price * item.qty} LD </p>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="delete-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

// ===== OPEN / CLOSE CART =====
document.getElementById('cartBtn').addEventListener('click', () => {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
});

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
}

document.getElementById('closeCart').addEventListener('click', closeCart);
// زر إتمام الطلب يفتح الفورم
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return showToast('السلة فارغة!');
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('orderModal').classList.add('active');
});

// إغلاق الموديل
document.getElementById('closeOrder').addEventListener('click', () => {
  document.getElementById('orderModal').classList.remove('active');
});

document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('popupOverlay').classList.remove('active');
});

// ===== TESTIMONIALS =====
const testimonials = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('testimonialDots');
let currentSlide = 0;

testimonials.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  testimonials[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
  currentSlide = index;
  testimonials[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

setInterval(() => goToSlide((currentSlide + 1) % testimonials.length), 4000);
setInterval(() => goToSlide((currentSlide + 1) % testimonials.length), 4000);

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('✅ تم إرسال رسالتك بنجاح!');
  e.target.reset();
});

// ===== CHATBOT =====
document.
getElementById('chatbotToggle').addEventListener('click', () => {
  document.getElementById('chatbot').classList.toggle('open');
});

document.getElementById('closeChatbot').addEventListener('click', () => {
  document.getElementById('chatbot').classList.remove('open');
});

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('chatMessages');

  const userDiv = document.createElement('div');
  userDiv.classList.add('user-message');
  userDiv.textContent = msg;
  messages.appendChild(userDiv);

  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.classList.add('bot-message');
    const key = Object.keys(botResponses).find(k => msg.includes(k));
    botDiv.textContent = botResponses[key] || botResponses['default'];
    messages.appendChild(botDiv);
    messages.scrollTop = messages.scrollHeight;
  }, 600);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}
document.getElementById('sendChat').addEventListener('click', sendChatMessage);
document.getElementById('chatInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendChatMessage();
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.classList.add('scroll-top');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(scrollTopBtn);

// ===== REVEAL ON SCROLL =====
function revealElements() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}

function initAnimations() {
  document.querySelectorAll('.feature-card, .about-content, .contact-item, .section-header')
    .forEach(el => el.classList.add('reveal'));
  revealElements();
}
// ===== TOAST =====
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
// ===== ORDER WHATSAPP ===== // ← أضفه هنا
document.getElementById('orderForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('orderName').value.trim();
  const phone   = document.getElementById('orderPhone').value.trim();
  const address = document.getElementById('orderAddress').value.trim();
  const notes   = document.getElementById('orderNotes').value.trim();
  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let message = `🍕 *طلب جديد - فودايس*\n\n`;
  message += `👤 *الاسم:* ${name}\n`;
  message += `📞 *الهاتف:* ${phone}\n`;
  message += `📍 *العنوان:* ${address}\n`;
  message += `\n🛒 *الطلب:*\n`;

  cart.forEach(item => {
    message += `• ${item.name} × ${item.qty} = ${item.price * item.qty} دج\n`;
  });

  message += `\n💰 *المجموع: ${total} دج*`;

  if (notes) {
    message += `\n📝 *ملاحظات:* ${notes}`;
  }

  const restaurantPhone = '213XXXXXXXXX'; // ← غيّر برقمك
  const url = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  document.getElementById('orderModal').classList.remove('active');
  cart = [];
  updateCart();
  e.target.reset();
  showToast('✅ تم إرسال طلبك على واتساب!');
});
