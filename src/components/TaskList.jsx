import { Alert } from 'react-bootstrap'
import React from 'react'
import CardBs from './UI/CardBs/CardBs'

const TaskList = ({tasks, remove, statusUp, statusDown, ...props}) => {

    if(!tasks.length) {
        return (
            <div className=''>
                <Alert variant="light">
                    <h5>Задачи</h5>
                </Alert>
                <hr />
                <Alert variant="info">
                    Задач нет
                </Alert>
            </div>
        )
    }

    return (
        <div>
            <Alert variant="light">
                <h5>Задачи</h5>
            </Alert>
            <hr />
            {tasks.map((task) =>        
                <CardBs
                key={task.id}
                remove={remove}
                task={task}
                statusUp={statusUp}
                statusDown={statusDown}
                />
            )}
        </div>
    )
}

export default TaskList