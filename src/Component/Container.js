import { useRef, useState } from "react";
import Arrays from "./Arrays";
import FormAdd from "./FormAdd";
import FormAddtask from "./FormAddtask";
import FormSup from "./FormSup";
import { v4 as uuidv4 } from 'uuid';
import { Form, Link } from "react-router-dom";


export default function Container() {

    const [tables, setTables] = useState([{
        id: 1,
        titre: 'Projet resources',
        tasks: [{

            id: 1,
            intitule: "faire une page homepage"
        },
        {

            id: 2,
            intitule: "faire une page homepage"
        }]

    },
    {
        id: 2,
        titre: 'Sujet de la prochaine réunion ',
        tasks: [{

            id: 3,
            intitule: "faire une page homepage"
        },
        {

            id: 4,
            intitule: "faire une page homepage"
        }]
    },
    {
        id: 3,
        titre: 'A faire',
        tasks: [{

            id: 5,
            intitule: "faire une page homepage"
        },
        {

            id: 6,
            intitule: "faire une page homepage"
        }]
    },
    {
        id: 4,
        titre: 'En cours',
        tasks: [{

            id: 7,
            intitule: "faire une page homepage"
        },
        {

            id: 8,
            intitule: "faire une page homepage"
        }]
    }])

    const [display, setDisplay] = useState(false);
    const [displayTask, setDisplayTask] = useState(false);
    const [displaySupArray, setdisplaySupArray] = useState(false);



   
      


    function addTable(title) {

        let newTables = [...tables];

        newTables.push({
            id: tables.length + 1,
            titre: title,
            tasks: []
        })

        setTables(newTables);
    }


    function sup(id) {
        console.log(tables);
        let newTables = [];
        for (let t of tables) {

            if (Number(id) !== Number(t.id)) {
                newTables.push(t);
            }
        }

        setTables(newTables);
    }

    const addTask = (task, id) => {
        let newTables = [];
        for (let array of tables) {

            if (array.id === Number(id)) {

                newTables.push(
                    {
                        ...array,
                        tasks: [...array.tasks, { id: uuidv4(), intitule: task }]
                    })
            } else {

                newTables.push(array)
            }
        }
        setTables(newTables)
    }

    const deleteTask = (id) => {

        let newTables = [...tables]
        for (let d of newTables) {
            let newTasks = []
            for (let dd of d.tasks) {

                if (dd.id.toString() !== id.toString()) {

                    newTasks.push(dd)
                }

            }
            d.tasks = newTasks
        }

        setTables(newTables)
    }

    const closeFormAdd = () => {

        setDisplay(false)
    }


    const closeFormAddTask = () => {

        setDisplayTask(false)
    }

    const closeSupArray = () => {

        setdisplaySupArray(false)
    }

    let contentFormAdd = <></>;
    if (display) {
        contentFormAdd = <FormAdd closeFormAdd={closeFormAdd} addTable={addTable} />
    }

    let contenFordAddTask = <></>;
    if (displayTask) {
        contenFordAddTask = <FormAddtask tables={tables} closeFormAddTask={closeFormAddTask} addTask={addTask} />
    }

    let contentSupArray = <></>;
    if (displaySupArray) {

        contentSupArray = <FormSup tables={tables} closeSupArray={closeSupArray} sup={sup} />
    }


    return <div className="container" >
        <Link to="/" className="btn btn-primary">Retour a l'accueil</Link>
        <div className="container-fluid mb-5">
            {contentFormAdd}
            {contenFordAddTask}
            {contentSupArray}
            <button onClick={() => {
                setDisplay(true)
            }} className="btn btn-primary">Ajouter un tableau</button>
            <button onClick={() => {
                setDisplayTask(true)
            }} className="btn btn-primary">Ajouter une tâche</button>
            <button onClick={() => {
                setdisplaySupArray(true)
            }} className="btn btn-primary">Supprimer une tâche</button>

            <div className="d-flex">
                {tables.map((table, index) => {
                    return <Arrays  key={index} data={table} closeSupArray={closeSupArray} deleteTask={deleteTask} />
                })}

            </div>

        </div>


    </div>
}
