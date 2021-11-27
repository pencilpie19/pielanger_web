import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../../assets/styles/base.scss'
import strings from '../../utilities/StringsLanguages/turkish'
import MyModal from './Modal';
import { Link } from 'react-router-dom'

export default function ForgetPassword() {


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
        },

        onSubmit: (values, { resetForm, setSubmitting }) => {
            let user = {
                email: values.email,
            };

            // jobPostingService.add(jobPosting);
            // setTimeout(() => {
            //     resetForm();
            //     setSubmitting(false);
            // }, 1000);
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email adresi boş bırakılamaz."),
        })
    });

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <div className="auth-container">
                <h2> {strings.forgetPassword} </h2>
                
                <Container classname="form-container">
                    <Form onSubmit={handleSubmit}>

                        <Row>
                            <Col className="col-lg-12 col-md-12 mt-3">
                                <Form.Group>
                                    <Form.Control
                                        id="email"
                                        type="text"
                                        label="Email"
                                        value={values.email}
                                        error={touched.email && errors.email}
                                        onChange={handleChange}
                                        className="pl-text-box"
                                        placeholder="Email adresinizi giriniz"
                                    ></Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className=" col-lg-6 col-md-12 mt-3 auth-link">
                                <Link to="/"> Geri Dön </Link>
                            </Col>
                            <Col className="col-lg-6 col-md-12 mt-3 d-flex justify-content-end">
                                <Button onClick={() => setModalShow(true)} className="pl-button pl-primary-button" type="submit">
                                    Doğrulama Kodu Gönder
                                </Button>

                                <MyModal show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    setModalShow={setModalShow}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </div>

        </div >
    )
}
