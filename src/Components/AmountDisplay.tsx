import React from 'react'


type AmountDisplayProps = {
    label : string,
    amount : number
}

export default function AmountDisplay({label, amount}: AmountDisplayProps) {


    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-US', {style: 'currency', currency: 'USD'}).format(amount)
    }



  return (
    <p className='text-2xl font-bold uppercase text-sky-500'>
        {label}: <span className='font-bold text-black' > {formatCurrency(amount)} </span>
    </p>

  )
}
