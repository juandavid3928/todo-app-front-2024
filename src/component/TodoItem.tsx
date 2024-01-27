import {TodoItems} from "./TodoList.tsx";

interface TodoItemProps {
    id: string | number
    description: string
    done: boolean
    onEditTodo: (todo: TodoItems) => void
    onRemoveTodo: (id: string | number) => void
    onCompleteTodo: (id: string | number) => void
}

const TodoItem = ({id, description, done, onEditTodo, onRemoveTodo, onCompleteTodo}: TodoItemProps) => {
    const removeTodo = () => {
        onRemoveTodo(id)
    };

    const editTodo = () => {
        const editTodo: TodoItems = {
            id,
            description,
            done,
        }

        onEditTodo(editTodo)
    };

    const completeTodo = () => {
        onCompleteTodo(id)
    };


    return (
        <li className="list-group-item d-flex justify-content-between mb-3">
            <button className="btn" onClick={completeTodo}>{done ? "✔" : "❌"}</button>
            <span className="align-self-center"> {description} </span>
            <span>
            <button className="btn btn-outline-primary m-2" onClick={editTodo}>Editar</button>
            <button className="btn btn-outline-danger" onClick={removeTodo}>borrar</button>
            </span>
        </li>
    );
};

export {TodoItem};

