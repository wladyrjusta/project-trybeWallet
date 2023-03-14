import React, { Component } from 'react';

class ExpensesTable extends Component {
  render() {
    return (
      <div>
        <table>
          <caption>Tabela de Gastos</caption>
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
          <td>Conta de água</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
          <td>Contas</td>
        </table>
      </div>
    );
  }
}

export default ExpensesTable;
