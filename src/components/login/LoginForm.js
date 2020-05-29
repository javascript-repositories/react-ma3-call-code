import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./errorMessage/ErrorMessage";

const schema = yup.object().shape({
    username: yup.string().required("Username is required dummy"),
    password: yup.string().required("Email is required").min(4),
});

function Loginform() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    console.log("errors", errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" ref={register} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default Loginform;
