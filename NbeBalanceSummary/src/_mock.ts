import { Request, Response } from 'express';

export default {
  'POST  /private/v1/corporate/customer/widgets/widgetBalance': (req: Request, res: Response) => {
    res.status(200).send({
      "data_balance": [
        {
          "transaction_description": "Efectivo MXN",
          "percentage": 50.67,
          "balance": {
            "currency": "MXN",
            "balance": 7492649.01
          },
          "account_routing": {
            "accountClasification": "CASH"
          }
        },
        {
          "transaction_description": "Efectivo USD",
          "percentage": 40,
          "balance": {
            "currency": "MXN",
            "balance": 74926
          },
          "account_routing": {
            "accountClasification": "CASH"
          }
        },
        {
          "transaction_description": "Inversiones USD",
          "percentage": 2,
          "balance": {
            "currency": "MXN",
            "balance": 50000
          },
          "account_routing": {
            "accountClasification": "CASH"
          }
        },
      ]
    });
  }
};
