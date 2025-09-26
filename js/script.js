// Apenas um exemplo de interatividade inicial
document.querySelectorAll('.portal-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Em breve este portal abrirá a página específica!");
  });
});

