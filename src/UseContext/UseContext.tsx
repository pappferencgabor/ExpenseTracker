import { createContext, ReactNode, useState } from "react"

const initialstate = {
    transactions: []
}

type TransactionType = {
    id: number,
    text: string,
    amount: number
}

type GlobalState = {
    transactions: TransactionType[],
    deleteTransaction: (id: number) => void
    addTransaction: (t: TransactionType) => void
}

type childrenProps = {
    children: ReactNode
}

export const GlobalContext = createContext<GlobalState>({
    transactions:initialstate.transactions,
    deleteTransaction: () => {},
    addTransaction: () => {}
})

const GlobalProvider = ({children}:childrenProps) => {
    const [transactions, setTransactions] = useState<TransactionType[]>(initialstate.transactions)

const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id != id))
}

const addTransaction = (t: TransactionType) => {
    setTransactions(prev => ([...prev, t]))
}

return (
    <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider