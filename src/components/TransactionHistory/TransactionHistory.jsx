
import "./TransactionHistory.css"

export default function TransactionHistory({ items }) {
  return (
    <div >
      <table className="transaction-wrap">
        <thead >
          <tr className="description-wrap">
            <th className="description-item">Type</th>
            <th className="description-item">Amount</th>
            <th className="description-item">Currency</th>
          </tr>
        </thead>

        <tbody className="transaction-list-wrap">
          {items.map(({ id, type, amount, currency }) => {
            return (<tr className="transaction-list" key={id}>
              <td className="transaction-list-item">{type}</td>
              <td className="transaction-list-item">{amount}</td>
              <td className="transaction-list-item">{currency}</td>
            </tr>)
          })}

        </tbody>
      </table>

    </div>)

}