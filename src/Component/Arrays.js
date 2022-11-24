import DisplayTask from "./DisplayTask"

export default function Arrays({ data, deleteTask }) {


    return  <div  className="bg-secondary p-3 m-2" >

            <p className="text-light">{data.titre}</p>
            {data.tasks.map((task, index) => {
                return <div key={index}>
                    <DisplayTask task={task} deleteTask={deleteTask} />

                </div>

            })}


        </div>
}