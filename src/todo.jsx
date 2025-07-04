import { CompleteTodos } from './components/CompleteTodos';
import { InCompleteTodos } from './components/InCompleteTodos';
import { InputTodo } from './components/InputTodo';
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

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return(
    <>
    <InputTodo 
       todoText={todoText} 
       onChange={onChangeTodoText} 
       onClick={onClickTodoAdd}
       disabled={isMaxLimitIncompleteTodos}
    />
    {isMaxLimitIncompleteTodos && (
      <p style={{color:"red"}}>
      登録上限：5　タスクを消化してください
      </p>
    )}
    
    <InCompleteTodos
       todos={incompleteTodos}
       onClickComplete={onClickComplete}
       onClickDelete={onClickDelete}
    />
    <CompleteTodos
      todos={completeTodos}
      onClickBack={onClickBack}
    />
    </>
  )
}

export default Todo
