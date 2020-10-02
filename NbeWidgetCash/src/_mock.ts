import {Request, Response} from 'express';

export default {
  'POST /private/v1/corporate/widgets': (req: Request, res: Response) => {
    const {currency} = req.body.dataAccount[0];

    res.status(200).send({
      cash: [
        {
          balance: {
            currency,
            // balance:0
            balance: 25487000000.01,
          },
          period: '2020-09-05',
        },
        {
          balance: {
            currency,
            balance: 60000300010.01,
            // balance:0
          },
          period: '2020-09-01',
        },
        {
          balance: {
            currency,
            balance: 75115182698,
            // balance:9999999999999998
          },
          period: '2020-09-06',
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period: '2020-08-10',
        },
        {
          balance: {
            currency,
            balance: 74510900.01,
          },
          period: '2020-08-11',
        },
        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period: '2020-08-09',
        },

        {
          balance: {
            currency,
            balance: 749264926.01,
          },
          period: '2020-08-04',
        },
        {
          balance: {
            currency,
            balance: 79115182699,
          },
          period: '2020-07-15',
        },
        {
          balance: {
            currency,
            balance: 549264926.01,
          },
          period: '2020-06-23',
        },
        {
          balance: {
            currency,
            balance: 209264926.01,
          },
          period: '2020-03-24',
        },
        {
          balance: {
            currency,
            balance: 209264926.01,
          },
          period: '2019-03-24',
        },
      ],
    });
  },
};
