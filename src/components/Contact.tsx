import React, { useState } from "react";
import { useForm } from "../hooks/useForm"
import { useSweetAlert, validateForm } from "../helpers/functions";
import { fetchData } from "../services/fetchdata";
import { Spinner } from ".";

export const Contact = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cleanForm, setCleanForm] = useState<boolean>(false)
    const [ values, handleInputChange, reset ] = useForm({
        name: '',
        matter: '',
        email: '',
        phone: '',
        message: ''
    })
    const [ validate, msg ] = validateForm(values)
    
    const handleForm = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {

        e.preventDefault();
        setIsLoading(true)
        if(validate){
            fetchData("POST", "contact/", values, import.meta.env.VITE_COMMERCE_ID)
            .then( () => { 
                useSweetAlert({
                    title: 'Mensaje Enviado',
                    body: 'Mensaje enviado correctamente.',
                    icon: 'success'
                })
                setCleanForm(true)
            })
            .catch( () => {
                useSweetAlert({
                    title: 'Mensaje No Enviado',
                    body: 'Por el momento no podemos enviar el mensaje. Intente nuevamente más tarde.',
                    icon: 'error'
                })
            })
            .finally( () => setIsLoading(false) )
            if(cleanForm) reset()
        }
    }

    return (
        <div id="contact" className="container-xxl"> 
            { isLoading && <Spinner /> }
            <div className="container mt-5 mb-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline  ps-4">Ding</h6>
                    <h2 className="mt-2 ">Contáctanos</h2>
                </div>
                <div className="row justify-content-center ">
                    <div className="row justify-content-center mt-3 mb-4 container-box-contact">
                        <div className="col-lx-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div className="box-contact d-flex shadow wow fadeInDown p-3">
                                <div className="icon d-flex align-items-center ">
                                    <i className="fa-solid fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    <h5>Email</h5>
                                    <a href="mailto:info@dingtech.com.ar?subject=Contacto">Info@dingtech.com.ar</a>
                                    <br/>
                                    <a href="mailto:info@dingtech.com.ar?subject=Necesito Ayuda">Support@dingtech.com.ar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lx-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div className="box-contact d-flex shadow wow fadeInDown p-3">
                                <div className="icon d-flex align-items-center ">
                                    <i className="fa fa-phone fa-2x" ></i>
                                </div>
                                <div>
                                    <h5>Teléfonos</h5>
                                    <a href="tel:+543731455614" className="d-block">+54 3731 455614</a>
                                    {/* <!-- <a href="">+54 3624 924514</a> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="get-in-touch">
                            <h6>¡No esperes más!</h6>
                            <hr/>
                            <p>Dejanos tu mensaje. También puedes hechar un vistazo a nuestras redes sociales</p>
                            <div className="d-flex mb-4">
                                <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-primary btn-square btn-social-ding" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form col-lg-8 col-md-12 col-sm-12 ">
                        <form action="" className="" >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group mb-4">
                                        <input
                                            name="name" 
                                            type="text" 
                                            className="form-control rounded-pill" 
                                            id="name" 
                                            placeholder="Nombre y Apellido"
                                            value={values.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group mb-4">
                                        <input
                                            name="matter" 
                                            type="text" required 
                                            className="form-control rounded-pill" 
                                            id="matter" 
                                            placeholder="Asunto"
                                            value={values.matter}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group mb-4">
                                        <input
                                            name="email" 
                                            type="email" required 
                                            className="form-control rounded-pill" 
                                            id="email" 
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group mb-4">
                                        <input
                                            name="phone" 
                                            type="phone" required 
                                            className="form-control rounded-pill" 
                                            id="phone" 
                                            placeholder="Teléfono"
                                            value={values.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">                        
                                    <div className="form-group mb-4">
                                        <textarea
                                            name="message" 
                                            required 
                                            className="form-control rounded" 
                                            id="message" 
                                            placeholder="Escribe tu mensaje aquí..."
                                            value={values.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="mb-4 ">
                                        <input 
                                            type="button" 
                                            className="btn btn-primary rounded-pill" 
                                            value="Enviar" 
                                            disabled={!validate}
                                            onClick={handleForm}
                                        />
                                    </div>
                                </div>
                                <div>
                                    {
                                        msg.map( (p,i) => <p key={i}>{p}</p>)
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    )
}
