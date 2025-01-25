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
    }

    appendInputMessage(text) {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-end", "mb-4", "pt-1")
        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "me-3", "mb-1", "rounded-3", "bg-body-tertiary")
        inputInnerText.textContent = text;
        
        this.messagesBody.appendChild(inputDiv);
        inputDiv.appendChild(inputInnerText);
    }

    appendResponseMessage(text) {
        const dad = this.newDadName();
        this.messagesBody.appendChild(dad);

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "ms-3", "me-3", "mb-1", "rounded-3", "bg-body-tertiary")
        inputInnerText.textContent = text;
        
        this.messagesBody.appendChild(inputDiv);
        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
    }

    appendThumbSmall() {
        const dad = this.newDadName();
        this.messagesBody.appendChild(dad);

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "pt-0", "ms-3", "me-3", "mb-1", "rounded-3")
        
        const thumbImg = document.createElement("img");
        thumbImg.src = "assets/thumbs-up.png";
        thumbImg.classList.add("thumbs-up-small");

        this.messagesBody.appendChild(inputDiv);
        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
        inputInnerText.appendChild(thumbImg);
    }
    appendThumbLarge() {
        const dad = this.newDadName();
        this.messagesBody.appendChild(dad);

        const inputDiv = document.createElement("div");
        inputDiv.classList.add("d-flex", "flex-row", "justify-content-start")
        
        const dadImg = this.newDadImage();

        const inputInnerText = document.createElement("p");
        inputInnerText.classList.add("small", "p-2", "pt-0", "ms-3", "me-3", "mb-1", "rounded-3")
        
        const thumbImg = document.createElement("img");
        thumbImg.src = "assets/thumbs-up.png";
        thumbImg.classList.add("thumbs-up-big");

        this.messagesBody.appendChild(inputDiv);
        inputDiv.appendChild(dadImg);
        inputDiv.appendChild(inputInnerText);
        inputInnerText.appendChild(thumbImg);
    }
    appendTyping() {
        const dad = this.newDadName();
        this.messagesBody.appendChild(dad);

        const typingDiv = document.createElement("div");
        typingDiv.classList.add("d-flex", "flex-row", "justify-content-start")

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
}

document.addEventListener("DOMContentLoaded", function() {
    var messagesBody = document.getElementById("messages-body")
    var messageFactory = new MessageFactory(messagesBody);

    window.messageFactory = messageFactory;
});
