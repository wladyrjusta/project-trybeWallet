const LOGIN_ACESS = 'LOGIN_ACESS';
const GET_CURRENCIES = 'GET_CURRENCIES';

const submitLoginInfo = (email) => ({
  type: LOGIN_ACESS,
  payload: email,
});

const getCurrencies = (code) => ({
  type: GET_CURRENCIES,
  payload: code,
});

function fetchCurrencies() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((responde) => responde.json())
      .then((data) => dispatch(getCurrencies(Object.keys(data)
        .filter((currence) => currence !== 'USDT'))));
  };
}
export { LOGIN_ACESS, submitLoginInfo, GET_CURRENCIES, getCurrencies, fetchCurrencies };
