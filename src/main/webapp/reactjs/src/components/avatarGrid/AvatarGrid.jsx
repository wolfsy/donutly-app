import { useState, useEffect, useLayoutEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import AvatarRow from './AvatarRow';
import UserService from '../../services/UserService'

function AvatarGrid() {

  const [users, setUsers] = useState([])
  const [rowSize, setRowSize] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
        const response = await UserService.getUsers();
        setUsers(response.data);   
    }

    fetchData();
  }, [])

  useLayoutEffect(() => {
    const updateRowSize = () => {
      const width = window.innerWidth;

      if(width > 1900)
        setRowSize(12);
      else if(width > 1720)
        setRowSize(11);
      else if(width > 1580)
        setRowSize(10);
      else if(width > 1420)
        setRowSize(9);
      else if(width > 1280)
        setRowSize(8);
      else if(width > 1120)
        setRowSize(7);
      else if(width > 980)
        setRowSize(6);
      else if(width > 810)
        setRowSize(5);
      else if(width > 630)
        setRowSize(4);
      else if(width > 520)
        setRowSize(3);
      else if(width > 450)
        setRowSize(2);
    };

    window.addEventListener("resize", updateRowSize);
    updateRowSize();

    return () => window.removeEventListener("resize", updateRowSize);
  }, []);

  return (
    <Container className='position-relative' fluid>
      <Row>
        <Col xs={7} sm={7} md={4} lg={3} xl={3} xxl={3}
             className="logo p-3">
          <Image fluid src={process.env.PUBLIC_URL + 'donutly_logo.png'}/>
        </Col>
      </Row>
      <Row className="mx-auto my-4">
        <AvatarRow avatars={users.slice(0, rowSize)} />
        <AvatarRow avatars={users.slice(rowSize, rowSize * 2)} />
        <AvatarRow avatars={users.slice(rowSize * 2, rowSize * 3)} />
        <AvatarRow avatars={users.slice(rowSize * 3, rowSize * 4)} />
      </Row>
    </Container>
  )

}

export default AvatarGrid