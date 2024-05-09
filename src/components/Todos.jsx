import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
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
