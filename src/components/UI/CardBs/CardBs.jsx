import React from 'react'
import classes from './CardBs.module.css'
import { Button, Card } from 'react-bootstrap'
import {AiOutlineDelete, AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const CardBs = ({task, remove, statusUp, statusDown}) => {
    let dedline = new Date(task.dedline)
    var hour = dedline.getHours()
    if (hour < 10) hour = '0' + hour
    var min = dedline.getMinutes()
    if (min < 10) min = '0' + min
    const formatDedlineTime = hour + ":" + min;

    let status;
    let indicate_class = [classes.card_custom_indicate];

    switch(task.status){
        case 0:
            status = "Не начато";
            indicate_class.push(classes.card_custom_indicate_red)
            break;
        case 1:
            status = "Выполняется";
            indicate_class.push(classes.card_custom_indicate_yellow)
            break;
        case 2:
            status = "Выполнено";
            indicate_class.push(classes.card_custom_indicate_green)
            break;
    }

    return (
        <Card className={classes.card_custom}>
            <Card.Body>
                <Card.Title className={classes.card_custom_title}>{task.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted d-flex justify-content-between">
                    <span>{task.group.name}</span>
                    <span>{formatDedlineTime} {dedline.toLocaleDateString()}</span>               
                </Card.Subtitle>
                <Card.Text>{task.content}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex justify-content-start gap-1'>
                    <Button
                        className={classes.card_custom_button}
                        variant="primary"
                        onClick={() => statusUp(task)}>
                        <AiOutlineArrowUp />
                    </Button>
                    <Button
                        className={classes.card_custom_button}
                        variant="primary"
                        onClick={() => statusDown(task)}>
                        <AiOutlineArrowDown />
                    </Button>
                    <Button
                        className={classes.card_custom_button}
                        variant="danger"
                        onClick={() => remove(task)}>
                        <AiOutlineDelete />
                    </Button>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span className={classes.card_custom_status}>{status}</span>
                    <div className={indicate_class.join(" ")}></div>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default CardBs