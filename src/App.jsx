import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <AddTodo selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
      <Todos setSelectedTodo={setSelectedTodo} />
    </div>
  );
}
export default App;
