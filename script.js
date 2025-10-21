document.addEventListener('DOMContentLoaded', function() {
  try {
    const btn = document.getElementById('toggleBtn');
    const msg = document.getElementById('message');
    if (!btn || !msg) return;
    btn.addEventListener('click', function() {
      if (msg.style.display === 'none') {
        msg.style.display = '';
      } else {
        msg.style.display = 'none';
      }
    });
  } catch (e) {
    console.error('Error initializing app:', e);
  }
});