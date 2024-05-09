/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ addTodo }) {
   const [todoTitle, setTodoTitle] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      addTodo(todoTitle);
      setTodoTitle('');
   }

   const handleTodoTitleChange = (event) => {
      const inputValue = event.target.value;
      setTodoTitle(inputValue);
   }

   return (
      <div style={styles.container}>
         <form onSubmit={handleSubmit}>
            <input 
               type="text" 
               style={styles.formInput} 
               value={todoTitle} 
               onChange={handleTodoTitleChange} 
            />
            <button style={styles.button} type="submit">Add Todo</button>
         </form>
      </div>
   )
}

const styles = {
   container: {
      marginBottom: '32px'
   },
   formInput: {
      width: '40%',
      margin: '0 auto',
      height: '66px',
      padding: '0 16px',
      fontSize: '16px'
   },
   button: {
      height: '72px',
      fontSize: '16px'
   }

}

export default TodoForm;