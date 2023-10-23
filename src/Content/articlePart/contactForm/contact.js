import React, { useState } from "react";
import "./contact.css";
import TextInput from "../../../shared/textInput";
import { formSubmitApi } from "../../../formApi/api";
//import { AlertIcon, AlertTitle, AlertDescription, Alert } from "@chakra-ui/alert";


const ContactMe = () => {
    const [alartUseer, setAlartUser] = useState(false);
    const [error, setError] = useState({});
    const [name, setName] = useState({
        id: null,
        first_name: null || "",
        last_name: null || "",
        email: null || "",
        message: null || ""
    });

    const handleChange = ({target}) => {
        // console.log(target);
        setName({...name, [target.name]: target.value});
    }

    function isFormValid() {
        let err = {};
        if (!name.first_name) err.first_name = 'First name is required';
        if (!name.last_name) err.last_name = 'Last name is required';
        if (!name.email) err.email = 'Email is required';
        if (!name.message) err.message = 'Message is required';
        setError({...error, ...err});
        return Object.keys(err).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmitApi("https://formkeep.com/f/93105d647cb1", name)
        // console.log('err', error);
        if(!isFormValid()) return;
        setName({
            id: null,
            first_name: null || "",
            last_name: null || "",
            email: null || "",
            message: null || ""
        })
        setAlartUser(true)
        // console.log(name);
        // setName((name) => {
        //     // Object.values(e.target)
        //     let valu = ''
        //     for (let val in name) {
        //         val = ''
        //         valu+= val
        //         console.log(val)
        //     }
            
        //     return {...name, [e.target.name]: valu}
        // });
        // console.log(name);
    }

    return (
        <div>
            <div style={{height: error? '83vh':'75vh'}} className="contact-form">
                <h3 className="form-heading">Contact Form</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextInput 
                            type={'text'}
                            id={'fname'}
                            label={'First Name:'} 
                            name={'first_name'} 
                            value={name.first_name}
                            handleChange={handleChange}
                            error={error.first_name}
                        />
                    </div>

                    <div>
                        <TextInput 
                            type='text'
                            id={'lname'}
                            label={'Last Name:'} 
                            name={'last_name'} 
                            value={name.last_name}
                            handleChange={handleChange}
                            error={error.last_name}
                        />
                    </div>

                    <div>
                        <TextInput 
                            type={'email'}
                            id={'email'}
                            label={'Email:'} 
                            name={'email'} 
                            value={name.email}
                            handleChange={handleChange}
                            error={error.email}
                        />
                        
                    </div>

                    <div className="form-group longtext">
                        <label htmlFor="message" >Message:</label>
                        <textarea onChange={handleChange} value={name.message} rows={6} cols={31} id="message" name="message" className="form-control"/>
                        {!name.message && ((error) && (<div style={{borderBottomRightRadius: 5, borderBottomLeftRadius: 5,marginLeft: 80, backgroundColor: '#f79595'}}>{error.message}</div>))}
                    </div>
                    <div>
                        <button>Submit</button>
                        <button>Cancel</button>
                    </div>
                </form>
                {alartUseer && (<div style={{margin: '0 auto', textAlign: 'center'}}>Form submitted. Thanks!</div>)}
                {/* <Alert status='success'>
                    <AlertIcon  />
                    <AlertTitle mr={2}>Data sent!</AlertTitle>
                    <AlertDescription>Thanks for reaching out</AlertDescription>
                    <CloseButton position='absolute' right='8px' top='8px' />
                </Alert> */}
            </div>
        </div>
    )
}

export default ContactMe