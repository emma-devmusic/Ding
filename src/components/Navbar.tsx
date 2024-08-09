
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" id="navbar">
            <a href="#home" className="navbar-brand p-0">
                {/* <!-- <h1 className="m-0"><i className="fa fa-search me-2"></i>Ding<span className="fs-5">M$D</span></h1> --> */}
                <div className="d-flex justify-content-center align-items-center" id="box-logo">
                    <img id="logo1" src="img/logo.png" className="" alt="Logo"/>
                    <img id="logo2" src="img/logo2.jpg" className="d-none" alt="Logo"/>
                    <h3 className="m-0 text-logo">Ding</h3>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="#home" className="nav-item nav-link">Inicio</a>
                    <a href="#about" className="nav-item nav-link">Sobre Nosotros</a>
                    <a href="#contact" className="nav-item nav-link">Contáctanos</a>
                    <a href="#service" className="nav-item nav-link">Servicios</a>
                    <a href="#projects" className="nav-item nav-link">Proyectos</a>
                    <a href="#team-provisorio" className="nav-item nav-link">Nuestro Equipo</a>
                    <a href="#price-section" className="nav-item nav-link">Precios</a>
                    {/* <!-- <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Más</a>
                        <div className="dropdown-menu m-0">
                            <a href="team.html" className="dropdown-item">Nuestro Equipo</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonios</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contacto</a> --> */}
                </div>
                {/* <!-- <butaton type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton> */}
                {/* <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>  */}
            </div>
        </nav>
    )
}
