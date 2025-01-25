const chatContainer = document.getElementById('chatContainer');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function appendImage(imgSrc, sender) {
    const messageElement = document.createElement('img');
    messageElement.classList.add('chat-message', sender);
    messageElement.src = imgSrc;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('send-input');
    const message = userInput.value.trim();

    if (message) {
        appendMessage(message, 'user');
        userInput.value = '';
        setTimeout(() => appendImage('./assets/thumbs-up.png', 'chatbot'), 1000);
    }
}

// document.getElementById('send-input').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         sendMessage();
//     }
// });
// document.getElementById('send-button').addEventListener('click', function(event) {
//     sendMessage();
// });


// function startDotAnimation() {
//     console.log("startDotAnimation");
//     const dots = window.document.getElementsByClassName("dot");
//     for (let i = 0; i < dots.length; i++) {
//         const dot = dots[i];
//         dot.offsetWidth;
//         dot.classList.add('animate__animated', 'animate__bounce');
//     };
// }
// function stopDotAnimation() {
//     console.log("stopDotAnimation");
//     const dots = window.document.getElementsByClassName("dot");
//     for (let i = 0; i < dots.length; i++) {
//         const dot = dots[i];
//         dot.offsetWidth;
//         dot.classList.remove('animate__animated', 'animate__bounce');
//     };
// }

// const animateLoopMS = 5000;

// // Inital animation
// setTimeout(() => {
//     startDotAnimation();
//     setTimeout(() => {
//         stopDotAnimation();
//     }, (animateLoopMS - 100))
// }, 10);

// // Loop animation
// setInterval(() => {
//     startDotAnimation();
//     setTimeout(() => {
//         stopDotAnimation();
//     }, (animateLoopMS - 100))
// }, animateLoopMS);