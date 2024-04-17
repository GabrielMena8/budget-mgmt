import { DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'

export type BudgetActions = 
{type: 'ADD_BUDGET', payload: {budget: number}} |
{type: 'SHOW_MODAL'}  |
{type: 'ADD_EXPENSE', payload: {expense: DraftExpense} } |
{type: 'DELETE_EXPENSE', payload: {id: Expense['id']}}  |
{type: 'GET_EXPENSE', payload: {id: Expense['id']}} |
{type: 'EDIT_EXPENSE', payload: {expense: Expense}} |
{type: 'RESET'}





export type BudgetState = {
    budget: number,
    modal: boolean,
    expenses: Expense[],
    editingId: Expense['id']
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: [],
    editingId: ''
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
            
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
            }

        case 'GET_EXPENSE':

            return {
                ...state,
                editingId: action.payload.id,
                modal: !state.modal

            }
        
        case 'EDIT_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(expense => {
                    if(expense.id === action.payload.expense.id){
                        return action.payload.expense
                    }
                    return expense
                }),
                editingId: '',
                modal: !state.modal
            }

        case 'RESET':
            return initialState
        
        
            

        
        default:
            return state
    }
}