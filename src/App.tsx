import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpense from "./components/IncomeExpense"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import "./app.css"
import GlobalProvider from "./UseContext/UseContext"

function App() {

  return (
    <div className="container">
      <GlobalProvider>
        <Header/>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </GlobalProvider>
    </div>
  )
}

export default App
