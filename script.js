// Select all panels
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Remove active from all panels
    panels.forEach(p => p.classList.remove('active'));

    // Add active only to clicked panel
    panel.classList.add('active');
  });
});