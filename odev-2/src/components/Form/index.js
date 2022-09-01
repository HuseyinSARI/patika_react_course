import { useState } from "react";


function Form({ todos, setTodos }) {   // üst component den içinde veriler olan "todos" ve onu değiştirecek metod olan "setTodos" fonksiyonunu aldık

  const [form, setForm] = useState("");    // formdaki değişiklileri tutmak ve işlem yapmak için state oluşturduk.

  const onSubmit = (e) => {  // form gönderirken yapılacak işlemer
    e.preventDefault();     

    if (form === "") {    // boş form göndermesini engelledik
      return false;
    }

    setTodos([...todos,{
                            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,     // yeni eklenin id si = son eklenenin id si + 1
                            todo: form,
                            checked: false,
                        },
    ]);

    setForm("");  // gönderdikten sonra formda kalan verileri temizlemek için
   
  };


  return (
    <header className="header"> 
        <h1>todos</h1>            
        <form onSubmit={onSubmit}>    {/* formdan veriyi gönderirken çalışan metod */}
            <input className="new-todo" placeholder="What needs to be done?" autoFocus value={form} onChange={(e) => setForm(e.target.value)} />  {/* formdan veriyi state e atar */}
        </form>
    </header>
  )
}

export default Form