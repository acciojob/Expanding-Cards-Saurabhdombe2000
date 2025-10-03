const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // remove active from all
    panels.forEach((p) => p.classList.remove("active"));
    // add active to clicked
    panel.classList.add("active");
  });
});
