const LOGIN_ACESS = 'LOGIN_ACESS';
const GET_CURRENCIES = 'GET_CURRENCIES';
const SUBMIT_WALLET_INFOS = 'SUBMIT_WALLET_INFOS';

const submitLoginInfo = (email) => ({
  type: LOGIN_ACESS,
  payload: email,
});

const getCurrencies = (code) => ({
  type: GET_CURRENCIES,
  payload: code,
});

const submitWalletInfo = (expenses) => ({
  type: SUBMIT_WALLET_INFOS,
  payload: { expenses },
});

function fetchWalletExchangeRates(expenses) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    dispatch(submitWalletInfo({ ...expenses, exchangeRates }));
  };
}

function fetchCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((responde) => responde.json())
      .then((data) => dispatch(getCurrencies(Object.keys(data)
        .filter((currence) => currence !== 'USDT'))));
  };
}

export { LOGIN_ACESS,
  GET_CURRENCIES,
  SUBMIT_WALLET_INFOS,
  submitLoginInfo,
  getCurrencies,
  fetchCurrencies,
  fetchWalletExchangeRates,
  submitWalletInfo,
};
