

export const Portfolio = () => {


    return (
        <div className="container-xxl py-5" id="projects">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Proyectos</h6>
                    <h2 className="mt-2">Algunos Proyectos Lanzados Y Templates</h2>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="btn px-3 pe-4 " data-filter="*">Marketin de Contenido & Desarrollo Web</li>
                            {/* <li className="btn px-3 pe-4" data-filter=".first">Marketing</li>
                            <li className="btn px-3 pe-4" data-filter=".second">Desarrollo</li> */}
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/accdl1.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/accdl1.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Content Desing</small>
                                    <span className="h5 d-block text-white mt-1 mb-0" >Club Libertad de Charata</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/eduwell.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/eduwell.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0 link" href="https://demoweb01.ding.com.ar/" target="_blank">Visita EduWell</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/AEP-CARTELERA.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/AEP-CARTELERA.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Content Design</small>
                                    <span className="h5 d-block text-white mt-1 mb-0" >Cartelera de Cortometraje</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/bizconsult.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/bizconsult.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0 link" href="https://demoweb02.ding.com.ar/" target="_blank">Visita BizConsult</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/enviados-entradas.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/enviados-entradas.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Content Design</small>
                                    <span className="h5 d-block text-white mt-1 mb-0" >Contenido para redes del Campamento Enviados</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/proyects/star-admin.webp" alt=""/>
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/proyects/star-admin.webp" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0 link" href="https://demoweb03.ding.com.ar/" target="_blank">Prueba Star Administrator</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
