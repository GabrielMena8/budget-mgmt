import { useMemo } from "react";
import BudgetForm from "./Components/BudgetForm"
import Header from "./Components/Header"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./Components/BudgetTracker";

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
    </>
  )
}

export default App
