import React from 'react'
import Todo from './Todo'


//↓　コンポーネント
const TodoList = ({todos, toggleTodo}) => {
  return (
    //↓　propsのtodosを表示 {}を付けることによってJSの変数を使える
    //    <div>{props.todos}</div>
    //<div>{todos}</div>
    //map関数は配列の要素を一つずつ取り出して処理を行う関数
    //keyは一意の値を入れる,keyは
    todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>)
  )
}

export default TodoList