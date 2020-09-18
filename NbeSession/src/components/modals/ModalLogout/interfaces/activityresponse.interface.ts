// transaction interface
export interface ActivityResponse {
  transaction: Transaction[];
}

// numeric and string transaction interface
export interface Transaction {
  transactionDescription: string;
  transactionNumber: number;
}
