const LOGIN_ACESS = 'LOGIN_ACESS';

const submitLoginInfo = (email) => ({
  type: 'LOGIN_ACESS',
  payload: email,
});

export { LOGIN_ACESS, submitLoginInfo };
