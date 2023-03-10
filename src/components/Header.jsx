import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LogoTrybe from '../logo-trybe.png';
import '../App.css';

class Header extends Component {
  render() {
    const { email, despesaTotal, cambio } = this.props;
    return (
      <div
        className="wallet-Header"
      >
        <img
          className="wallet-header-img"
          src={ LogoTrybe }
          alt="logo-trybe"
        />
        <div
          className="header-container"
        >
          <h3
            data-testid="email-field"
          >
            {`Email:  ${email}`}
          </h3>
          <h3
            data-testid="total-field"
          >
            {`Despesa Total: R$ ${despesaTotal}`}
          </h3>
          <h3
            data-testid="header-currency-field"
          >
            {cambio}
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

Header.propTypes = {
  email: PropTypes.string,
  despesaTotal: PropTypes.string,
  cambio: PropTypes.string,
};

Header.defaultProps = {
  email: '',
  despesaTotal: '0,00',
  cambio: 'BRL',
};

export default connect(mapStateToProps)(Header);
