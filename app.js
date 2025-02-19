const root = document.getElementById('root');
let currentUser = null;

function renderLogin() {
  root.innerHTML = `
    <div class="container">
      <h2>Login</h2>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button onclick="login()">Login</button>
      <p>Don't have an account? <a href="#" onclick="renderRegister()">Register</a></p>
    </div>
  `;
}

function renderRegister() {
  root.innerHTML = `
    <div class="container">
      <h2>Register</h2>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button onclick="register()">Register</button>
      <p>Already have an account? <a href="#" onclick="renderLogin()">Login</a></p>
    </div>
  `;
}

function renderChat() {
  root.innerHTML = `
    <div class="container">
      <h2>Chat</h2>
      <div class="chat-container" id="chat-container"></div>
      <div class="chat-input-container">
        <textarea id="message-input" placeholder="Type a message"></textarea>
        <button onclick="sendMessage()">Send</button>
      </div>
    </div>
  `;
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Fake authentication logic for demonstration
  if (username && password) {
    currentUser = username;
    renderChat();
  }
}

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Fake registration logic for demonstration
  if (username && password) {
    currentUser = username;
    renderChat();
  }
}

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  const chatContainer = document.getElementById('chat-container');
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `<div class="sender">${currentUser}</div>${message}`;
  chatContainer.appendChild(messageElement);
  messageInput.value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

renderLogin();
