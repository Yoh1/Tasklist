import DisplayTask from "./DisplayTask"

export default function Arrays({ data, deleteTask }) {


    return  <div className="table">

            <p className="text-light">{data.titre}</p>
            {data.tasks.map((task, index) => {
                return <div key={index}>
                    <DisplayTask task={task} deleteTask={deleteTask} />

                </div>

            })}


        </div>
}