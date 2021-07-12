import  { ChangeEvent } from 'react'
import { ITodo } from '../App'

interface Iinput{
  todo:ITodo,
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void,
  addTask:() => void
}

const Input = ({todo,handleChange,addTask} : Iinput) => {
  return (
    <div className='flex flex-col space-y-5'>
      <input type='text' name='title' placeholder='Enter Title' className='outline-none border rounded-sm p-2' value={todo.title} onChange={handleChange}/>
      <input type='number' name='deadLine' placeholder='Enter DeadLine (In Days)' value={todo.deadLine} className='outline-none p-2  border rounded-sm' onChange={handleChange}/>
      <button type='button' className='border-0 bg-blue-600 text-white px-3 py-2 rounded-sm' onClick={addTask}>Add</button>
    </div>
  )
}

export default Input
