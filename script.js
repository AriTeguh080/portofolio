function showContent(page) {
  // Sembunyikan semua section dulu
  document.querySelectorAll('.content-box').forEach(section => {
    section.style.display = 'none';
  });

  // Tampilkan section yang dipilih
  document.getElementById(page).style.display = 'block';
}
