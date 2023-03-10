import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';
import { submitLoginInfo } from '../redux/actions/index';

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
    const { history, dispatch } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={ (e) => {
            e.preventDefault();

            dispatch(submitLoginInfo(this.state));
            history.push('/carteira');
          } }
        >
          <Input
            type="text"
            name="email"
            label="Email: "
            dataTesteId="email-input"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <Input
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
            moreClasses="is-fullwidth is-info"
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
};

export default connect(null)(Login);
