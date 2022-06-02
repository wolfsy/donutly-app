import { useRef, useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import UserInfoSection from './UserInfoSection';
import UserSettingsSection from './UserSettingsSection';

import UserService from '../../../services/UserService';
import TokenContext from '../../../context/TokenProvider';

function UserSettingsPanel() {

    const { token } = useContext(TokenContext);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const errorRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try{
                setErrorMsg('');
                const response = await UserService.getUserInfoForUser(token.decoded?.name);
                var data = response.data; 
                var time = new Date(data.lastWithdraw);
                const strTime = time.toLocaleString();
                data.lastWithdraw = strTime.substring(0, strTime.length - 3);
                setUser(data);
                setIsLoading(false);
            }
            catch(err) {
                if (!err?.response)
                    setErrorMsg("No Server Response");
                else
                    setErrorMsg("Error while loading data");
                setIsLoading(false);
                //errorRef.current.focus();
            }
        }

        fetchData();
    }, [token]);

  return (
        <Container className="py-4">
            <Row className="justify-content-center">
                {
                    isLoading ?
                    <Spinner animation="border" variant="secondary" />
                    :
                    (   
                        // !errorMsg ?
                        <>
                            <Col md={5}>
                                <UserInfoSection user={user} />
                            </Col>
                            <Col md={5}>
                                <UserSettingsSection user={user} />
                            </Col>
                        </>
                        // :
                        // <h3 className="text-danger text-center mt-3" 
                        //     ref={errorRef} 
                        //     aria-live="assertive"
                        //     >
                        //         {errorMsg}
                        // </h3>
                    )
                }
            </Row>
        </Container>
  )
}

export default UserSettingsPanel