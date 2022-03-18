import React from 'react'
import classes from './CardBsGroup.module.css'
import { Button, Card } from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai'

const CardBsGroup = ({group, remove}) => {
  return (
    <Card className={classes.card_custom}>
        <Card.Body className="d-flex justify-content-between align-content-center p-2">
            <Card.Text className={classes.card_custom_title}>{group.name}</Card.Text>
            <Button className={classes.card_custom_button} variant="danger" onClick={() => remove(group)}><AiOutlineDelete /></Button>
        </Card.Body>
    </Card>
  )
}

export default CardBsGroup