// ===== FILTROS =====
function setFilter(btn) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
  });

  btn.classList.add('active');
}


// ===== ANIMAÇÃO AO SCROLL (reveal) =====
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {

    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (index * 0.08) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.1
});

revealEls.forEach(el => observer.observe(el));


// ===== BUSCA (extra opcional 🔥) =====
const searchInput = document.querySelector('.search-bar input');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}