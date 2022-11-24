import { useState } from "react"

export default function FormAddtask({ tables,addTask,closeFormAddTask }) {

        const [task,setTask] = useState('')
        const [id,setId] = useState(1)

    return (
        <div>
            <form   onSubmit={(e) =>{
                e.preventDefault()
                addTask(task,id)

            }}>
                <div>
                    <label>task</label>
                    <select value={id}  onChange={(e) => {

                            setId(e.target.value)
                    }}>
                        {tables.map((table, index) => {
                            return <option key={index} value={table.id}>{table.titre}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Task a saisir</label>
                    <input onChange={(e) => {
                        setTask(e.target.value)
                    }} type="text" />
                </div>
                <input type="submit" value="envoyer" />
            </form>
        <button type="button"  onClick={() => {closeFormAddTask()}} class="btn-close" aria-label="Close"></button>
        </div>
    )
}