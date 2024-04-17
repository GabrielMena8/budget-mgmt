import {
LeadingActions,
TrailingActions,
SwipeableList,
SwipeableListItem,
SwipeAction,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { useMemo } from "react"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/db"

import { useBudget } from '../hooks/useBudget';

type expenseprops = {
    expense: Expense
}



export default function Expense({expense}: expenseprops) {

    const {dispatch} = useBudget();

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('es-ES', {dateStyle: 'full'}).format(new Date(date));
    }

    const categoryInfo = useMemo(() => 
        categories.filter(category => category.id === expense.category)[0]
    , [expense])


    const leadingActionsf = () => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({type:'GET_EXPENSE', payload:{id:expense.id}})}>Edit</SwipeAction>
        </LeadingActions>
    )

    const trailingActionsf = () => (
        <TrailingActions >
            <SwipeAction onClick={
                () => {
                    dispatch({type: 'DELETE_EXPENSE', payload: {id: expense.id}})
                }
            } destructive>
                Delete
            </SwipeAction>
        </TrailingActions>
    )


return (

    <SwipeableList>
        <SwipeableListItem
            maxSwipe={30}
            leadingActions={leadingActionsf()}
            trailingActions={trailingActionsf()}              
        >
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
        </SwipeableListItem>
    </SwipeableList>
)
}
