
import { useState } from "react";

export default function FormSup({ sup, tables,closeSupArray }) {

    const [id, setId] = useState(1);

    return (<div>

        <form onSubmit={(e) => {
            e.preventDefault()
            sup(id)
        }}>
            <select onChange={(e) => {

                setId(e.target.value)

            }} value={id}>
                {tables.map((table, index) => {

                    return <option key={index} value={table.id}>{table.titre}</option>
                })}
            </select>
            <input type="submit" className="btn btn-danger ms-2" value="Supprimer" />
        </form>
        <button type="button"  onClick={() => {closeSupArray()}} class="btn-close" aria-label="Close"></button>
        
    </div>


    )
}