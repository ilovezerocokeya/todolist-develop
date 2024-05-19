import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react";

const TodoContainer = () => {
    const [todo, setTodos] = useState ([
        {
            id: 1,
            title: "할 일1",
            content: "할 일 1 내용",
            isDone: false,
        },
    ]);


  return (
    <div>
      <TodoForm setTodos={setTodos}/>
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  )
}

export default TodoContainer;
