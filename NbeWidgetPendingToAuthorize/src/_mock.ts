import { Request, Response } from 'express';

export default {
  'POST /private/v1/corporate/customer/widgets/widgetPendingToAuthorize': (req: Request, res: Response) => {

    res.status(200).send(
      {
        "PendingToAuthorize": [
          {
            "transaction": [
              {
                "transactionType": "TRANSFER",
                "quantity": 34
              },
              {
                "transactionType": "TAXES",
                "quantity": 33
              },
              {
                "transactionType": "INVESTMENT",
                "quantity": 423
              },
              {
                "transactionType": "PAYROLL",
                "quantity": 987
              },
              {
                "transactionType": "ADMINISTRATION",
                "quantity": 545
              }
            ]
          }
        ]
      }
    );
  },
};
