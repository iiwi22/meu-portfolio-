// Transição suave entre páginas
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href.includes(".html")) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});

// Validação simples do formulário
const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}
