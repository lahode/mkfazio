import * as express from 'express';
import * as socketIo from 'socket.io';
import { Request, Response } from 'express';
import * as fetch from 'node-fetch';

import { CONFIG } from "../../config";

const router = express.Router();

export class CompanyRoutes {

  public static getUpdatedCompany(req: Request, res: Response) {
    if (!req.params.id && req.params.clientID) {
      return res.status(400).json({message: "Aucun ID ou identifiant client n'a été trouvé dans la requête.", success: false});
    }
    /*
    setInterval(() => {
      const url = `https://tmp-d8-medev.c9users.io/api/company/${req.params.id}`;
      fetch(url)
        .then(response => {
          response.json().then(json => {
            io.sockets.socket(req.params.clientID)
                      .emit('companyUpdate', json.results[0]);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, 2000);
    */
    return res.status(200);
  }
}
