import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

const FormBsGroup = ({create}) => {
    const [group, setGroup] = useState({name: ""})

    const addNewGroup = (e) => {
        e.preventDefault();
        const newGroup = {
            ...group,
            id: Date.now(),
        }
        create(newGroup);
        setGroup({name: ""});
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Название</Form.Label>
                <Form.Control
                    name="formTitle"
                    type="text"
                    placeholder="Группа номер 1"
                    value={group.name} 
                    onChange={e => setGroup({...group, name: e.target.value})}
                />
            </Form.Group>

            <Button className="w-100 mt-2" onClick={addNewGroup}>Создать группу</Button>
        </Form>
    )
}

export default FormBsGroup