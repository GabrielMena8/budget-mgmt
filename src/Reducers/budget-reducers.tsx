import { DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'

export type BudgetActions = 
{type: 'ADD_BUDGET', payload: {budget: number}} |
{type: 'SHOW_MODAL'}  |
{type: 'ADD_EXPENSE', payload: {expense: DraftExpense} } |
{type: 'RESET'}





export type BudgetState = {
    budget: number,
    modal: boolean,
    expenses: Expense[]
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

const addExpense = (expense: DraftExpense): Expense => {
    return {
        ...expense,
        id: uuidv4()
    }
}

export const budgetReducer = 
(state: BudgetState, action: BudgetActions) => {
    switch (action.type) {
        case 'ADD_BUDGET':
            return {
                ...state,
                budget: action.payload.budget
            }



        case 'SHOW_MODAL':
            return {
                ...state,
                modal: !state.modal
            }

        case 'ADD_EXPENSE':

            // eslint-disable-next-line no-case-declarations
            const newExpense = addExpense(action.payload.expense)
            
            return {
                ...state,
                expenses: [...state.expenses, newExpense]
                
            }
            
        case 'RESET':
            return initialState
            

        
        default:
            return state
    }
}