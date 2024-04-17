
import { useMemo } from "react"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/db"

type expenseprops = {
    expense: Expense
}



export default function Expense({expense}: expenseprops) {
    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'full'}).format(new Date(date));
    }

    const categoryInfo = useMemo(() => 
        categories.filter(category => category.id === expense.category)[0]
    , [expense])

return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-300 flex gap-6 items-center">
            <div>
                <img src={`./icono_${categoryInfo.icon}.svg`} alt={categoryInfo.name} className='w-64 h-24'/>
            </div>
            <div className="flex-1 space-y-2">
                    <p className='text-xl font-bold'>{categoryInfo.name}</p>
                    <p className='text-xl font-bold'>{expense.name}</p>
                    <p className='text-sm uppercase  text-gray-500'>{formatDate(expense.date.toString())}</p>
            </div>

            <AmountDisplay
                label={null}
                amount={expense.amount}
                
            />


    </div>
)
}
