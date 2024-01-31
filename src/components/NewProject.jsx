import Input from "./Input.jsx"
import { useRef } from "react"
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave() {
        const enterTitle = title.current.value
        const enterDescription = description.current.value
        const enterDueDate = dueDate.current.value

        // validation ...
        if(enterTitle === "" || enterDescription === "" || enterDueDate === "")  {
            modal.current.open();
            return
        }
        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate
        })
    }
    return <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
            <p className='text-stone-600 mb-4' >Please make sure you provide a valid value for enery input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button  onClick={onCancel} className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button></li>
                <li>
                    <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-steon-950">
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" ></Input>
                <Input ref={description} label="Description" textarea></Input>
                <Input type="date" ref={dueDate} label="Due date"></Input>
            </div>
        </div>
    </>

}