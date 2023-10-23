import React from "react";
// import PropTypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div>
            <div 
                style={{height: props.error? '9.3vh': '10vh'}} 
                className="form-group">
                <label htmlFor={props.id}>{props.label}</label>
                <input 
                    type={props.type}
                    id={props.id} 
                    onChange={props.handleChange} 
                    value={props.value} 
                    className="form-control"  
                    name={props.name}
                    error={props.error}
                    autoComplete="true"
                />
            </div>
            {!props.value && ((props.error) && (<div style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5,marginLeft: 80, backgroundColor: '#f79595'}}>{props.error}</div>))}
            {}
        </div>
    )
}
// TextInput.propTypes = {
//     name: PropTypes.object.isRequired,
//     handleChange: PropTypes.func.isRequired,
//     error: PropTypes.object.isRequired
// }
export default TextInput;