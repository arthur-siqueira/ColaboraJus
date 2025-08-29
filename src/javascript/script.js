// ========================
// MENU ATIVO AO ROLAR A PÁGINA
// ========================
const links = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = '#' + entry.target.id;
    const link = document.querySelector(`nav a[href='${id}']`);
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -45% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));

// ========================
// MENU RESPONSIVO
// ========================
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ========================
// WHATSAPP POPUP
// ========================

// Número do WhatsApp (com DDI + DDD)
const whatsappNumber = "558796133033";

// Seletores
const btnClosePopup = document.querySelector('.closePopup');
const btnOpenPopup = document.getElementById('whats-openPopup'); // botão redondo verde
const popup = document.querySelector('.popup-whatsapp');
const sendBtn = document.getElementById('send-btn');

// Abrir popup ao clicar no botão verde
if (btnOpenPopup && popup) {
  btnOpenPopup.addEventListener("click", () => {
    popup.classList.add('is-active-whatsapp-popup');
  });
}

// Fechar popup ao clicar no X
if (btnClosePopup && popup) {
  btnClosePopup.addEventListener("click", () => {
    popup.classList.remove('is-active-whatsapp-popup');
  });
}

// Enviar mensagem para WhatsApp Web
if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${relmsg}`, '_blank');
  });
}


// Abrir popup automaticamente após 3 segundos (opcional)
setTimeout(() => {
  if (popup) {
    popup.classList.toggle('is-active-whatsapp-popup');
  }
}, 3000);
