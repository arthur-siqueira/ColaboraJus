
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const open = menu.style.display === 'flex';
        menu.style.display = open ? 'none' : 'flex';
        menu.style.flexDirection = 'column';
        hamburger.setAttribute('aria-expanded', String(!open));
      });
    }

    document.getElementById('year').textContent = new Date().getFullYear();

    const links = document.querySelectorAll('nav a[href^="#"]');
    const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id;
        const link = document.querySelector(`nav a[href='${id}']`);
        if (entry.isIntersecting) {
          links.forEach(l=>l.classList.remove('active'));
          link?.classList.add('active');
        }
      });
    }, { rootMargin: '-50% 0px -45% 0px', threshold: 0 });
    sections.forEach(s => observer.observe(s));


    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  