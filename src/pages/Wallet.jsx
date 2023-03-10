import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, despesaTotal, cambio } = this.props;
    return (
      <div>
        <Header
          email={ email }
          despesaTotal={ despesaTotal }
          cambio={ cambio }
        />
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  despesaTotal: PropTypes.string,
  cambio: PropTypes.string,
};

Wallet.defaultProps = {
  email: '',
  despesaTotal: '0,00',
  cambio: 'BRL',
};

export default Wallet;
