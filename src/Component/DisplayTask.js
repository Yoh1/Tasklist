export default function DisplayTask({task,deleteTask}){

    return(
        <div className="bg-white"  draggable="true" onDragStart={(e)  => e} >
            <p>{task.intitule}</p>
            <button type="button"  onClick={() => {
        deleteTask(task.id)
    }} className="btn-close" aria-label="Close"></button>
        </div>
    )
}