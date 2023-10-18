import React from "react";

const TextInput = (props) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor={props.id}>First Name:</label>
                <input type="text"
                id={props.id} 
                onChange={handleChange} 
                value={props.value} 
                className="form-control"  
                name={props.name} />
            </div>
        </div>
    )
}

export default TextInput;