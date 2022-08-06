import React from 'react'

export default function Form({handlesubmit, value, setValue}) {
      
  const handleChange = (e) => {// eslint-disable-line no-unused-vars
    setValue(value);
  };

  return (
    <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex:"10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요"
            value={value}               
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="입력"
            className="btn"
            style={{flex: '1'}}
          />
    </form>
  )
}
