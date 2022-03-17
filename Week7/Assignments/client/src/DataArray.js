import { useState } from "react";
import DataHandler from "./DataHandler";

function Ary({title, description, items, totalAmount, _id,
    deleteAry, editAry}) {  
    const [editToggle, setEditToggle] = useState(false);
    return (
    <div>
        {!editToggle ?
        <>
           <h1>Name: {title}</h1>
           <p>Description: {description}</p>
           <p>Total Amount: {totalAmount}</p>
           <button id="deleter"onClick={() => deleteAry(_id)}>Delete</button>
           <button id="editer" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>
        :
        <>
            <DataHandler
                title={title}
                description={description}
                items={items}
                totalAmount={totalAmount}
                btnText='Submit Edit'
                submit={editAry}
                _id={_id}/>
            <button id="editer" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
        </>   
        }
    </div>
    );
}

export default Ary;