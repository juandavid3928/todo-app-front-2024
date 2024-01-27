import {TodoList} from "./TodoList.tsx";
import {TodoInput} from "./TodoInput.tsx";
import {useEffect, useReducer, useState} from "react";
import {reducerTodo} from "../reducer/reducerTodo.ts";
import {finalData, initData, TodoProps} from "../data/todoData.ts";

const Todos = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [data, dispatch] = useReducer(reducerTodo, initData, () => finalData() || initData)
    const [editTodo, setEditTodo] = useState({id: "", description: "", done: false})

    const onAddTodo = (todo: TodoProps) => {
        const action = {
            type: "[TODO] todo add",
            payload: todo
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(action)
    };

    const onEditTodo = (todo: TodoProps) => {
        setEditTodo({
            id: todo.id,
            description: todo.description,
            done: todo.done,
        })

    };

    const onUpdateEdit = (todoUpdate: TodoProps) => {
        const action = {
            type: "[TODO] edit todo",
            payload: todoUpdate
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(action)
    };

    const onRemoveTodo = (id: string | number) => {
        const action = {
            type: "[TODO] remove todo",
            payload: id
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(action)
    };

    const onCompleteTodo = (id: string | number) => {
        const action = {
            type: "[TODO] complete todo",
            payload: id
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(action)
    };


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(data) || '')
    }, [data]);


    return (
        <>
            <h1>Tareas</h1>
            <h2>Totales <span style={{color: "#00BA00"}}>{data?.length}</span> <small
            >| Pendientes <span style={{color: "#ff003e"}}>{data?.filter((todo: {
                done: boolean;
            }) => !todo.done).length}</span></small></h2>

            <div className="row">
                <div className="col-7 mt-5">
                    {
                        data?.length
                            ?
                            <TodoList
                                todos={data}
                                onEditTodo={onEditTodo}
                                onRemoveTodo={onRemoveTodo}
                                onCompleteTodo={onCompleteTodo}
                            />
                            :
                            <h2>Tareas no disponibles</h2>
                    }
                </div>

                <div className="col-5">
                    <TodoInput
                        onAddTodo={onAddTodo}
                        editTodo={editTodo}
                        onUpdateEdit={onUpdateEdit}
                    />
                </div>
            </div>
        </>
    );
};

export {Todos};