import { useMemo } from "react";
import BudgetForm from "./Components/BudgetForm"
import Header from "./Components/Header"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./Components/BudgetTracker";
import Modal from "./Components/Modal";
import ExpenseList from "./Components/ExpenseList";

function App() {  
  const {state} = useBudget();

  const isvalid = useMemo(() => {
    return state.budget > 0;
  }
  , [state.budget]);

  return (
    <>
        <Header />
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
          {isvalid ? (
              <BudgetTracker />
            ) : (
              <BudgetForm />
            )}
        </div>
        {isvalid && (
          <main className="max-w-3xl mx-auto p-10">
           <ExpenseList />
           <Modal />
          </main>
        )
        }
        
    </>
  )
}

export default App
