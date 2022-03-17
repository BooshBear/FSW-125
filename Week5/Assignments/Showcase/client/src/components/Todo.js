import { useState } from "react";
import TodoHandler from "./TodoHandler";

function Todo({deleteTodo, name, description, _id, editTodo}){
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            {!editToggle ?
            <>
                <h1>Name: {name}</h1>
                <p>Description: {description}</p>
                <button id="deleter" onClick={() => deleteTodo(_id)}>Delete</button>
                <button id="editer" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <TodoHandler
                    name={name}
                    description={description}
                    _id={_id}
                    btnText='Submit Edit'
                    submit={editTodo}/>
                <button id="editer" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            }
        </div>
    );
}

export default Todo;