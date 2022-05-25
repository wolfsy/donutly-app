import { Card, Image, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './UserDetails.css';

function UserDetailsCard({ user }) {
  return (
    <Row className="d-flex justify-content-center bg-light-powder py-5">
        <Col xs={11} xl={9}>
            <Card className="my-3 user-card p-3 shadow-sm">
                <Card.Body>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={4} xl={4}
                             className=""
                        >
                            <div className="d-flex justify-content-start align-items-end">
                              <div className="user-card-img-container p-4 me-2">
                                    <Image className="user-card-img" src={user.avatarUrl} />
                              </div>
                              <Stack className="d-flex mt-auto" direction="horizontal" gap={2}>
                                  <FontAwesomeIcon 
                                      icon={user.adminVerification ? "fa-solid fa-square-check" : "fa-solid fa-square"}
                                      className="verified-check" 
                                  />
                                  <span>{user.adminVerification ? "Verified" : "Not verified"}</span>
                              </Stack>
                            </div>
                            <Stack className="mt-4 ms-1" direction="horizontal" gap={1}>
                              <a className="follow-link" href={user.youtubeUrl} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="user-card-icon red-icon-hover" icon="fa-brands fa-youtube" />
                              </a>
                              <a className="follow-link" href={user.instagramUrl} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="user-card-icon purple-icon-hover" icon="fa-brands fa-instagram" />
                              </a>
                              <a className="follow-link" href={user.tiktokUrl} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="user-card-icon gray-icon-hover" icon="fa-brands fa-tiktok" />
                              </a>
                            </Stack>
                        </Col>
                        <Col xs={9} sm={10} md={4} lg={6} xl={6} 
                             className="text-start mt-5 mt-md-0"
                        >
                            <h3>{user.login}</h3>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                            <p>{user.profileDescription}</p>
                        </Col>
                        <Col xs={3} sm={2} md={3} lg={2} xl={2} 
                             className="d-flex flex-column justify-content-start align-items-center mt-5 mt-sm-5 mt-md-0">
                            <p className="mb-5 fst-italic">{user.payment} PLN</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default UserDetailsCard