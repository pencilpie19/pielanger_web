import React, { useState } from 'react'
import '../assets/styles/auth.scss'
import { Button, Row, Col, Container } from 'react-bootstrap'
import vector_img from '../medias/auth.png'
import vector_img1 from '../medias/auth1.png'
import vector_img2 from '../medias/auth2.png'
import vector_img3 from '../medias/auth3.png'
import { Route,Link } from "react-router-dom"
import Carousel from 'nuka-carousel';
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgetPassword from '../pages/forgetpassword/ForgetPassword'
import Footer from '../layouts/Footer';
import app_store_download from '../medias/app-store.png';
import google_play_download from '../medias/google-play.png';


export default function Auth() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className="hero">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

                <Container className="carousel-container">
                    <Row>
                        <Col className="col-lg-6 col-md-6">
                            <Carousel className="pl-carousel" slidesToShow={1} cellSpacing={20}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    <button onClick={previousSlide}><i className="fas fa-arrow-left" /></button>
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    <button onClick={nextSlide}><i className="fas fa-arrow-right" /></button>
                                )}
                            >
                                <img src={vector_img} />
                                <img src={vector_img1} />
                                <img src={vector_img2} />
                            </Carousel>
                        </Col>

                        <Col className="col-lg-4 col-md-4">
                            <Container className="form-container">
                                <Route exact path="/" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/forget-password" component={ForgetPassword} />
                            </Container>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className="col-lg-4">
                            <Container className="download-app-container">
                                <h6 className="mb-4"> Uygulamayı İndir </h6>
                                <Row>
                                    <Col className="col-lg-6">
                                        <Link to="#"> <img src={app_store_download}/> </Link>
                                    </Col>
                                    <Col className="col-lg-6">
                                    <Link to="#"> <img src={google_play_download}/> </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>  
                </Container>


            </div>


        </div>
    )
}
