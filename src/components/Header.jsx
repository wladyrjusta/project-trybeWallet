import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LogoTrybe from '../logo-trybe.png';
import '../App.css';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { currency } = this.state;
    const { email, expenses } = this.props;

    const totalSumExpenses = expenses
      .reduce((acc, currValue) => {
        acc += (Number(currValue.value)
          * Number(currValue.exchangeRates[currValue.currency].ask));

        return acc;
      }, 0);

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
          <h3>Despesa Total: R$</h3>
          <h4
            data-testid="total-field"
          >
            { totalSumExpenses.toFixed(2) }
          </h4>
          <h3
            data-testid="header-currency-field"
          >
            {currency}
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
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
