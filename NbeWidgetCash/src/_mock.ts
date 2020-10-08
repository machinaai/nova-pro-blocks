import { Request, Response } from 'express';

export default {
  'POST /private/v1/corporate/customer/widgets/widgetCash': (req: Request, res: Response) => {
    const { currency } = req.body.dataAccount[0];

    res.status(200).send({
      cash: [
        {
          balance: {
            currency,
            balance: 749264932326.01,
          },
          period_data: {
            time: {
              date: '2020-10-01',
              period: '2020-10',
            },
            specific_balance: {
              balance_per_day: 25487009000.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period_data: {
            time: {
              date: '2020-10-05',
              period: '2020-10',
            },
            specific_balance: {
              balance_per_day: 60000300010.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 749264911126.01,
          },
          period_data: {
            time: {
              date: '2020-09-27',
              period: '2020-09',
            },
            specific_balance: {
              balance_per_day: 751152698.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 949998982926.01,
          },
          period_data: {
            time: {
              date: '2020-09-10',
              period: '2020-09',
            },
            specific_balance: {
              balance_per_day: 66649264926.29,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period_data: {
            time: {
              date: '2020-08-11',
              period: '2020-08',
            },
            specific_balance: {
              balance_per_day: 745876743310900.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 7454539264926.01,
          },
          period_data: {
            time: {
              date: '2020-08-03',
              period: '2020-08',
            },
            specific_balance: {
              balance_per_day: 749264926.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period_data: {
            time: {
              date: '2020-07-04',
              period: '2020-07',
            },
            specific_balance: {
              balance_per_day: 749264926.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period_data: {
            time: {
              date: '2020-06-23',
              period: '2020-06',
            },
            specific_balance: {
              balance_per_day: 11749089264926.01,
            },
          },
        },
        {
          balance: {
            currency,
            balance: 6432749264926.01,
          },
          period_data: {
            time: {
              date: '2020-05-24',
              period: '2020-05',
            },
            specific_balance: {
              balance_per_day: 19089264926.01,
            },
          },
        },
      ],
    });
  },
};
