const reducerTodo = (stage: never[], action: { type: string; payload: { id?: string | number, description?: string, done?: boolean }; }) => {
    switch (action.type) {
        case "[TODO] todo add": {
            return [
                ...stage,
                action.payload
            ]
        }

        case "[TODO] remove todo": {
            return stage.filter((todo: { id: string; }) => todo.id !== action.payload)
        }

        case "[TODO] edit todo": {
            return stage.map((todo: { id: string, done: boolean }) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description
                    }

                }

                return todo
            })
        }

        case "[TODO] complete todo": {

            return stage.map((todo: { id: string, done: boolean }) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }

                }

                return todo
            })
        }

        default:
            return stage
    }
};

export {reducerTodo}

