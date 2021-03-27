import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import yup from './MyYupExtended/MyYupExtended';

interface IFormInputs {
    firstName: string
    age: number
}

const schema = yup.object().shape({
    // firstName: yup.string().required(),
    firstName: yup.string().emptyAsUndefined().mustBe3(),
    age: yup.number().positive().integer().required(),
});

export default function App() {
    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{margin: 80}}>
            <input type="text" name="firstName" ref={register} />
            <p>{errors.firstName?.message}</p>

            <input type="text" name="age" ref={register} />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    );
}