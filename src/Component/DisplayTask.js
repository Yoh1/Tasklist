export default function DisplayTask({task,deleteTask}){

    return(
        <div className="bg-white">
            <p>{task.intitule}</p>
            <button type="button"  onClick={() => {
        deleteTask(task.id)
    }} class="btn-close" aria-label="Close"></button>
        </div>
    )
}