import React from 'react'
import TodoItem from './TodoItem'

const todos = [
    {
        id: '1',
        title: 'Finish the essay coloboration',
        isCompleted: false,
    },
    {
        id: '2',
        title: 'read next',
        isCompleted: false,
    },
    {
        id: '3',
        title: 'Finish the essay coloboration',
        isCompleted: false,
    }
]


const Home = () => {
  return (
    <div className=' h-screen w-4/5 mx-auto'>
        <h1>Todo for junior</h1>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default Home