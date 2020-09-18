import InactivityModal from './Inactivity/logout-inactivity';
import LogoutModal from './Logout/logout';
import { getTransactions } from '../../../services/transactions';

// async function that validates if there are a number of transactions to display different modals
async function ModalTrigger(token: string) {
  // variable assigned to a function
  const responseService = await getTransactions(token);
  // variable containing transactions
  const { transaction } = responseService;

  if (transaction.length > 0) {
    InactivityModal(transaction);
  } else {
    LogoutModal();
  }
}

export default ModalTrigger;
