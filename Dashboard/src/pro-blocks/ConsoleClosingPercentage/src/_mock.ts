import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-close': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      oneSession: 5,
      moreSession: 6,
    });
  },
};
