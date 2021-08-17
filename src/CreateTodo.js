import React from 'react';
import { useForm } from 'react-hook-form';

export const CreateTodo = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
        <div className="container">
          <div className="mt-3">
            <h3>Create ToDo Item</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="text">Text: </label>
                <input ref={register} type="text" name="text" id="text" className="form-control"/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Create Todo</button>
              </div>
            </form>
          </div>
         </div>
  );
};
