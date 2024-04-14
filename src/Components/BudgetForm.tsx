import { useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';




export default function BudgetForm() {
    const [budget, setBudget] = useState(0);
    const {dispatch} = useBudget();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(parseInt(e.target.value));
    }


    const isValid = useMemo(() => {
        return budget > 0;
    }
    , [budget]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 'ADD_BUDGET', payload: {budget}});
    }


  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-2xl text-sky-600 font-bold uppercase text-center ">Presupuesto</label>
        
            <input type="number" id="budget" 
            className="p-2 border placeholder:italic w-full border-gray-300 rounded-md" 
            placeholder='Ej. 3000'
            min={0}
            value = {budget}
            onChange={handleChange}
    
            />
        
        </div>

        <input 
            type="submit"
            value={`${isValid ? 'Guardar presupuesto' : 'Ingrese un presupuesto válido'}`}
            className={`bg-sky-500 text-white text-2xl uppercase font-bold py-3 px-4 rounded-md w-full ${isValid ? 'hover:bg-blue-600' : 'cursor-not-allowed opacity-50'}`}
        
            disabled={!isValid}
        
        />
    </form>
  )
}
