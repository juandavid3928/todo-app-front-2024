import {TodoItem} from "./TodoItem.tsx";

interface TodoItemProps {
    todos: TodoItems[];
    onEditTodo: any
    onRemoveTodo: (id: string | number) => void;
    onCompleteTodo: (id: string | number) => void;
}

export interface TodoItems {
    id: string | number;
    description: string
    done: boolean
}

const TodoList = ({todos, onEditTodo, onRemoveTodo, onCompleteTodo}: TodoItemProps) => {

    return (
        <ul className="list-group">
            {
                todos?.map((todoItem) => (
                    <TodoItem
                        key={todoItem.id}
                        id={todoItem.id}
                        description={todoItem.description}
                        done={todoItem.done}

                        onEditTodo={onEditTodo}
                        onRemoveTodo={onRemoveTodo}
                        onCompleteTodo={onCompleteTodo}
                    />
                ))
            }
        </ul>
    );
};

export {TodoList};