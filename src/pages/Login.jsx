import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';
import { submitLoginInfo } from '../redux/actions/index';
import LogoTrybe from '../logo-trybe.png';
import '../App.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const passwordMinLength = 6;
    const { email, password } = this.state;
    const { history, dispatch, className, moreClasses } = this.props;
    return (
      <div
        className="login-form-container"
      >
        <h1>Login</h1>
        <img
          className="wallet-login-img"
          src={ LogoTrybe }
          alt="logo-trybe"
        />
        <form
          onSubmit={ (e) => {
            e.preventDefault();

            dispatch(submitLoginInfo(this.state));
            history.push('/carteira');
          } }
        >
          <Input
            className={ className }
            type="text"
            name="email"
            label="Email: "
            dataTesteId="email-input"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <Input
            className={ className }
            type="text"
            name="password"
            label="Senha:  "
            value={ password }
            onChange={ this.handleChange }
            dataTesteId="password-input"
            required
          />
          <Button
            type="submit"
            label="Entrar"
            moreClasses={ moreClasses }
            disabled={ !email
              .match(/\S+@\S+\.\S+/) || password.length < passwordMinLength }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  moreClasses: PropTypes.string,
};

Login.defaultProps = {
  className: 'login',
  moreClasses: 'login',
};

export default connect(null)(Login);
