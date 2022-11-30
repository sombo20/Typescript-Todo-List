import {ITask} from '../interface'

interface TaskProps{
  task:ITask,
  deleteTask(deleteTaskById:number):void,
}

export default function TodoTask({task,deleteTask}:TaskProps){
   return(
     <div>
        <br/>
          <b>{task.nameTask}</b>
           <button onClick={()=>deleteTask(task.id)}>Delete</button>
      </div>
    )
}