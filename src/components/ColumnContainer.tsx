import {Column, Id, Task} from "../types";
import TrashIcon from "../icons/TrashIcon";
import {SortableContext} from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";
import {useMemo} from "react";
import {useDroppable} from "@dnd-kit/core";

interface Props {
    column: Column;
    tasks: Task[];
    deleteTask: (id: Id) => void;
}

function ColumnContainer(props: Props) {
    const {column, tasks, deleteTask} = props;

    const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

    const {setNodeRef: setDroppableRef} = useDroppable({
        id: `${column.id}`,
        data: {
            type: "Column",
            columnId: column.id,
        },
    });


    return <div ref={setDroppableRef}
                className=" flex flex-col border-2 border-gray-400"
    >
        <div
            className="bg-indigo-400 text-lg text-white h-16 rounded-b-none font-bold border-gray-600 border-2 flex items-center justify-center">
            {column.title}
        </div>
        <div className="flex flex-grow flex-col gap-3 overflow-y-auto p-2 mt-1 overflow-x-hidden bg-white">
            <SortableContext items={tasksIds}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
                ))}
            </SortableContext>
        </div>
    </div>
}

export default ColumnContainer;
