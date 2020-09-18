import { Request, Response } from 'express';

export default {
  /**
   * Mock for refresh session method GET
   */
  'GET /private/v1/corporate/session/refreshSession': (req: Request, res: Response) => {
    res.status(200).send({
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjA2MDU2MSIsImRpbm5udiI6Ijk2MDYwNTYxIiwiY29udHJhY3QiOiI4OTQyNTgzIiwiZXhwIjoxNTg1MDAxMjA5LCJpYXQiOjE1ODUwMDA5MDl9.UPF108YFjE0wvPPjHmjGnFm_DSzXZJuBDcT-C_JeRt-ELyn_ALTyq9EseE1Kx6XO6mTVVNCX0LyHOqJcoqK0lw',
    });
  },
  /**
   * Mock for activity method GET
   */
  'GET /private/v1/corporate/session/activity': (req: Request, res: Response) => {
    res.status(200).send({
      transaction: [
        {
          transactionDescription: 'Transferencias',
          transactionNumber: 5,
        },
      ],
    });
  },
  /**
   * Mock for logout method GET
   */
  'GET /private/v1/corporate/session/logout': (req: Request, res: Response) => {
    res.status(200).send();
  },
};
