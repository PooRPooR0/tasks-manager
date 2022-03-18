import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import './styles/App.css';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div className='wrapper-top'>
        <header className="d-flex align-content-center">
          <Container className="mt-auto mb-auto">
            <Row>
              <Col md={4} className='d-flex align-content-center'>
                <span className='logo mb-auto mt-auto'>Менеджер задач</span>
              </Col>
            </Row>
          </Container>
        </header>

        <Tasks />
      </div>

      <div className='footer'>
        <Container>
          <p className="text-end text-light"><em>Design by PooRPooR</em></p>
        </Container>
      </div>
    </div>
  )
}

export default App;