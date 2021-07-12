import { ITodo } from "../App"

interface IData {
  data:ITodo,
  onDelete: (title:string) => void
}

const TodoList = ({data,onDelete}:IData) => {
  return (
    <div className='flex pt-4'>
      <p>{data.title}</p>
      <p>{data.deadLine}</p>
      <button className='border px-2' onClick={() => onDelete(data.id)}>x</button>
    </div>
  )
}

export default TodoList
