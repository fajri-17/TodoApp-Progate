/* eslint-disable react/prop-types */
function Todos({ todos }) {
   return (
      <div>
         {todos.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
         ))}
      </div>
   )
}

export default Todos;