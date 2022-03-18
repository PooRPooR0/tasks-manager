import React from 'react'
import { Alert } from 'react-bootstrap';
import CardBsGroup from './UI/CardBsGroup/CardBsGroup'

const GroupsList = ({groups, remove, ...props}) => {
  const groupsWithoitDefault = groups.filter(grp => grp.id != 0);

  if(!groupsWithoitDefault.length) {
    return (
        <div>
            <Alert variant="light">
              <h5>Группы</h5>
            </Alert>
            <hr />
            <Alert variant="info">
              Групп нет
            </Alert>
        </div>
    )
}

  return (
    <div>
        <Alert variant="light">
          <h5>Группы</h5>
        </Alert>
        <hr />
        {groupsWithoitDefault.map(group => 
            <CardBsGroup key={group.id} remove={remove} group={group}/>    
        )}
    </div>
  )
}

export default GroupsList