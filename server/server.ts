import { Server } from "./src";

const NodeServer = new Server()
NodeServer.listen();
NodeServer.listenSocket();
NodeServer.initSocket();
