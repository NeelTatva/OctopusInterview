import { Request, Response } from "express";
const https = require("https");

import { FetchDataService } from "./FetchData.service";
export class FetchDataController {
  public constructor(
    private readonly fetchDataService: FetchDataService
  ) {
    this.fetchDataService = fetchDataService;
  }
  public getData = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let response: JSON | null
    await this.fetchDataService
      .fetchData()
      .then((data: JSON | null) => {
          
        if (data) {
            return res.status(200).json({message: 'success'});
        }
      })
      .catch((error: Error) => {
          
        return res.status(500).json({message: 'error'});
      });
   
      return res.status(200).json({message: 'success'});
  };
}
