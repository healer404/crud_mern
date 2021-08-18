import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const EditTodo = () => {
  const [todo, setTodo] = useState();

  const {register, handleSubmit} = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });

  const history = useHistory();

  useEffect(() => {
    setTodo({
      text: 'food'
    });
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert(JSON.stringify(data));
    history.push('/');
  });
  return (
      <div className="container">
        <div className="mt-3">
          <h3>Edit ToDo Item</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="text">Text: </label>
              <input {...register("text")} type="text" name="text" id="text" className="form-control"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Create Todo</button>
            </div>
          </form>
        </div>
      </div>
  );
};