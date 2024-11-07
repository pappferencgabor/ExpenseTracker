import { useContext } from "react"
import { GlobalContext } from "../UseContext/UseContext"

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts.filter(amount => amount > 0).reduce((income, amount) => (income += amount), 0).toFixed(2)
  const expense = amounts.filter(amount => amount < 0).reduce((expense, amount) => (expense += amount), 0).toFixed(2)

  return (
    <div className="incomeexpense">
        <div className="income">
            <p>Income</p>
            <p>+${income}</p>
        </div>
        <div className="expense">
            <p>Expense</p>
            <p>-${Math.abs(parseInt(expense))}</p>
        </div>
    </div>
  )
}

export default IncomeExpense