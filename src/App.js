import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  //     ↓オブジェクトの変数　↓管理するやつ
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>追加</button>
      <button>完了済みタスク削除</button>
      <div>残りタスク数: 0</div>
    </>
  );
}

export default App;
