(() => {
  "use strict";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Search and category filtering enhance the article index without hiding content by default.
  const search = document.querySelector("#article-search");
  const cards = [...document.querySelectorAll(".post-card")];
  const filters = [...document.querySelectorAll("[data-filter]")];
  const emptyState = document.querySelector("#empty-state");
  let activeFilter = "all";

  function filterArticles() {
    if (!cards.length) return;
    const term = (search?.value || "").trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const category = (card.dataset.category || "").split(/\s+/);
      const haystack = `${card.dataset.search || ""} ${card.textContent}`.toLocaleLowerCase();
      const matches = (activeFilter === "all" || category.includes(activeFilter)) && (!term || haystack.includes(term));
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  search?.addEventListener("input", filterArticles);
  filters.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    filterArticles();
  }));

  // A slim reading indicator appears on long-form article pages.
  const article = document.querySelector("main article");
  if (article) {
    const progress = document.createElement("div");
    progress.className = "reading-progress";
    progress.setAttribute("role", "progressbar");
    progress.setAttribute("aria-label", "Reading progress");
    progress.setAttribute("aria-valuemin", "0");
    progress.setAttribute("aria-valuemax", "100");
    const fill = document.createElement("span");
    progress.append(fill);
    document.body.prepend(progress);
    let ticking = false;
    const update = () => {
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const travelled = Math.max(0, Math.min(total, -rect.top));
      const value = total > 0 ? Math.round((travelled / total) * 100) : 100;
      fill.style.width = `${value}%`;
      progress.setAttribute("aria-valuenow", String(value));
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  // Progressive reveal: content remains visible if JavaScript or observation is unavailable.
  const revealTargets = document.querySelectorAll(".hero-copy,.hero-art,.section-heading,.article-tools,.post-card,.about-strip,.article-head,.toc,.prose h2,.author-box,.related,.page-body h1");
  if (!reducedMotion && "IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach((node, index) => {
      node.dataset.reveal = "";
      node.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    });
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach(node => observer.observe(node));
  }
})();