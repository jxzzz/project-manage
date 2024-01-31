import { useRef, useState } from "react"

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState("");
    const inputRef = useRef();

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }
    function handleClick() {
        if(enteredTask.trim()) {
            onAdd(enteredTask)
        }
        setEnteredTask("")
    }
    return (
        <div className="flex items-center gap-4">
            <input value={enteredTask} ref={inputRef} onChange={handleChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" name="" id="" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-900">Add Task</button>
        </div>
    )

}