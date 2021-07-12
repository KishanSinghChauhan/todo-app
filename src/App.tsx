import  React,{ ChangeEvent, useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

export interface ITodo  {
  title:string,
  deadLine:string,
  id:string 
}


const App:React.FC = () => {
  const [todo, setTodo] = useState<ITodo>({title:'',deadLine:'', id:''})
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void  => {
    const {name,value} = e.target
    setTodo({
      ...todo,
      [name]:value,
    })
  } 

  const addtask = ():void => {
    setTodoList([...todoList, todo]);
    setTodo({
      title:'',
      deadLine:'',
      id:String(Math.random())
    })
  }

  const deleteTask = (todoId:string):void => {
    const afterDeleteTodoList = todoList.filter(d => d.id !== todoId )
    setTodoList(afterDeleteTodoList)
  }

  return (
    <div className='container'>
      <Input handleChange={handleChange} addTask={addtask} todo={todo}/>
      <div>
        {todoList?.map((info:ITodo) => (
          <TodoList key={info.id} data={info} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
