import React from 'react';
import {useForm} from "react-hook-form";

export const TodoForm = ({ todo, onSubmit }) => {
    const {register, handleSubmit} = useForm({
        defaultValues: { text: todo ? todo.text : "" },
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Text: </label>
                <input {...register("text")}  type="text" name="text" id="text" className="form-control"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Save Todo</button>
            </div>
        </form>
    );
};