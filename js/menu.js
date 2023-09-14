(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    if (!expanded) {
      document.body.style.overflowY = "hidden";
    }
  });

  document.querySelectorAll("[data-menu]").forEach((n) =>
    n.addEventListener("click", () => {
      mobileMenuRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      document.body.style.overflowY = "visible";
    })
  );

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    menuBtnRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", false);
  });
})();
