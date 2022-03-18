import React, { useState } from 'react'
import TaskList from '../components/TaskList'
import { usePosts } from '../hooks/usePost'
import { Col, Row, Container } from 'react-bootstrap'
import GroupsList from '../components/GroupsList'
import SubNav from '../components/SubNav'

const Tasks = () => {
    const [groups, setGroups] = useState([{name: "Без группы", id: 0}]);
    const [tasks, setTasks] = useState([]);
    const [modalTask, setModalTask] = useState(false);
    const [modalGroup, setModalGroup] = useState(false);
    const [filter, setFilter] = useState({query: "", group: groups[0], status: -1});

    const sortedAndSearchedTasks = usePosts(tasks, filter.query, filter.group, filter.status);

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setModalTask(false);
    }
  
    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const createGroup = (newGroup) => {
        setGroups([...groups, newGroup]);
        setModalGroup(false);
    }

    const removeGroup = (group) => {
        setGroups(groups.filter(g => g.id !== group.id))
        setFilter({...filter, group: groups[0]})
        setTasks(tasks.filter(task => task.group.id != group.id))
    }

    const taskStatusUp = (task) => {
        if (task.status == 2) return
        task.status = task.status + 1
        setTasks([...tasks])
    }

    const taskStatusDown = (task) => {
        if (task.status == 0) return
        task.status = task.status - 1
        setTasks([...tasks])
    }

    return (
        <div className='tasks-page'>
            <SubNav
                filter={filter}
                setFilter={setFilter}
                groups={groups}
                setModalGroup={setModalGroup}
                setModalTask={setModalTask}
                createGroup={createGroup}
                createTask={createTask}
                modalTask={modalTask}
                modalGroup={modalGroup}
            />
            <Container className="content">
                <Row>
                    <Col md={8}>
                        <TaskList
                            tasks={sortedAndSearchedTasks}
                            remove={removeTask}
                            statusUp={taskStatusUp}
                            statusDown={taskStatusDown}
                        />
                    </Col>
                    <Col>
                        <GroupsList groups={groups} remove={removeGroup}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tasks