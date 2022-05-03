import { useState, useEffect, useLayoutEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
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

  // useLayoutEffect(() => {
  //   const updateRowSize = () => {

  //     if(window.innerWidth < 1600)
  //       setRowSize(6);
  //   };

  //   window.addEventListener("resize", updateRowSize);
  //   updateRowSize();

  //   return () => window.removeEventListener("resize", updateRowSize);
  // }, []);

  return (
    <Container fluid>
      <Row className="mx-auto my-4">
        <AvatarRow avatars={users.slice(0, 12)} />
        <AvatarRow avatars={users.slice(12, 24)} />
        <AvatarRow avatars={users.slice(24, 36)} />
        <AvatarRow avatars={users.slice(36, 48)} />
      </Row>
    </Container>
  )

}

export default AvatarGrid