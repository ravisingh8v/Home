// importing socket.io from server  
const socket = io();

// getting all html feild here 
let textArea = document.querySelector("#textArea");
let messageArea = document.querySelector(".message-area");
// creating promp message for getting username
var username;
do {
    username = prompt("Please Enter Your Name :)")
} while (!username);

// here we call keyup event for when we press enter key and message send
textArea.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        // here we call sendMessage func for textAreavalue after clicking on enter button 
        sendMessage(e.target.value);
    }
});

// here we create sendMessage function 
function sendMessage(message) {
    let msg = {
        user: username,
        message: message.trim()
    }

    // Append
    appendMessage(msg, "outgoing");
textArea.value = ''
scrollToBottom()

    // sending to the server 

    socket.emit('message', msg);

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement("div");
    let className = type;

    mainDiv.classList.add('message', className);

    let markup = `
<h4>${msg.user}</h4>
<p>${msg.message}</p>
`


    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}


// msg recieve 

socket.on('message',(msg)=>{
appendMessage(msg,"incoming");
textArea.value = ''
scrollToBottom()
})


function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}