
// const chatID = '1113713328';
// function sendTelegramMessage(message) {
//     fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             chat_id: chatID,
//             text: message
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Message sent successfully:', data);
//     })
// }
// function klick_button() {
//     const name = document.getElementById('name');
//     const info = document.getElementById('info');
//     sendTelegramMessage(`Ich heiße ${name.value}`);
//     setTimeout(function() {
//         sendTelegramMessage(`Informationen: ${info.value}`);
//         name.value = '';
//         info.value = '';
//     }, 1000);

// }