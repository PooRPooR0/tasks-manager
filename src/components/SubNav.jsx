import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PostFilter from './PostFilter'
import FormBs from './UI/FormBs/FormBs'
import FormBsGroup from './UI/FormBsGroup/FormBsGroup'
import ModalBs from './UI/ModalBs/ModalBs'

const SubNav = ({
    filter,
    setFilter,
    groups,
    setModalTask,
    setModalGroup,
    createGroup,
    createTask,
    modalTask,
    modalGroup
}) => {
    return (
        <div className='sub_nav d-flex align-content-center'>
            <Container className="mt-auto mb-auto">
                <Row>
                    <Col lg={8} className='d-flex align-content-center'>
                        <PostFilter filter={filter} setFilter={setFilter} groups={groups} />
                    </Col>
                    
                    <Col className='d-flex align-content-center mt-2 mt-lg-0 justify-content-center justify-content-lg-end gap-3'>
                        <Button onClick={() => setModalTask(true)}>
                            Новая задача
                        </Button>
                        <ModalBs
                            show={modalTask}
                            onHide={() => setModalTask(false)}
                            title='Новая задача'
                        >
                            <FormBs create={createTask} groups={groups} />
                        </ModalBs>
                        <Button onClick={() => setModalGroup(true)}>
                            Новая группа
                        </Button>
                        <ModalBs
                            show={modalGroup}
                            onHide={() => setModalGroup(false)}
                            title='Новая группа'
                        >
                            <FormBsGroup create={createGroup} />
                        </ModalBs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubNav