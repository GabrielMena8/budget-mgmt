import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AmountDisplay from './AmountDisplay'
import { useBudget } from '../hooks/useBudget'

export default function BudgetTracker() {
    const {state, dispatch} = useBudget();
  return (

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex justify-center gap-5'> 
            <CircularProgressbar
                value={state.expenses.reduce((acc, expense) => acc + expense.amount, 0)}
                maxValue={state.budget}
                styles={buildStyles({
                    textColor: '#000',
                    pathColor: '#f00',
                    trailColor: '#d6d6d6'
                })}
            />
           
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
            <button
                className='bg-pink-500 w-full hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'    
            type="button"
            onClick={() => dispatch({type: 'RESET'})}
            >Reset
            </button>

            <AmountDisplay 
                label = 'presupuesto'
                amount = {state.budget}
            />
            <AmountDisplay 
                label = 'disponible'
                amount = {state.budget - state.expenses.reduce((acc, expense) => acc + expense.amount, 0)}
            />
            <AmountDisplay 
                label = 'gastado'
                amount = {state.expenses.reduce((acc, expense) => acc + expense.amount, 0)}
            />
        </div>
    </div>
  )
}
