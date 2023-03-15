import { GET_CURRENCIES,
  SUBMIT_WALLET_INFOS, UPDATE_WALLET_INFOS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SUBMIT_WALLET_INFOS:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
    };
  case UPDATE_WALLET_INFOS:
    return {
      ...state,
      expenses: [...action.payload.expenses],
    };

  default:
    return state;
  }
};

export default wallet;
