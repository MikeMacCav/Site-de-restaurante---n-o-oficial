// scripts.js
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Captura os dados do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Aqui você poderia adicionar lógica para enviar os dados para um servidor

    // Exibe a mensagem de confirmação
    document.getElementById('confirmationMessage').style.display = 'block';

    // Limpa o formulário
    document.getElementById('reservationForm').reset();
});