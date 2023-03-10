import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../redux/actions';
import Input from './Input';
import Button from './Button';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      expenses: [{
        id: '',
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      }],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value,
      description, method, tag, currency } = this.state;
    const { dispatch, className, moreClasses, currencies } = this.props;
    const usebleCurrencies = currencies.filter((currence) => currence !== 'USDT');
    console.log(currencies);
    return (
      <div>
        <form
          onSubmit={ (e) => {
            e.preventDefault();

            dispatch(submitLoginInfo(this.state));
          } }
        >
          <Input
            className={ className }
            type="number"
            name="value"
            label="Valor: "
            onChange={ this.handleChange }
            value={ value }
            dataTesteId="value-input"
          />
          <select
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            { usebleCurrencies
              .map((currence) => (
                <option
                  key={ currence }
                >
                  {currence}
                </option>))}
          </select>
          <select
            data-testid="method-input"
            value={ method }
            name="paymentMethod"
            onChange={ this.handleChange }
          >
            <option
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
          <select
            data-testid="tag-input"
            value={ tag }
            name="expenseTag"
            onChange={ this.handleChange }
          >
            <option
              value="Alimentação"
            >
              Alimentação
            </option>
            <option
              value="Lazer"
            >
              Lazer
            </option>
            <option
              value="Trabalho"
            >
              Trabalho
            </option>
            <option
              value="Transporte"
            >
              Transporte
            </option>
            <option
              value="Saúde"
            >
              Saúde
            </option>
          </select>
          <textarea
            data-testid="description-input"
            name="expenseDescription"
            value={ description }
            onChange={ this.handleChange }
          />
        </form>
        <Button
          type="submit"
          label="Adicionar despesa"
          moreClasses={ moreClasses }
          disabled={ false }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  moreClasses: PropTypes.string,
  currencies: PropTypes.arrayOf(PropTypes.string),
};

WalletForm.defaultProps = {
  className: 'wallet-form',
  moreClasses: 'wallet-form-btn',
  currencies: [],
};

export default connect(mapStateToProps)(WalletForm);
