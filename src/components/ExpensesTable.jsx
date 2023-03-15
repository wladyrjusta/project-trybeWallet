import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateExpenseGlobalState } from '../redux/actions';

class ExpensesTable extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          <caption>Tabela de Gastos</caption>
          <thead>
            <tr>
              <th scope="col">Descrição</th>
              <th scope="col">Tag</th>
              <th scope="col">Método de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Moeda</th>
              <th scope="col">Câmbio utilizado</th>
              <th scope="col">Valor convertido</th>
              <th scope="col">Moeda de conversão</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{`${expense.description}`}</td>
                <td>{`${expense.tag}`}</td>
                <td>{`${expense.method}`}</td>
                <td>{`${Number(expense.value).toFixed(2)}`}</td>
                <td>{`${expense.exchangeRates[expense.currency].name}`}</td>
                <td>
                  {`${Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}`}
                </td>
                <td>
                  {
                    `${Number(expense.exchangeRates[expense.currency].ask * expense.value)
                      .toFixed(2)}`
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    id={ expense.id }
                    onClick={
                      () => dispatch(updateExpenseGlobalState(expenses, expense.id))
                    }
                    type="button"
                  >
                    X
                  </button>
                </td>
              </tr>)) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
