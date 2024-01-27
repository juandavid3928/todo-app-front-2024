import React, {useEffect, useState} from "react";
import {Message} from "../common/Message.tsx";

export interface TodoInputProps {
    onAddTodo: any
    editTodo: any
    onUpdateEdit: any
}

export interface todoProps {
    todo: EditTodoPros
}

export interface EditTodoPros {
    id: string | number
    description: string
    done: boolean
}

const TodoInput = ({onAddTodo, editTodo, onUpdateEdit,}: TodoInputProps) => {
    const [inputData, setInputData] = useState<string>('')
    const [messageError, setMessageError] = useState<boolean>(false)
    const [messageInput, setMessageInput] = useState('')

    const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value)
        setMessageError(false)
    };

    const onSubmitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (inputData.length < 4) {
            setMessageError(true)
            setInputData('')
            return
        }

        if (editTodo.id) {
            const updateTodo = {
                id: editTodo.id,
                description: inputData,
                done: editTodo.done
            }

            onUpdateEdit(updateTodo)

            editTodo.id = ''
            setInputData('')
            setMessageInput('')
            setMessageError(false)
        } else {
            onAddTodo({
                id: new Date().getMilliseconds(),
                description: inputData,
                done: false
            })

            setInputData('')
            setMessageError(false)
        }

    };

    useEffect(() => {
        setInputData(editTodo.description || '')
    }, [editTodo.description]);

    useEffect(() => {
        editTodo?.id ? setMessageInput('Editar') : setMessageInput('Agregar')
    }, [editTodo?.id]);

    return (
        <>
            <h4>titulo</h4>
            <hr/>

            <form onSubmit={(event) => onSubmitData(event)}>
                <input
                    type="text"
                    placeholder="Agregar tarea"
                    className="form-control"
                    name="data"
                    value={inputData}
                    onChange={(event) => onChangeData(event)}
                />

                <button
                    type="submit"
                    className={`btn btn-outline-${messageInput == "Agregar" ? "success" : "primary"}  m-3`}
                >
                    {messageInput}
                </button>
            </form>


            {messageError && <Message message="Error campo vacio, minimo 4 letras" type="error"/>}


        </>
    );
};

export {TodoInput};