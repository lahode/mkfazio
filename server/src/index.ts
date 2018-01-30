import * as express from 'express';
import * as http  from 'http';
import * as https from 'https';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as morgan from 'morgan';
import * as fs from 'fs-extra';
import * as socketIo from 'socket.io';

import { APIRoutes }  from "./modules/routes/api.route";
import { log }  from "./modules/log";
import { CONFIG } from "./config";

export class Server {

  private app:express.Application;
  private serverHttp:http.Server;
  private serverHttps:https.Server;
  private root:string;
  private io: SocketIO.Server;
  private port:number|string|boolean;

  constructor() {
    this.app = express();
    this.config();
    this.middleware();
    this.defaultServerRoute();
    this.app.use( new APIRoutes().routes());
    this.createServer();
  }

  // Set configuration parameters.
  private config():void {
    // define the app.server endpoints folder.
    this.root = path.join(__dirname, '../api')
    // define prot & normalize value.
    this.port = this.normalizePort(process.env.PORT|| CONFIG.PORT);
    // use the root path defined.
    this.app.use(express.static(this.root))
  }

  // Configure middleware.
  private middleware() {
    // Set cors Options.
    const corsOptions = {
      origin: CONFIG.FRONTEND,
      credentials: true,
    }

    this.app
      // use bodyParser middleware to decode json parameters.
      .use(bodyParser.json())
      .use(bodyParser.json({type: 'application/vnd.api+json'}))
      // use bodyParser middleware to decode urlencoded parameters.
      .use(bodyParser.urlencoded({extended: false}))
      // use morgan to log requests to the console.
      .use(morgan('dev'))
      // cors domaine origin.
      .use(cors(corsOptions))
  }

  // Default server route.
  private defaultServerRoute() {
    this.app.get( '/', log, (req, res) => {
      res.json({
        code: 200,
        message: `master-application server work 👌`
      });
    });
  }

  // React on errors.
  private onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') throw error;
    let bind:string = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
    switch(error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  // Normalize port entry.
  normalizePort(val: number|string): number|string|boolean {
    let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
  }

  // Create server with HTTPS or HTTP depending on the config.
  private createServer(): void {
    if (CONFIG.SECURITY.HTTPS) {
      this.serverHttps = https.createServer({
        key: fs.readFileSync(CONFIG.SECURITY.KEY),
        cert: fs.readFileSync(CONFIG.SECURITY.CERT)
      }, this.app);
      this.serverHttps.on('error', this.onError);
    }
    else {
      this.serverHttp = http.createServer(this.app);
      this.serverHttp.on('error', this.onError);
    }
  }

  // Initialize socket.io
  listenSocket(): void {
    this.io = socketIo(this.serverHttps || this.serverHttp, {origins:'*:*', serveClient: false});
  }

  // Listen the
  listen():void {
    if (CONFIG.SECURITY.HTTPS) {
      // Launch an HTTPS Server.
      this.serverHttps.listen(this.port, () => console.log("HTTPS Secure Server running at https://localhost:" + this.serverHttps.address().port));
    }
    else {
      // Launch an HTTP Server.
      this.serverHttp.listen(this.port, () => console.log("HTTP Server running at http://localhost:" + this.serverHttp.address().port));
    }
  }

  // Initialize socket.io
  initSocket() {
    // Connection
    this.io.sockets.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);

      // Send random numbers by interval
      socket.emit('connected', socket.clientID);

      // Disconnection
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

}
