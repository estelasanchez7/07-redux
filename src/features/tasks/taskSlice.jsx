import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        completed: "false",
        description: "This is a task",
    },
    {
        id: "2",
        title: "Task 2",
        completed: "false",
        description: "This is a task",
    },
] 

export const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state,action) => {
            console.log(state,action)
        }
    }
})

export default taskSlice.reducer