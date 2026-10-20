const fieldsToSave = ["username", "email", "phone", "friend"];

// Au chargement : on remet les valeurs sauvegardées
fieldsToSave.forEach((id) => {
  const savedValue = localStorage.getItem(id);
  if (savedValue !== null) {
    document.getElementById(id).value = savedValue;
  }
});

// À chaque frappe : on sauvegarde
fieldsToSave.forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener("input", () => {
    localStorage.setItem(id, input.value);
  });
});

// Boutons "Copier"
document.querySelectorAll(".btn-copy").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.target);
    navigator.clipboard.writeText(input.value);

    const originalText = button.textContent;
    button.textContent = "Copié !";
    button.classList.add("copied");

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 1500);
  });
});