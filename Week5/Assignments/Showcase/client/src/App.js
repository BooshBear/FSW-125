import {useState, useEffect} from 'react'
import axios from 'axios'
import Todo from './components/Todo';
import TodoHandler from './components/TodoHandler';
import './App.css';
//const { v4: uuidv4 } = require('uuid');

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = () => {
    axios.get('/item')
    .then(res0 => setTodos(res0.data))
    .catch(err => console.log(err))
  };

  const addTodo = (newTodo) => {
    axios.post('/item', newTodo)
    .then(res0 => {
      setTodos(prevTodos => [...prevTodos, res0.data])
    })
    .catch(err => console.log(err))
  };

  const deleteTodo = (todoId) => [
    axios.delete(`/item/${todoId}`)
    .then (res0 => {
      setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId));
    })
    .catch(err => console.log(err))
  ]

  const editTodo = (updates, todoId) => {
    axios.put(`/item/${todoId}`, updates)
    .then(res0 => setTodos(prevTodos => prevTodos.map(todo => todo._id !== todoId ? todo : res0.data)))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTodo();
  }, []);

  const todoList = todos.map(todo =>
    <Todo {...todo}
     deleteTodo={deleteTodo}
     editTodo={editTodo}
     key={todo._id}/>)

  return (
    <div>
      <TodoHandler 
        btnText='addTodo'
        submit={addTodo}/>
      {todoList}
    </div>
  );
}

export default App;
