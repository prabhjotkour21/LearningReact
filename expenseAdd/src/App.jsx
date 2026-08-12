import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [expenses, setExpenses] = useState([])
  const [filterCategory, setFilterCategory]=useState('')
  const AddExpense = () => {
    if (title.trim()!== "" && amount.trim()!=="" && category.trim()!=="") {
      setAmount('')
      setCategory('')
      setTitle('')
      const newExpense = {
        id:Math.random(),
        title: title,
        amount: amount,
        category:category
    }

    setExpenses((prev)=>[...prev,newExpense])
    }
  }
  const deleteExpense = (id) => {
    setExpenses((prev)=>prev.filter((i)=>i.id!== id))
  }
  const filteredExpenses = expenses.filter((i) => {
  return filterCategory === "" || i.category === filterCategory
})

  return (
    <>
      
      
      <div className='min-h-screen flex justify-center items-center bg-gray-200'>
       
        <div className='w-full max-w-md bg-white p-6 rounded-xl shadow-lg'>
          <h1
             className='text-2xl font-bold text-center mb-6'
           >Expense Add</h1>
          <input
            className='w-full border border-gray-300 rounded-lg p-3 mb-3'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder='Enter you title here....'
          />
          <input
            className='w-full border border-gray-300 rounded-lg p-3 mb-3'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter Amount....'
          />
          <label>
            <select
              className='w-full border border-gray-300 rounded-lg p-3 mb-3'
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="travel"> Travel</option>
              <option value="shopping"> Shopping</option>
             <option value="other"> Other</option>
            </select>
          </label>
          <button
            className='bg-blue-300  rounded-lg p-3 border border-gray-300'
            onClick={AddExpense}> Add Expense
          </button>
          <label>
            <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
              </select> 
          </label>
         
          <div className='mt-6 space-y-3'>
            {filteredExpenses.map((i) => (
              <div
                key={i.id}
                className='flex items-center justify-between border border-gray-200 rounded-lg p-3'
              >
                <p className='w-1/4 font-semibold'>
                  {i.title}</p>
                <p className='w-1/4'>₹ {i.amount}</p>
                <p className='w-1/4 text-gray-500'>{i.category}</p>
                
                <button
                  className='w-1/4 bg-red-500 text-white px-3 py-2 rounded-lg'
                  onClick={()=>deleteExpense(i.id)}
                >X</button>
              </div>
            ))}
            <h2
              className='text-xl font-bold  mb-6'
            > Total Expense : ₹ {filteredExpenses.reduce((total, item) => total + Number(item.amount), 0)} </h2>
             
          </div>
         </div>
       </div>

    </>
  )
}

export default App
