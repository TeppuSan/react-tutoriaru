import { useState,useRef } from 'react';
import TodoList from './TodoList';

function App() {
  //     ↓オブジェクトの変数　↓管理するやつ
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", complete: false},
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクの追加
    //current.valueで入力された値を取得
    // console.log(todoNameRef.current.value);
    setTodos((prevTodos) => {
      //...prevTodosで配列の中身を展開,spred構文
      return [...prevTodos, {id: "1", name: todoNameRef.current.value, complete: false}]
    })
    // todoNameRef.current.value = null;

  }

  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button>完了済みタスク削除</button>
      <div>残りタスク数: 0</div>
    </>
  );
}

export default App;
