import { useState } from "react";
import Button from "./button";

function Inputtask() {
  const [task, setTask] = useState([]); // State for storing the list of tasks
  const [input, setInput] = useState(""); // State for managing current input value

  // Function to save new task
  const clicksave = () => {
    if (input.trim() === "") return; // Prevent adding empty tasks

    // Add a new object with task text + status (done = false by default)
    setTask([...task, { text: input, done: false }]);

    setInput(""); // Reset input field after saving
  };

  // Function to toggle a task's "done" state
  const donetsk = (index) => {
    const update = task.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setTask(update); // Update task state with modified done status
  };

  // Function to delete a task based on its index
  const deletetask = (index) => {
    const update = task.filter((_, i) => i !== index);
    setTask(update); // Update state with filtered list (task removed)
  };

  return (
    <>
      {/* Input section for adding tasks */}
      <div className="mt-5 border-lime-400 shadow-md flex justify-center items-center gap-12">
        {/* Controlled input field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex shadow-md border border-indigo-400 text-black rounded-2xl"
        />

        {/* Save button */}
        <Button
          className="px-6 py-2 bg-indigo-400 text-white rounded-2xl"
          text="Save"
          onClick={clicksave}
        />
      </div>

      {/* Task list rendering */}
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        {task.length === 0 ? (
          // If no task exists, show message
          <p className="rounded-xl h-12 bg-indigo-400 text-white font-semibold w-1/2 flex justify-center items-center">
            No task has been added
          </p>
        ) : (
          // Map over each task and display it
          task.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-1/2 px-4 py-3 rounded-lg shadow-md 
              ${item.done ? "bg-teal-400" : "bg-indigo-400"}`} // Change background based on done status
            >
              {/* Task text */}
              <span className="text-lg font-bold text-white">{item.text}</span>

              {/* Button to toggle task done/undone */}
              <Button
                className="bg-indigo-600 text-white px-3 py-2 rounded-lg"
                text={item.done ? "UNDO" : "MARK AS DONE"}
                onClick={() => donetsk(index)}
              />

              {/* Button to delete task */}
              <Button
                className="bg-red-600 px-3 py-2 rounded-lg text-white"
                text="DELETE"
                onClick={() => deletetask(index)}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Inputtask;
