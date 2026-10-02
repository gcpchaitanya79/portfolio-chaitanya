// Apply the saved theme before first paint to avoid a flash.
try {
  var t = localStorage.getItem('theme');
  if (t) document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
