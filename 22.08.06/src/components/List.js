import React from "react";



export default function List({todoData,setTodoData}) { // List(props) 하고 아래에 props.todoData를 할수도 있지만 {todoData}로 하는게 더 깔끔하다.

    const btnStyle= { // eslint-disable-line no-unused-vars
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
      };
       
    const handleClick = (id) => {
      let newTodoData =todoData.filter((data) => data.id !== id);
      console.log("newTdoData",newTodoData);
      setTodoData(newTodoData);
    };
    const listStyle = (completed) => {
      return {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: completed ? "line-through": "none",
      };
    };
    
    return (
        <div>
            {todoData.map((data) => (
        <div style={listStyle(data.completed)} key={data.id}>
         
            <input 
              type="checkbox" 
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked ={data.completed} />
            {" "}{data.title}
            <button 
              style={this.btnStyle} 
              onClick={()=> handleClick(data.id)}
            >
            x
            </button>
      
        </div>
        ))}
            
        </div>
    )
}