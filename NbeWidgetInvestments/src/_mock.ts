import { Request, Response } from 'express';

export default {
  'POST /private/v1/corporate/customer/widgets/widgetInvestments': (req: Request, res: Response) => {

    res.status(200).send(
      {
        "Investments": [
          {
            "period_data": {
              "date": "2020-10-12",
              "period": "2020-03"
            },
            "data_investment": {
              "specific_yield": {
                "yield_per_day": 0.05
              }
            }
          },
          {
            "period_data": {
              "date": "2020-10-12",
              "period": "2020-03"
            },
            "data_investment": {
              "specific_yield": {
                "yield_per_day": 0.099
              }
            }
          },
          {
            "period_data": {
              "date": "2020-09-18",
              "period": "2020-03"
            },
            "data_investment": {
              "specific_yield": {
                "yield_per_day": 0.08
              }
            }
          },
          {
            "period_data": {
              "date": "2020-08-15",
              "period": "2020-03"
            },
            "data_investment": {
              "specific_yield": {
                "yield_per_day": 0.03
              }
            }
          },
          {
            "period_data": {
              "date": "2020-07-15",
              "period": "2020-03"
            },
            "data_investment": {
              "specific_yield": {
                "yield_per_day": 0.05
              }
            }
          }
        ]
      }
    );
  },
};
