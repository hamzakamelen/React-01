// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedTodo, setEditedTodo] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos([...todos, { text: newTodo, isCompleted: false }]);
//     setNewTodo('');
//   }

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditedTodo(todos[index].text);
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const updatedTodos = [...todos];
//     updatedTodos[editingIndex] = { text: editedTodo, isCompleted: false };
//     setTodos(updatedTodos);
//     setEditingIndex(null);
//     setEditedTodo('');
//   }

//   const handleCancel = () => {
//     setEditingIndex(null);
//     setEditedTodo('');
//   }

//   const handleDelete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo.text}
//             {editingIndex === index ? (
//               <form onSubmit={handleUpdate}>
//                 <input value={editedTodo} onChange={e => setEditedTodo(e.target.value)} />
//                 <button type="submit">Update</button>
//                 <button type="button" onClick={handleCancel}>Cancel</button>
//               </form>
//             ) : (
//               <>
//                 <button type="button" onClick={() => handleEdit(index)}>Edit</button>
//                 <button type="button" onClick={() => handleDelete(index)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;