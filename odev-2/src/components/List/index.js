import { useState } from "react";

function List({ todos, setTodos, hide }) {

const [flag, setFlag] = useState(false)

  const isCompleted = (e) => {
    if (e.checked === true && hide === "All") {                 //footer kısmında set edilen hide state ine göre list deki elemanların görünürlüğünü düzenliyor
      return "completed";
    } else if (e.checked === true && hide === "Active") {
      return "completed hidden";
    } else if (e.checked === false && hide === "Completed") {
      return "hidden";
    }
  };

  const checkTodo = (e) => {                                  // bütün todos lar içerisinde dönerek id si seçilen id ye eşit olan todos u buluyor
    const addTodos = todos.map((todo) => {                      // checked değişkenini true ise false, false ise tru yapıyor ve  setTodos ile geri setliyor
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(addTodos);
  };


  const checkAll = () => {   
    
    if(flag){
        const allTodos = todos.map((todo) => {        
            return {...todo, checked :true } 
        });
        setFlag(!flag)
        setTodos(allTodos);

    }else{
        const allTodos = todos.map((todo) => {        
            return {...todo, checked :false } 
        });
        setFlag(!flag)
        setTodos(allTodos);
    }
    
    console.log("tıklandı flag:" , flag);


    
  };

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(e.target.id))
    );
  };

  return (
    <div className="main">
      <input className="toggle-all"  type="checkbox"   />
      <label htmlFor="toggle-all" onClick={checkAll}> Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id} className={`${isCompleted(todo)}`}>
            <div>

              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.checked}
                checked = {todo.checked}
                id={todo.id}
                onClick={checkTodo}
              />

              <label>{todo.todo}</label>

              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
              ></button>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
