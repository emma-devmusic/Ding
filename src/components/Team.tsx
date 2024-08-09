
export const Team = () => {
    
    return (
        <div className="container-xxl py-5" id="team-provisorio">
            <div className="container px-lg-5" id="box-container-team">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Nuestro Equipo</h6>
                    <h2 className="mt-2">Los Miembros de Nuestro Equipo</h2>
                </div>
            </div>
            <div className="row g-4 box-team-provisorio" id="box-team">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item emma">
                        <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5 icons" style={{width: "75px"}}>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <img className="img-fluid rounded w-100" src="img/team-emma.png" alt="logo emma"/>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="fw-bold m-0">Emmanuel Araujo</h5>
                            <small>Frontend Developer</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item seba">
                        <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5 icons" style={{width: "75px"}}>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <img className="img-fluid rounded w-100" src="img/team-seba.png" alt="logo seba"/>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="fw-bold m-0">Sebastian Lescano</h5>
                            <small>Backend Developer - DevOps</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="team-item lucas">
                        <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5 icons" style={{width: "75px"}}>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <img className="img-fluid rounded w-100" src="img/team-lucas.png" alt="team lucas"/>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="fw-bold m-0">Lucas Gonzalez</h5>
                            <small>Content Creator</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="team-item marcos">
                        <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5 icons" style={{width: "75px"}}>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <img className="img-fluid rounded w-100" src="img/team-marcos.png" alt="Team Marcos"/>
                        </div>
                        <div className="px-4 py-3">
                            <h5 className="fw-bold m-0">Marcos Gomez</h5>
                            <small>Community Manager</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
