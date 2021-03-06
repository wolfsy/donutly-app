import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import UserInfoSection from './UserInfoSection';
import UserSettingsSection from './UserSettingsSection';

import UserService from '../../../services/UserService';
import TokenContext from '../../../context/TokenProvider';

function UserSettingsPanel() {

    const { token } = useContext(TokenContext);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);
    const [dataChanged, setDataChanged] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const updateCallback = (success) => {
        if(success)
            setDataChanged(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            if(dataChanged || initialLoad) {
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
                }
            }
            setDataChanged(false);
            if(initialLoad)
                setInitialLoad(false);
        }

        if(token.decoded)
            fetchData();
            
    }, [token, dataChanged]);

  return (
        <Container className="py-4">
            <Row className="justify-content-center">
                {
                    isLoading ?
                    <Spinner animation="border" variant="secondary" />
                    :
                    (   
                        !errorMsg ?
                        <>
                            <Col xs={12} md={10} lg={6} xl={5} className="my-3">
                                <UserInfoSection user={user} />
                            </Col>
                            <Col xs={12} md={10} lg={6} xl={5} className="my-3">
                                <UserSettingsSection user={user}
                                                     parentCallback={updateCallback}
                                 />
                            </Col>
                        </>
                        :
                        <h3 className="text-danger text-center mt-3" 
                            aria-live="assertive"
                            >
                                {errorMsg}
                        </h3>
                    )
                }
            </Row>
        </Container>
  )
}

export default UserSettingsPanel