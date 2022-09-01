import {useState} from 'react'
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

function Todo() {

    const [todos, setTodos] = useState([]);
    const [hide, setHide] = useState("All");

    console.log(todos);
  return (
    <div>
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos}  hide={hide} />
        <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>
    </div>
  )
}

export default Todo