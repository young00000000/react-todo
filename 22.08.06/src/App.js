import React, { useState } from 'react';
import "./App.css";
import Form from './components/Form';
import List from './components/List';

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] =useState("");


 

  const handleSubmit =(e) => {// eslint-disable-line no-unused-vars
    e.preventDefault();
    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData(prev =>
      [...prev, newTodo]);// 함수를 사용해서 전TodoData를 가져오고 newTodoData추가.  기존 데이터에 새로운 데이터를 추가해주고 칸 비워주기
      setValue("");
  };

  
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return(
    <div className="container">
    <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData= {todoData} setTodoData={setTodoData} />
          
        <Form handleSubmit={handlesubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}