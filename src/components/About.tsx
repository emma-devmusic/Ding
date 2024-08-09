
export const About = () => {
    return (
        <div className="container-xxl py-5" id="about">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4">Sobre Nosotros</h6>
                            <h2 className="mt-2">Un equipo con compromiso y experiencia</h2>
                        </div>
                        <p className="mb-4">Nos dedicamos a colaborar con emprendedores y empresas en el impulso de su desarrollo en el ámbito de la transformación digital.
                            <br/>
                            Alcanzamos nuestros objetivos mediante un enfoque laboral que abarca desde el modelado de procesos hasta la aplicación de design thinking en la definición de proyectos, y finalmente, la utilización de metodologías ágiles en la ejecución del trabajo en equipo durante el desarrollo del proyecto.
                            <br/>
                            Somos el aliado estratégico para encontrar las soluciones tecnológicas adecuadas.</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Marketing</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Desarrollo</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Diseño</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Branding</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="#team-provisorio">Nuestro Equipo</a>
                            <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3 btn-social-ding" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square btn-social-ding" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
