import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup } from "react-bootstrap";

const RegisterModal = () => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
             ...form, 
             [field]: value 
        });

        if(!!errors[field]) {
            setErrors({
                ...errors,
                [field]: null
            });
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateForm = () => {
        const { fname, lname, uname, email, pass, conf } = form;
        const newErrors = {};

        if(!fname || fname.length > 30)
            newErrors.fname = "First name must be between 1 and 30 characters long";
        if(!lname || lname.length > 30)
            newErrors.lname = "Last name must be between 1 and 50 characters long";
        if(!uname || uname.length > 100)
            newErrors.uname = "Username must be between 1 and 100 characters long";
        if(!email || !validateEmail(email))
            newErrors.email = "Email is invalid";
        if(pass.length < 8 || pass.length > 60)
            newErrors.pass = "Password must be between 8 and 60 characters long";
        // if(conf.length < 8 || conf.length > 60)
        //     newErrors.conf = "Password must be between 8 and 60 characters long";

        return newErrors;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formError = validateForm();

        if(Object.keys(formError).length > 0) {
            setErrors(formError);
        }
        else {
            alert("Form submitted");
        }

        console.log(form);
    }

    return (
        <Form id="registerForm">
            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="First Name" 
                            required
                            value={form.fname || ""}
                            onChange={(e) => setField("fname", e.target.value)}
                            isInvalid={!!errors.fname}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.fname}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Last Name" 
                            required
                            value={form.lname}
                            onChange={(e) => setField("lname", e.target.value)}
                            isInvalid={!!errors.lname} 
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lname}
                        </Form.Control.Feedback>
                    </InputGroup>  
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="Username"
                            value={form.uname}
                            onChange={(e) => setField("uname", e.target.value)}
                            isInvalid={!!errors.uname}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.uname}
                        </Form.Control.Feedback>
                    </InputGroup>  
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-at" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="email" 
                            placeholder="Email" 
                            required
                            value={form.email || ""}
                            onChange={(e) => setField("email", e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </InputGroup> 
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            required
                            value={form.pass || ""}
                            onChange={(e) => setField("pass", e.target.value)}
                            isInvalid={!!errors.pass}
                         />
                         <Form.Control.Feedback type="invalid">
                            {errors.pass}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                        </InputGroup.Text>
                        <Form.Control 
                            type="password" 
                            placeholder="Confirm Password" 
                            required
                            value={form.conf || ""}
                            onChange={(e) => setField("conf", e.target.value)}
                            isInvalid={!!errors.conf}
                         />
                         <Form.Control.Feedback type="invalid">
                            {errors.conf}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                {/* <Form.Group controlId="submit">
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </Form.Group> */}
            </Form.Group>
        </Form>
    );
}

export default RegisterModal;