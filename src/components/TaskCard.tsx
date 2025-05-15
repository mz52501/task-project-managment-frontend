import {Id, Task} from "../types";
import TrashIcon from "../icons/TrashIcon";
import {useState} from "react";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
}

function TaskCard({task, deleteTask}: Props) {
    const [mouseIsOver, setMouseIsOver] = useState(false);

    const {setNodeRef, attributes, listeners, transform, transition, isDragging} = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        }
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return <div ref={setNodeRef}
                    style={style}
                    className=" text-white p-2.5 h-14 items-center
         flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative border-2 border-indigo-400"
        >
        </div>
    }

    return <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onMouseEnter={() => setMouseIsOver(true)}
        onMouseLeave={() => setMouseIsOver(false)}
        className="bg-blue-500 text-white p-2.5 h-14 items-center
         flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative border-2 border-indigo-400">
        {task.content}
        {mouseIsOver &&
            <button
                onClick={() => deleteTask(task.id)}
                className="stroke-white absolute right-4 top-1/2-transform-y-1/2 bg-red-500 p-2 rounded
            opacity-60 hover:opacity-100">
                <TrashIcon/></button>}
    </div>
}

export default TaskCard;
