const chatContainer = document.getElementById('chatContainer');

class MessageFactory {
    constructor(messagesBody) {
        this.messagesBody = messagesBody;
    }

    clear() {
        while (this.messagesBody.firstChild) {
            this.messagesBody.removeChild(this.messagesBody.firstChild);
        }
    }

    appendTimestamp(text) {
        var div = document.createElement("div");
        div.classList.add("text-center")
        var innerText = document.createElement("p");
        innerText.classList.add("small", "mb-1", "text-muted")
        innerText.textContent = text;
        
        this.messagesBody.appendChild(div);
        div.appendChild(innerText);
        
        this.scrollToBottom();
    }

    appendInputMessage(text) {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-end", "mb-4", "pt-1", "animate__animated", "animate__fadeInUp")
        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "me-3", "mb-1", "rounded-3", "bg-body-tertiary")
        inputInnerText.textContent = text;
        
        this.messagesBody.appendChild(inputDiv);
        inputDiv.appendChild(inputInnerText);
        
        this.scrollToBottom();
    }

    appendResponseMessage(text, isTyping, typingDuration, divsToReplace) {
        if(isTyping)
        {
            const typingDivs = this.appendTyping();
            setTimeout(() => {
                this.appendResponseMessage(text, false, 0, typingDivs);
            }, typingDuration);
            return;
        }

        const dadName = this.newDadName();

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "ms-3", "me-3", "mb-1", "rounded-3", "bg-body-tertiary", "animate__animated", "animate__fadeIn")
        inputInnerText.textContent = text;
        
        if(divsToReplace != null)
        {
            var nextSibling = divsToReplace.at(-1);
            this.messagesBody.insertBefore(dadName, nextSibling);
            this.messagesBody.insertBefore(inputDiv, nextSibling);
            for(let i = 0; i < divsToReplace.length; i++) {
                this.messagesBody.removeChild(divsToReplace[i]);
            }
        }
        else
        {
            this.messagesBody.appendChild(dadName);
            this.messagesBody.appendChild(inputDiv);
        }
        
        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
        
        this.scrollToBottom();
    }

    appendThumbSmall(isTyping, typingDuration, divsToReplace) {
        if(isTyping)
        {
            const typingDivs = this.appendTyping();
            setTimeout(() => {
                this.appendThumbSmall(false, 0, typingDivs);
            }, typingDuration);
            return;
        }

        const dadName = this.newDadName();

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "pt-0", "ms-3", "me-3", "mb-1", "rounded-3", "animate__animated", "animate__bounceIn")
        
        const thumbImg = document.createElement("img");
        thumbImg.src = "assets/thumbs-up.png";
        thumbImg.classList.add("thumbs-up-small");


        if(divsToReplace != null)
        {
            var nextSibling = divsToReplace.at(-1);
            this.messagesBody.insertBefore(dadName, nextSibling);
            this.messagesBody.insertBefore(inputDiv, nextSibling);
            for(let i = 0; i < divsToReplace.length; i++) {
                this.messagesBody.removeChild(divsToReplace[i]);
            }
        }
        else
        {
            this.messagesBody.appendChild(dadName);
            this.messagesBody.appendChild(inputDiv);
        }

        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
        inputInnerText.appendChild(thumbImg);
        
        this.scrollToBottom();
    }

    appendThumbLarge(isTyping, typingDuration, divsToReplace)  {
        if(isTyping)
        {
            const typingDivs = this.appendTyping();
            setTimeout(() => {
                this.appendThumbLarge(false, 0, typingDivs);
            }, typingDuration);
            return;
        }

        const dadName = this.newDadName();

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "pt-0", "ms-3", "me-3", "mb-1", "rounded-3", "animate__animated", "animate__jackInTheBox")
        
        const thumbImg = document.createElement("img");
        thumbImg.src = "assets/thumbs-up.png";
        thumbImg.classList.add("thumbs-up-big");
        
        if(divsToReplace != null)
        {
            var nextSibling = divsToReplace.at(-1);
            this.messagesBody.insertBefore(dadName, nextSibling);
            this.messagesBody.insertBefore(inputDiv, nextSibling);
            for(let i = 0; i < divsToReplace.length; i++) {
                this.messagesBody.removeChild(divsToReplace[i]);
            }
        }
        else
        {
            this.messagesBody.appendChild(dadName);
            this.messagesBody.appendChild(inputDiv);
        }

        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
        inputInnerText.appendChild(thumbImg);
        
        this.scrollToBottom();
    }

    appendTyping() {
        const dadName = this.newDadName();
        dadName.classList.add("animate__animated", "animate__fadeInLeft");
        this.messagesBody.appendChild(dadName);

        const typingDiv = document.createElement("div");
        typingDiv.classList.add("d-flex", "flex-row", "justify-content-start", "animate__animated", "animate__slideInLeft")

        const dadImg = this.newDadImage();

        const typingInner = document.createElement("p");
        typingInner.classList.add("small", "p-2", "ms-3", "mb-3", "rounded-3", "bg-body-tertiary")
        
        const dotsDiv = document.createElement("div");
        dotsDiv.classList.add("dots");

        const dot1 = document.createElement("div");
        dot1.classList.add("dot", "dot-1", "animate__animated", "animate__bounce");

        const dot2 = document.createElement("div");
        dot2.classList.add("dot", "dot-2", "animate__animated", "animate__bounce");

        const dot3 = document.createElement("div");
        dot3.classList.add("dot", "dot-3", "animate__animated", "animate__bounce");

        this.messagesBody.appendChild(typingDiv);
        typingDiv.appendChild(dadImg);
        typingDiv.appendChild(typingInner);
        typingInner.appendChild(dotsDiv);
        dotsDiv.appendChild(dot1);
        dotsDiv.appendChild(dot2);
        dotsDiv.appendChild(dot3);
        
        this.scrollToBottom();

        return [dadName, typingDiv];
    }

    newDadName() {
        const dadDiv = document.createElement("div");
        const dadInnerText = document.createElement("p");
        dadInnerText.classList.add("small", "mb-1")
        dadInnerText.textContent = "Dad";

        dadDiv.appendChild(dadInnerText);
        return dadDiv;
    }

    newDadImage() {
        var inputInnerImg = document.createElement("img");
        inputInnerImg.src = "assets/dadsgpt-icon.webp";
        inputInnerImg.style = "width: 45px; height: 100%;";
        return inputInnerImg;
    }

    scrollToBottom() {
        this.messagesBody.scrollTop = this.messagesBody.scrollHeight;

        // hacking fix for some animations
        setTimeout(() => this.messagesBody.scrollTop = this.messagesBody.scrollHeight, 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var messagesBody = document.getElementById("messages-body")
    var messageFactory = new MessageFactory(messagesBody);

    messageFactory.clear();

    window.messageFactory = messageFactory;

    function sendMessage() {
        const userInput = document.getElementById('send-input');
        const message = userInput.value.trim();
        if (message) {
            messageFactory.appendInputMessage(message);
            userInput.value = '';

            var delay = 2500; // play animation once

            setTimeout(() => {
                var randResponsePrecent = Math.floor(Math.random() * 100);
                if (randResponsePrecent < 5) {
                    messageFactory.appendThumbLarge(true, delay);
                } else if (randResponsePrecent < 10) {
                    messageFactory.appendResponseMessage("?", true, delay);
                } 
                else if (randResponsePrecent < 15) {
                    messageFactory.appendResponseMessage("OK", true, delay);
                } else {
                    messageFactory.appendThumbSmall(true, delay);
                }
            }, 1000);
        }
    }

    document.getElementById('send-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
    document.getElementById('send-button').addEventListener('click', function(event) {
        sendMessage();
    });

});
