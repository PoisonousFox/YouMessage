const root = document.getElementById('root');

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
        <input type="text" id="message-input" placeholder="Type a message" />
        <button onclick="sendMessage()">Send</button>
      </div>
    </div>
  `;
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Add authentication logic here
  renderChat();
}

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Add registration logic here
  renderChat();
}

function sendMessage() {
  const message = document.getElementById('message-input').value;
  const chatContainer = document.getElementById('chat-container');
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  document.getElementById('message-input').value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

renderLogin();