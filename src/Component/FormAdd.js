import { useState } from "react";


export default function FormAdd({ addTable,closeFormAdd }) {

    const [title, setTitle] = useState('')



    return <div>

        <form className="w-100" onSubmit={(e) => {
            e.preventDefault()
            addTable(title)
        }}>
            <label>Titre</label>
            <input onChange={(e) => {
                setTitle(e.target.value);
            }} type='text' />
            <input className="btn btn-primary ms-2" type="submit" value="envoyer" />
        </form>
        <button type="button"  onClick={() => {closeFormAdd()}} class="btn-close" aria-label="Close"></button>
    </div>


}