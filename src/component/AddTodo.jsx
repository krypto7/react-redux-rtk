import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, upadateTodo } from "../features/todo/todoSlice";

function AddTodo({ selectedTodo, setSelectedTodo }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Update the input field when selectedTodo changes
  useEffect(() => {
    if (selectedTodo) {
      setInput(selectedTodo.text);
    } else {
      setInput("");
    }
  }, [selectedTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      // If we are editing a todo, dispatch the update
      dispatch(upadateTodo({ id: selectedTodo.id, text: input }));
      setSelectedTodo(null); // Reset selectedTodo after updating
    } else {
      // Otherwise, add a new todo
      dispatch(addTodo(input));
    }
    setInput(""); // Clear input after submitting
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {selectedTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
