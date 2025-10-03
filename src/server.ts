import http from "http";
import app from "./app";
import config from "./config/config";
import { initSocket } from "./config/socket";
import { initChatSockets } from "./sockets/chatSocket";

const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

// Initialize chat-specific sockets
initChatSockets();

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
