document.addEventListener("DOMContentLoaded", () => {
  // Animação de fade-in para elementos iniciais
  const fadeInElements = document.querySelectorAll(".fade-in");
  fadeInElements.forEach((el) => {
    el.classList.add("active");
  });

  // Animação de slide-up ao rolar a tela
  const slideUpElements = document.querySelectorAll(".slide-up");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% do elemento visível para acionar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Para animar apenas uma vez
      }
    });
  }, observerOptions);

  slideUpElements.forEach((el) => {
    observer.observe(el);
  });

  // Animação do header ao rolar
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Transparente com leve fundo escuro ao rolar
      header.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    } else {
      header.style.backgroundColor = "transparent"; // Totalmente transparente no topo
      header.style.boxShadow = "none"; // Sem sombra no topo
    }
  });

  // Lógica para o menu lateral (hamburguer)
  const hamburger = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  const sidebarLinks = document.querySelectorAll(".sidebar-links a");

  hamburger.addEventListener("click", () => {
    sidebar.style.width = "250px"; // Abre o menu lateral
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.width = "0"; // Fecha o menu lateral
  });

  // Fecha o menu lateral ao clicar em um link
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.style.width = "0";
    });
  });
});
