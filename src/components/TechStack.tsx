import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const TechStack = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div className="container-xxl py-5 bg-primary tech-stack">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-light ps-4">Herramientas</h6>
                    <h2 className="mt-2 text-light">Tech Stack</h2>
                </div>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    // showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px ms-4 me-4"
                >
                {/* <div className="owl-carousel tech-stack-carousel p-2" id=""> */}
                    <div className="testimonial-item bg-transparent border rounded text-white p-4 d-flex justify-content-center flex-column align-items-center mb-1">
                        <i className="fa fa-brands fa-js fa-2x mb-1"></i>
                        <h6 className="text-light">Javascript</h6>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4 d-flex justify-content-center flex-column align-items-center mb-1">
                        <i className="fa fa-brands fa-node-js fa-2x mb-1"></i>
                        <h6 className="text-light">Node.js</h6>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4 d-flex justify-content-center flex-column align-items-center mb-1">
                        <i className="fa fa-brands fa-react fa-2x mb-1"></i>
                        <h6 className="text-light">React.js</h6>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4 d-flex justify-content-center flex-column align-items-center mb-1">
                        <i className="fa fa-brands fa-css3-alt fa-2x mb-1"></i>
                        <h6 className="text-light">CSS3</h6>
                    </div>
                {/* </div> */}
                </Carousel>
            </div>
        </div>
    )
}
