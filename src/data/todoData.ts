export interface TodoProps {
    id: string;
    description: string
    done: boolean
}

export const initData = [
    {
        id: new Date().getMilliseconds(),
        description: "Dragon ball z",
        done: false
    },
    {
        id: new Date().getMilliseconds() + 3,
        description: "Naruto",
        done: false
    }
]


export const finalData = () => {
    const storedData = localStorage.getItem('todo');
    return storedData ? JSON.parse(storedData) : null;
};