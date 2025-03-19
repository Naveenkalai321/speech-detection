// Check if Speech Recognition API is supported
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

const startButton = document.getElementById('start-btn');
const speechText = document.getElementById('speech-text');

// Event listener for clicking the mic button
startButton.addEventListener('click', () => {
    speechText.textContent = "Listening...";
    recognition.start();
});

// Event when speech is recognized
recognition.addEventListener('result', (e) => {
    const transcript = e.results[0][0].transcript;
    speechText.textContent = transcript;

    // Convert text to speech
    speakText(transcript);
});

// Restart recognition when it ends
recognition.addEventListener('end', () => {
    speechText.textContent += " 🎤";
});

// Text-to-Speech (TTS) Function
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
