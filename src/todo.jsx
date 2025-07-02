import './index.css'
import { useState } from 'react';

export const  Todo = () =>{
  const [todoText,setTodoText] = useState("")

  const [incompleteTodos,setIncompleteTodos] = useState([
    // "TODOです1",
    // "TODOです2"
  ]);
  const [completeTodos,setCompleteTodos] = useState([
    // "TODOでした1",
    // "TODOでした2"
  ]);


  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickTodoAdd = (event) =>{
    if(todoText === "") return ;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) =>{
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index)=>{
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  return(
    <>
    <div className='input-area'>
      <input placeholder='Todoを入力' value={todoText} onChange = {onChangeTodoText}/>
      <button onClick={onClickTodoAdd}>追加</button>
    </div>
    <div className='incomplete-area'>
      <p className='title'>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo,index) =>(
            <li key={todo}>
             <div className='list-low'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
             </div>
            </li>
          )
        )}
      </ul>
    </div>
    <div className='complete-area'>
    <p className='title'>完了のTODO</p>
      <ul>
        {completeTodos.map((todo,index) =>(
            <li key={todo}>
             <div className='list-low'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
             </div>
            </li>
          )
        )}
      </ul>
    </div>
    </>
  )
}

export default Todo
