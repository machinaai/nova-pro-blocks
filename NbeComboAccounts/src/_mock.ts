import { Request, Response } from 'express';

export default {
  'POST  /private/v1/corporate/accounts/origin': (req: Request, res: Response) => {
    res.status(200).send({
      "accounts": [
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de956",
          "label": "Gastos mamá",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 300
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-cd2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-acc9-0b2bf89de956",
          "label": "Gastos mamá",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 300
          }
        },
        {
          "idAccount": "8ccca7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-qb2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-q0e3-a129-0b2bf89de956",
          "label": "Gastos mamá",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 300
          }
        },
        {
          "idAccount": "qca8a7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-qd02-40e3-a129-cd2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
      ]
    });
  },
  'POST /private/v1/corporate/accounts/originQuery': (req: Request, res: Response) => {
    res.status(200).send({
      "accounts": [
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de923",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Paco Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-cd2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-acc9-0b2bf89de956",
          "label": "Gastos mamá",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 300
          }
        },
        {
          "idAccount": "8ccca7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-40e3-a129-qb2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-6d02-q0e3-a129-0b2bf89de956",
          "label": "Gastos mamá",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 300
          }
        },
        {
          "idAccount": "qca8a7e4-6d02-40e3-a129-0b2bf89de934",
          "label": "Gastos paco",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
        {
          "idAccount": "8ca8a7e4-qd02-40e3-a129-cd2bf89de9f0",
          "label": "My Account",
          "bank": {
            "bankCode": "998",
            "bankName": "Novabank"
          },
          "beneficiary": {
            "beneficiaryName": "Jose Pérez León",
            "beneficiaryType": "FISICA"
          },
          "account_routings": {
            "accountType": "CHECKING",
            "accountNumber": "554231772",
            "accountBranch": "870",
            "accountClasification": "CASH"
          },
          "balance": {
            "currency": "MXN",
            "balance": 1.01
          }
        },
      ],
      "pagination": {
        "pageNumber": 1,
        "pageSize": 10,
        "totalPages": 5
      }
    });
  }
};
