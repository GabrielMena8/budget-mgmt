
import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import Expense from "./Expense";
export default function ExpenseList() {

    const {state} = useBudget();
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])


  return (
    <div className="mt-10">
       {isEmpty ? (
           <p className='text-center text-2xl'>No hay gastos</p>
        ) : (
            <>
                <p className='text-center text-2xl'>Lista de gastos</p>
                {state.expenses.map(expense => (
                    <Expense key={expense.id} 
                    expense={expense}/>
                ))}
               

            
            </>
        )}

    </div>
  )
}
