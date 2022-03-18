import React from 'react';
import { Form, Stack, Col } from 'react-bootstrap';

const PostFilter = ({filter, setFilter, groups}) => {

  return (
    <Stack direction="horizontal" className="w-100" gap={2}>
      <Col md={6}>
      <Form.Control
        placeholder="Поиск..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      </Col>
      <Form.Select
        value={filter.group.id}
        onChange={e => setFilter({...filter, group: groups.find(grp => grp.id == e.target.value)})}
      >
        {groups.map(grp =>          
          <option key={grp.id} value={grp.id}>{grp.name}</option>
        )}
      </Form.Select>
      <Form.Select
        value={filter.status}
        onChange={e => setFilter({...filter, status: e.target.value})}
      >
        <option value={-1}>Любой</option>
        <option value={0}>Не начато</option>
        <option value={1}>Выполняется</option>
        <option value={2}>Выполнено</option>
      </Form.Select>
    </Stack>
  );
};

export default PostFilter;