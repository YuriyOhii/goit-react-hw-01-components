import PropTypes from 'prop-types';
import { Board, BoardHead, TableRow } from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
  return (
    <Board>
      <BoardHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </BoardHead>
      <tbody>
        {items.map(({id, type, amount, currency}) =><TableRow key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>)}
      </tbody>
    </Board>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
