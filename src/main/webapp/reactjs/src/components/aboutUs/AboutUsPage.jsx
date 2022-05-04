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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Tristique sollicitudin nibh sit amet.
                            Mauris nunc congue nisi vitae suscipit tellus mauris a.
                            Sit amet nisl suscipit adipiscing bibendum est.
                            Ac orci phasellus egestas tellus rutrum tellus.
                            Curabitur gravida arcu ac tortor dignissim.
                            Posuere sollicitudin aliquam ultrices sagittis. Lorem ipsum dolor sit amet.
                            At volutpat diam ut venenatis tellus in.
                            Sit amet facilisis magna etiam tempor orci eu lobortis elementum.
                            Enim nunc faucibus a pellentesque sit amet porttitor.
                        </p>
                        <p className="text-start col-12">
                            Ligula ullamcorper malesuada proin libero nunc.
                            Id volutpat lacus laoreet non curabitur gravida.
                            Fames ac turpis egestas maecenas.
                            Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.
                            Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                            Nam libero justo laoreet sit amet cursus sit amet dictum.
                            Hendrerit dolor magna eget est lorem ipsum.
                            Eget nunc scelerisque viverra mauris in aliquam sem fringilla.
                            Malesuada fames ac turpis egestas. Laoreet sit amet cursus sit.
                            Scelerisque eu ultrices vitae auctor eu augue ut.
                            Faucibus purus in massa tempor nec feugiat.
                            Vel facilisis volutpat est velit egestas dui id.
                            Id venenatis a condimentum vitae sapien pellentesque habitant.
                            Id semper risus in hendrerit gravida rutrum quisque.
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