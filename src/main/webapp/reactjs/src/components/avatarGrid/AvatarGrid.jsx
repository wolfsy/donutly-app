import { useState, useEffect, useLayoutEffect } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import AvatarRow from './AvatarRow';
import UserService from '../../services/UserService'

function AvatarGrid() {

  const [users, setUsers] = useState([]);
  const [rowSize, setRowSize] = useState(15);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        var response = await UserService.getUsers();

        if(response.data.length < 75) {
          const defaultImg = process.env.PUBLIC_URL + "default_user_avatar.png";
          const fillArray = new Array(75 - response.data.length).fill({avatarUrl: defaultImg});
          response.data = response.data.concat(fillArray);
        }
        
        setUsers(response.data); 
        setIsLoading(false);
    }

    fetchData();
  }, [])

  useLayoutEffect(() => {
    const updateRowSize = () => {
      const width = window.innerWidth;

      if(width > 1900)
        setRowSize(15);
      else if(width > 1780)
        setRowSize(14);
      else if(width > 1650)
        setRowSize(13);
      else if(width > 1520)
        setRowSize(12);
      else if(width > 1400)
        setRowSize(11);
      else if(width > 1270)
        setRowSize(10);
      else if(width > 1140)
        setRowSize(9);
      else if(width > 1020)
        setRowSize(8);
      else if(width > 890)
        setRowSize(7);
      else if(width > 770)
        setRowSize(6);
      else if(width > 625)
        setRowSize(5);
      else if(width > 505)
        setRowSize(4);
      else if(width > 380)
        setRowSize(3);
    };

    window.addEventListener("resize", updateRowSize);
    updateRowSize();

    return () => window.removeEventListener("resize", updateRowSize);
  }, []);

  return (
    <Container id="avatar-grid-container"
               className="position-relative d-flex" fluid>
      {
        isLoading ?
        <Row className="justify-content-center align-content-center w-100 text-secondary">
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            id="loading-spinner"
          />
        </Row>
        :
        <>
          <Row>
            <Col xs={7} sm={7} md={4} lg={3} xl={3} xxl={3}
                className="logo p-3">
              <Image fluid src={process.env.PUBLIC_URL + "donutly_logo.png"}/>
            </Col>
          </Row>
          <Row className="ms-4 my-3 w-100">
            <AvatarRow avatars={users.slice(0, rowSize)} />
            <AvatarRow avatars={users.slice(rowSize, rowSize * 2)} />
            <AvatarRow avatars={users.slice(rowSize * 2, rowSize * 3)} />
            <AvatarRow avatars={users.slice(rowSize * 3, rowSize * 4)} />
            <AvatarRow avatars={users.slice(rowSize * 4, rowSize * 5)} />
          </Row>
        </>
      }
      
    </Container>
  )

}

export default AvatarGrid