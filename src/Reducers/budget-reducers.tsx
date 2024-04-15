
export type BudgetActions = 
{type: 'ADD_BUDGET', payload: {budget: number}} |
{type: 'SHOW_MODAL'}

export type BudgetState = {
    budget: number,
    modal: boolean
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false
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
        default:
            return state
    }
}