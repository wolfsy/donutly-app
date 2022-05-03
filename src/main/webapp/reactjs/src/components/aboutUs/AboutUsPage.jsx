import { Container, Row, Image, Col } from "react-bootstrap"

import './AboutUsSection.css';

function AboutUsPage() {
    return (
        <>
            <Container fluid className="about-us-section">
                <Row className="my-1 mx-5 py-4">
                    <Col xl={4}>
                        <h1 className="text-start">About us</h1>
                        <p className="text-start col-12">
                            Początkowa koncepcja projektu została utworzona na potrzeby pierwszego
                            laboratorium i zamieszczona na forum przedmiotu na platformie e-learningowej.
                            Wówczas określone zostało, że w ramach projektu zostanie utworzona aplikacja
                            internetowa obsługująca system składania donacji indywidualnym artystom.
                            Powszechnie na rynku istnieją rozwiązania służące wspieraniu osób różnego
                            pokroju, jednakże nie posiadają one pewnej dedykacji, nieczęsto sprawiają
                            trudności osobom starszym, czy młodszym oraz nie posiadają motywu
                            przewodniego. Po dokonaniu skrupulatnej analizy dostępnych rozwiązań
                            wyznaczyliśmy ich słabe strony i określiliśmy punkty będące priorytetowymi.
                            Określenie cech dla sporządzonej aplikacji pozwoliło na zaprojektowanie
                            prostego i intuicyjnego systemu, którego zrozumienie nie będzie stanowić
                            problemu dla każdej grupy wiekowej odbiorców dostarczonej usługi.
                        </p>
                    </Col>
                    <Col xl={4} className="ms-auto">
                        <Image
                            className="img-fluid about-us-img"
                            src="https://i0.wp.com/www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg?w=1920&ssl=1"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUsPage;