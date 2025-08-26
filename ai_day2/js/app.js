document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');

    if (chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const userInput = messageInput.value.trim();
            if (userInput === '') return;

            // 사용자 메시지 추가
            addMessage(userInput, 'user');
            messageInput.value = '';

            // 로딩 인디케이터와 함께 봇 메시지 추가
            const botMessageElement = addMessage('', 'bot', true);

            // API 응답 시뮬레이션
            setTimeout(() => {
                const botResponse = 'API Key가 없습니다.';
                updateBotMessage(botMessageElement, botResponse);
            }, 1000);
        });
    }

    function addMessage(text, sender, isLoading = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        if (isLoading) {
            const spinner = document.createElement('div');
            spinner.classList.add('spinner-border', 'text-primary');
            spinner.setAttribute('role', 'status');
            messageElement.appendChild(spinner);
        } else {
            messageElement.textContent = text;
        }

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        return messageElement;
    }

    function updateBotMessage(messageElement, text) {
        // 스피너 제거
        const spinner = messageElement.querySelector('.spinner-border');
        if (spinner) {
            messageElement.removeChild(spinner);
        }
        // 텍스트 추가
        messageElement.textContent = text;
    }
});
