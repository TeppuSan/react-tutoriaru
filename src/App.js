import { useState,useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //     ↓オブジェクトの変数　↓管理するやつ
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクの追加
    //current.valueで入力された値を取得
    // console.log(todoNameRef.current.value);
    setTodos((prevTodos) => {
      //...prevTodosで配列の中身を展開,spred構文
      return [...prevTodos, {id: uuidv4(), name: todoNameRef.current.value, complete: false}]
    })
    // todoNameRef.current.value = null;
  }
  
    const toggleTodo = (id) => {
      const newTodos = [...todos];
      //find関数は配列の中から条件に合う要素を返す
      const todo = newTodos.find((todo) => todo.id === id);
      todo.complete = !todo.completed;
      setTodos(newTodos);
    }
//フィルタ関数についてググル

const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.complete);
  setTodos(newTodos);
}

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear}>完了済みタスク削除</button>
      <div>残りタスク数:{todos.filter((todo) => !todo.complete).length}</div>
    </>
  );
}

export default App;
