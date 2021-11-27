import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/base.scss'
import strings from '../utilities/StringsLanguages/turkish'
import { Link } from 'react-router-dom'
import AuthService from '../services/auth/AuthService'

export default function Register() {
    let authService = new AuthService();

    const {
        values,
        errors,
        onBlur,
        setFieldValue,
        dirty,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        touched
    } = useFormik({
        initialValues: {
            name: "",
            username:"",
            email: "",
            password: "",
            confirmPassword: ""
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {

            let user = {
                first_name: values.name,
                username: values.username,
                email: values.email,
                password: values.password,
            };

            console.log(user);

            authService.register(user);
             setTimeout(() => {
                resetForm();
                setSubmitting(false);
             }, 1000);
        },
        validationSchema: Yup.object({
            name: Yup.string().required("İsim boş bırakılamaz."),
            email: Yup.string().required("Email adresi boş bırakılamaz."),
            username: Yup.string().required("Kullanıcı adınızı giriniz."),
            password: Yup.string().required("Şifrenizi giriniz."),
            confirmPassword: Yup.string().required("Şifrenizi doğrulayınız.")
        })
    });
    return (
        <div>
            <div className="auth-container">
                <h2> {strings.pieLangerTitle} </h2>
                <Container classname="form-container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Row>
                                <Col className="col-lg-12 col-md-12 mt-3">
                                    <Form.Control
                                        id="name"
                                        type="text"
                                        label="name"
                                        value={values.name}
                                        error={touched.name && errors.name}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="İsim"
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col className="col-lg-12 col-md-12 mt-3">
                                    <Form.Control
                                        id="username"
                                        type="text"
                                        label="username"
                                        value={values.username}
                                        error={touched.username && errors.username}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Kullanıcı Adı"
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col className="col-lg-12 col-md-12 mt-3">
                                    <Form.Control
                                        id="email"
                                        type="text"
                                        label="Email"
                                        value={values.email}
                                        error={touched.email && errors.email}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Email"
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col className="col-lg-12 col-md-12 mt-3">

                                    <Form.Control
                                        id="password"
                                        type="password"
                                        label="Password"
                                        value={values.password}
                                        error={touched.password && errors.password}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Şifre"
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <Col className="col-lg-12 col-md-12 mt-3">
                                    <Form.Control
                                        id="confirmPassword"
                                        type="password"
                                        label="confirmPassword"
                                        value={values.confirmPassword}
                                        error={touched.confirmPassword && errors.confirmPassword}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Şifre Doğrulama"
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Row>
                            <Col className=" col-lg-6 col-md-12 mt-3 auth-link">
                                <Link to="/"> Zaten bir hesabım var</Link>
                            </Col>
                            <Col className="col-lg-6 col-md-12 mt-3 d-flex justify-content-end">
                                <Button c className="pl-button  pl-primary-button" disabled={!dirty || isSubmitting}>
                                    Kayıt Ol
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </div>
        </div>
    )
}
