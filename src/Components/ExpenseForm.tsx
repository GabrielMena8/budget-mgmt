
import { useEffect, useState } from 'react';
import {categories} from '../data/db.ts'
import { Value, DraftExpense} from '../types/index.ts'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Error from './Error.tsx'

import { useBudget } from '../hooks/useBudget.ts';




export default function ExpenseForm() {

    
    const {dispatch, state} = useBudget()
    const [expense, setExpense] = useState<DraftExpense>({
        name: '',
        amount: 0,
        category: '',
        date: new Date()
    })

    useEffect(() => {
        if(state.editingId){
            const editing = state.expenses.filter(current => current.id === state.editingId)[0]
            setExpense(editing)
            console.log(editing)
        }
    }, [state.editingId])


    const [error, setError] = useState<string>('')



    const handleExpense = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        const isamount=['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isamount ? Number(value) : value
        })



    }


    const handleDate = (date: Value) => {
        setExpense({
            ...expense,
            date: date as Date
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       if(Object.values(expense).some((val) => val === '')){
              setError('All fields are required')
              return
        }

        if(state.editingId){
            dispatch({type: 'EDIT_EXPENSE', payload: {expense: {id: state.editingId, ...expense}}})

            return
        } else{
            dispatch({type: 'ADD_EXPENSE', payload: {expense}})

        }

       
        setError('')
        setExpense({
            name: '',
            amount: 0,
            category: '',
            date: new Date()
        })

        dispatch({type: 'SHOW_MODAL'})

    }


  return (
    <form className='bg-white  rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Expense Name
            </label>

            {error && 
        
                <Error>
                    {error}
                </Error>
                }







            <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                name='name'
                placeholder='Expense Name'
                onChange={handleExpense}
            />
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
            Amount
            </label>
            <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='amount'
                type='number'
                name='amount'
                placeholder='Amount'
                onChange={handleExpense}
                max={9999}
            />
        </div>
        <div className='mb-4'>
            <label className='block
             text-gray-700 text-sm font-bold mb-2' htmlFor='category'>
            Category
            </label>
            <select
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name='category'
                id='category'
                onChange={handleExpense}
            >
            <option value=''>-- Select --</option>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
            </select>
        </div>

        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>
            Date
            </label>
            <DatePicker
                name='date'
                className='shadow appearance-none border rounded w-full 
                py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                id='date'
                onChange={handleDate}
            />
        </div>



        <div className='flex items-center justify-between'>
            <button
            className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            >
            Add Expense
            </button>
        </div>
    </form>
  )
}
