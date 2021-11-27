import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../assets/styles/base.scss'
import strings from '../utilities/StringsLanguages/turkish'
import { Link } from 'react-router-dom'
import AuthService from '../services/auth/AuthService'

export default function Login() {
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
            email: "",
            password: "",
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {
            let user = {
                username: values.email,
                password: values.password,
            };

             authService.login(user);
             setTimeout(() => {
                 resetForm();
                 setSubmitting(false);
             }, 1000);

             console.log(user);
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email adresi boş bırakılamaz."),
            password: Yup.string().required("Şifrenizi giriniz."),
        })
    });


    return (
        <div>
            <div className="auth-container">
            <h2> {strings.pieLangerTitle} </h2>

                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Row>
                                <Col className=" col-lg-12 col-md-12 mt-3">
                                    <Form.Control
                                        id="email"
                                        type="text"
                                        label="Email"
                                        value={values.email}
                                        error={touched.email && errors.email}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Kullanıcı adı veya Email"
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

                        <Row>
                            <Col className=" col-lg-6 col-md-12 mt-3 auth-link">
                                <Link to="/forget-password"> Şifremi unuttum </Link>
                            </Col>
                            <Col className="col-lg-6 col-md-12 mt-3 d-flex justify-content-end">
                                <Button type="submit" className="pl-button pl-primary-button" disabled={!dirty || isSubmitting}>
                                    Giriş Yap
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row>
                            <Col className=" col-lg-6 col-md-12 auth-link">
                                <Link to="/register"> Henüz hesabınız yok mu?</Link>
                            </Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}
