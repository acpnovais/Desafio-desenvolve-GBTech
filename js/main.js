function enviarForm() {
  if (!document.formulario.email.value.includes("@")) {
    alert("Erro no envio: Endereço de e-mail inválido");
  } else if (document.formulario.mensagem.value.length === 0) {
    alert("Erro no envio: Insira uma mensagem");
  } else {
    let valor = document.getElementById("email").value;
    let user = valor.split("@");
    alert(`Obrigado pelo contato, ${user[0]}!`);
  }
}
