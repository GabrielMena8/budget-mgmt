import { useReducer, createContext } from "react";
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../Reducers/budget-reducers";


type BudgetContextProps = {
    state: BudgetState;
    dispatch: React.Dispatch<BudgetActions>;


}

type BudgetProviderProps = {
    children: React.ReactNode;
}




export const BudgetContext = createContext<BudgetContextProps>(null!);




export const BudgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    )
}
