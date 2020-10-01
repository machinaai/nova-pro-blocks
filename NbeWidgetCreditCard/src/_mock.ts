import { Request, Response } from 'express';

export default {
  'POST  /private/v1/corporate/customer/widgets/widgetCreditCards': (req: Request, res: Response) => {
    res.status(200).send({
      "CreditCards": [
        {
          "time" :{
            "startDate": "2020-08-01",
            "endDate": "2020-08-31",
            "period": "2020-08"
          },
          "totalDueAmount": 500000
        },
        {
          "time" :{
            "startDate": "2020-03-01",
            "endDate": "2020-03-31",
            "period": "2020-03"
          },
          "totalDueAmount": 500100.20
        },
        {
          "time" :{
            "startDate": "2020-04-01",
            "endDate": "2020-04-31",
            "period": "2020-04"
          },
          "totalDueAmount": 502000.80
        },
        {
          "time" :{
            "startDate": "2020-05-01",
            "endDate": "2020-05-31",
            "period": "2020-05"
          },
          "totalDueAmount": 500030.30
        },
        {
          "time" :{
            "startDate": "2020-06-01",
            "endDate": "2020-06-31",
            "period": "2020-06"
          },
          "totalDueAmount": 300000.80
        },
        {
          "time" :{
            "startDate": "2020-07-01",
            "endDate": "2020-07-31",
            "period": "2020-07"
          },
          "totalDueAmount": 600030.30
        }
      ]
    });
  },
};
