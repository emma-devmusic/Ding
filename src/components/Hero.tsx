import { ReactTyped } from "react-typed";

export const Hero = () => {
    return (
        <div className="container-xxl py-5 bg-primary hero-header mb-5" id="home">
            <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5 py-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated zoomIn">
                            <ReactTyped 
                                strings={
                                    [
                                        "Toda la Solución Comercial para tu Negocio <br/><span class='words'><strong>Marketing</strong></span>", 
                                        "Toda la Solución Comercial para tu Negocio <br/><span class='words'><strong>Branding</strong></span>", 
                                        "Toda la Solución Comercial para tu Negocio <br/><span class='words'><strong>Aplicaciones</strong></span>", 
                                        "Toda la Solución Comercial para tu Negocio <br/><span class='words'><strong>Desarrollo</strong></span>", 
                                        "Toda la Solución Comercial para tu Negocio <br/><span class='words'><strong>SEO</strong></span>",
                                    ]
                                } 
                                backSpeed={20}
                                typeSpeed={35} 
                                startDelay={300}
                                contentType="html"
                                shuffle={false}
                                backDelay={700}
                                loop
                                smartBackspace
                                cursorChar={'|'}
                            />
                        </h1>
                        <p className="text-white pb-3 animated zoomIn">Somos un estudio creativo que utiliza talento, experiencia y estrategia para alcanzar los objetivos de nuestros clientes, potenciar su presencia online y aumentar las ventas.</p>
                        <a href="#projects" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Portafolio</a>
                        <a href="#contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contáctanos</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid" src="img/hero.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
