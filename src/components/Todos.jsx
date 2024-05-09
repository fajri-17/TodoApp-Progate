import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted} 
         />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
