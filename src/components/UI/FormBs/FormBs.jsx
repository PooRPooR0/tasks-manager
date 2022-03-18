import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

import classes from './FormBs.module.css'

const FormBs = ({create, groups}) => {
    const [task, setTask] = useState({title: "", group: groups[0], dedline: Date.now(), content: "", status: 0});   

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task,
            id: Date.now(),
        }
        create(newTask);
        setTask({title: "", group: 0, dedline: Date.now(), content: "", status: 0});
    }

    function toDatetimeLocal() {
        let date = new Date(task.dedline)
        const ten = (i) => {
            return (i < 10 ? '0' : '') + i;
        }

        const YYYY = date.getFullYear()
        const MM = ten(date.getMonth() + 1)
        const DD = ten(date.getDate())
        const HH = ten(date.getHours())
        const II = ten(date.getMinutes())

        return YYYY + '-' + MM + '-' + DD + 'T' + HH + ':' + II;
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Название</Form.Label>
                <Form.Control
                    name="formTitle"
                    type="text"
                    placeholder="Попить кофе"
                    value={task.title} 
                    onChange={e => setTask({...task, title: e.target.value})}
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroup">
                    <Form.Label>Группа</Form.Label>
                    <Form.Select
                        name="formGroup"
                        value={task.group.id}
                        onChange={e => setTask({...task, group: groups.find(grp => grp.id == e.target.value)})}
                    >
                        {groups.map((grp) => 
                            <option key={grp.id} value={grp.id}>{grp.name}</option>
                        )}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formDate">
                    <Form.Label>Срок</Form.Label>
                    <Form.Control
                        name="formDate"
                        type="datetime-local"
                        value={toDatetimeLocal()} 
                        onChange={e => setTask({...task, dedline: new Date(e.target.value)})}
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formDesc">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    name="formDesc"
                    type="text"
                    placeholder="Кофе должно быть вкусным"
                    value={task.content}
                    onChange={e => setTask({...task, content: e.target.value})}
                />
            </Form.Group>

            <Button className="w-100 mt-2" onClick={addNewTask}>Создать задачу</Button>
        </Form>
    )
        
}

export default FormBs