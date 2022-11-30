import {useState} from 'react'
import {ITask} from './interface'
import TodoTask from './components/TodoTask'
 
function App(){
  const [task,setTask] = useState("")
  const [todoList,setTodoList] = useState<ITask[]>([])
  
  function addTask():void{
    const idRandom = (num:number)=> Math.floor(Math.random()*num)
    
    const newTask = {id:idRandom(90000),nameTask:task};
   
    setTodoList([...todoList,newTask])
    setTask('')
  }
  
  
  function deleteTask(DeleteTaskById:number):void{
    setTodoList(todoList.filter((taskName)=>taskName.id !== DeleteTaskById))
  }
  
  
  return(
    <div>
     <input type="text" value={task}
          placeholder="Create new task"
          onChange={e=>setTask(e.target.value)}/>
      <button onClick={addTask}>New Task</button>
      {todoList.map((item,key)=>
        <TodoTask key={key} task={item} deleteTask={deleteTask}/>
       )}
     </div>
  );
}

export default App;