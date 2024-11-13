import React, { useContext } from 'react'
import { GlobalContext } from '../UseContext/UseContext'

type TransactionProps = {
	id: number,
	text: string,
	amount: number
}

const Transaction = (props: TransactionProps) => {
	const { deleteTransaction } = useContext(GlobalContext)

	return (
		<li className={props.amount > 0 ? "plus" : "minus"}>
			{props.text}
			<span>${props.amount}</span>
			<button onClick={() => deleteTransaction(props.id)}>X</button>
		</li>
	)
}

export default Transaction